/* eslint-disable no-undef */
import { APIGatewayProxyHandler } from "aws-lambda";
import _ from "lodash";
import Parser from "rss-parser";
import { v4 as uuid } from "uuid";
import { fetchRaidBosses, fetchServerDeathLogs, fetchServers, persisDeathLog } from "./api";

const parser = new Parser();
const TTL_DURATION = 24 * 30;

const calculateTtl = () => {
  const SECONDS_IN_AN_HOUR = 60 * 60;
  const secondsSinceEpoch = Math.round(Date.now() / 1000);
  return secondsSinceEpoch + TTL_DURATION * SECONDS_IN_AN_HOUR;
};

/* Amplify Params - DO NOT EDIT
API_ASTERIOSAPI_GRAPHQLAPIENDPOINTOUTPUT
API_ASTERIOSAPI_GRAPHQLAPIIDOUTPUT
API_ASTERIOSAPI_GRAPHQLAPIKEYOUTPUT
ENV
REGION
Amplify Params - DO NOT EDIT */

const fetchRssFeed = async (serverId: number): Promise<RaidBossDeathRssRecordType[]> => {
  const URL = `https://asterios.tm/index.php?cmd=rss&serv=${serverId}&id=keyboss&out=xml`;
  const feed = await parser.parseURL(URL);

  const { items } = feed;
  if (!items) {
    throw new Error("Unable to get rss feed");
  }

  return items as RaidBossDeathRssRecordType[];
};

// lambda function
export const handler: APIGatewayProxyHandler = async () => {
  //fetch configured server from dynamo db
  const servers = await fetchServers<ServerType>();

  //fetch configured raidbosses
  const raidBosses = await fetchRaidBosses<RaidBossType>();

  //keep the list of promises to await
  for (let i = 0; i < servers.length; i++) {
    const server = servers[i];
    //fetch rss data from asterios website
    const rssFeedData = await fetchRssFeed(server.asteriosId);

    //fetch death logs from dynamodb
    const deathLogs = await fetchServerDeathLogs<ServerDeathLog>(server.id);

    for (let k = 0; k < raidBosses.length; k++) {
      const boss = raidBosses[k];
      //find boss in data
      const rssFeedBossData = rssFeedData.find((item) => item.title?.includes(boss.name));

      // move to next boss if not boss death rss logs
      if (!rssFeedBossData) {
        console.log("unable to find rss boss data");
        continue;
      }

      //find last stored death log
      const lastDeathLog = deathLogs.find((log) => +boss.id === +log.raidBossId);

      // its a first death log
      if (!lastDeathLog) {
        console.log(`No death logs detected for ${boss.name} on ${server.name}`);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { pubDate, guid, ...rest } = rssFeedBossData;

        const log: RaidBossDeathRecordType = {
          id: uuid(),
          ...rest,
          _ttl: calculateTtl(),
          serverId: server.id,
          raidBossId: boss.id,
        };

        await persisDeathLog(log);
        continue;
      }

      // compare to last death log
      const lastLogDeathDate = new Date(lastDeathLog.isoDate);
      const rssLogDate = new Date(rssFeedBossData.isoDate);

      if (lastLogDeathDate < rssLogDate) {
        console.info(`Inserting new death log for ${boss.name} on ${server.name} `);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { pubDate, guid, ...rest } = rssFeedBossData;
        const log: RaidBossDeathRecordType = {
          id: uuid(),
          ...rest,
          _ttl: calculateTtl(),
          serverId: server.id,
          raidBossId: boss.id,
        };
        await persisDeathLog(log);
        continue;
      }

      console.info(`Nothing new yet for ${boss.name} on ${server.name}`);
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify("Done!"),
  };
};
