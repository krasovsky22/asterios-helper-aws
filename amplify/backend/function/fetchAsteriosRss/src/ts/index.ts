import { APIGatewayProxyHandler, APIGatewayProxyEvent } from "aws-lambda";
import Parser from "rss-parser";
import { v4 as uuid } from "uuid";
import { fetchRaidBosses, fetchServerDeathLogs, fetchServers, persisDeathLog } from "./api";

const parser = new Parser();

/* Amplify Params - DO NOT EDIT
API_ASTERIOSAPI_GRAPHQLAPIENDPOINTOUTPUT
API_ASTERIOSAPI_GRAPHQLAPIIDOUTPUT
API_ASTERIOSAPI_GRAPHQLAPIKEYOUTPUT
ENV
REGION
Amplify Params - DO NOT EDIT */

type ServerType = {
  id: number;
  enabled: boolean;
  name: string;
  asteriosId: number;
};

type RaidBossType = {
  id: number;
  name: string;
  deathLogs: {
    items: {
      id: number;
      isoDate: string;
      serverId: number;
      raidBossId: number;
    }[];
  };
};

type RaidBossDeathRecordType = {
  id: string;
  title: string;
  link: string;
  content: string;
  isoDate: string;
  serverId: number;
  raidBossId: number;
  contentSnippet: string;
};

type RaidBossDeathRssRecordType = {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  contentSnippet: string;
  guid: string;
  isoDate: string;
};

type ServerDeathLog = {
  id: string;
  isoDate: string;
  raidBossId: string;
  serverId: string;
};

const fetchRssFeed = async (serverId: number): Promise<RaidBossDeathRssRecordType[]> => {
  const URL = `https://asterios.tm/index.php?cmd=rss&serv=${serverId}&id=keyboss&out=xml`;
  const feed = await parser.parseURL(URL);

  const { items } = feed;
  if (!items) {
    throw new Error("Unable to get rss feed");
  }

  return items as RaidBossDeathRssRecordType[];
};

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent) => {
  const servers = await fetchServers<ServerType>();
  const raidBosses = await fetchRaidBosses<RaidBossType>();

  servers.forEach(async (server: ServerType) => {
    const rssFeedData = await fetchRssFeed(server.asteriosId);
    const deathLogs = await fetchServerDeathLogs<ServerDeathLog>(server.id);
    console.log(deathLogs, server.id);
    return;

    raidBosses.forEach(async (boss) => {
      const rssFeedBossData = rssFeedData.find((item) => item.title?.includes(boss.name));

      if (!rssFeedBossData) {
        return;
      }

      //if first death log, just insert it;
      if (boss.deathLogs.items.length === 0) {
        //remove keys we dont need
        const { pubDate, guid, ...rest } = rssFeedBossData;
        const log: RaidBossDeathRecordType = {
          id: uuid(),
          ...rest,
          serverId: server.id,
          raidBossId: boss.id,
        };
        return await persisDeathLog(log);
      }

      console.log(boss.deathLogs.items);
      //   const reportDate = new Date(rssFeedBossData.isoDate);
      //   console.log(rssFeedBossData);
    });
  });
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify("Done!"),
  };

  return response;
};
