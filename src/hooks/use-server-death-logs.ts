import {
  ListByIsoDateQuery,
  ListByIsoDateQueryVariables,
  ModelSortDirection,
  OnCreateDeathLogSubscription,
} from "@/api/AWSApi";
import callGraphQL from "@/api/callGraphQL";
import subscribeGraphQL from "@/api/subscribeGraphQL";
import { listByIsoDate } from "@/graphql/queries";
import { onCreateDeathLog } from "@/graphql/raidboss-log-subscription";
import { useEffect, useState, useRef } from "react";

type BossDeathLogType = {
  content: string;
  contentSnippet: string;
  isoDate: string;
  link: string;
  title: string;
  serverId: number;
  raidBossId: number;
};

const useServerDeathLogs = (serverId: number) => {
  const [deathLogs, setDeathLogs] = useState<BossDeathLogType[]>([]);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    //fetch death logs data on every serverId change
    (async () => {
      const options: ListByIsoDateQueryVariables = {
        serverId: `${serverId}`,
        sortDirection: ModelSortDirection.DESC,
        limit: 10,
      };

      const { data } = await callGraphQL<ListByIsoDateQuery>(listByIsoDate, options);

      const dbLogs = data?.listByIsoDate?.items?.slice(0, 4) ?? [];

      const tDeathLogs: BossDeathLogType[] = dbLogs.map((log) => ({
        content: log?.content ?? "",
        contentSnippet: log?.contentSnippet ?? "",
        isoDate: log?.isoDate ?? "",
        link: log?.link ?? "",
        title: log?.title ?? "",
        serverId: +(log?.serverId ?? -1),
        raidBossId: +(log?.raidBossId ?? -1),
      }));

      if (isMounted.current) {
        setDeathLogs(tDeathLogs);
      }
    })();

    return () => {
      isMounted.current = false;
    };
  }, [serverId]);

  //initial subscription on mount
  useEffect(() => {
    isMounted.current = true;

    const subscription = subscribeGraphQL<{
      provider: unknown;
      value: { data?: OnCreateDeathLogSubscription };
    }>(onCreateDeathLog);
    let unsubscribe;

    if (subscription !== null) {
      const sub = subscription.subscribe({
        next: ({ provider, value }) => {
          console.log("Subscription event: ", { provider, value });
          const newDeathLog = value?.data?.onCreateDeathLog ?? null;

          //if different server id, ignore it
          if (+serverId !== +(newDeathLog?.serverId ?? -1)) {
            console.log(
              "ignoring log because its not currently viewed server id",
              serverId,
              newDeathLog?.serverId,
            );
            return;
          }

          if (newDeathLog !== null) {
            const deathLog: BossDeathLogType = {
              content: newDeathLog?.content ?? "",
              contentSnippet: newDeathLog?.contentSnippet ?? "",
              isoDate: newDeathLog?.isoDate ?? "",
              link: newDeathLog?.link ?? "",
              title: newDeathLog?.title ?? "",
              serverId: +(newDeathLog?.serverId ?? -1),
              raidBossId: +(newDeathLog?.raidBossId ?? -1),
            };

            if (!isMounted.current) {
              return;
            }

            setDeathLogs((prevDeathLogs) => {
              const stateDeathLogIndex = prevDeathLogs.findIndex(
                (log) =>
                  +log.serverId === +deathLog.serverId && +log.raidBossId === +deathLog.raidBossId,
              );

              //replace existing log
              const newStateArray: BossDeathLogType[] = [...prevDeathLogs];
              if (stateDeathLogIndex >= 0) {
                newStateArray.splice(stateDeathLogIndex, 1);
              }

              newStateArray.push(deathLog);
              return newStateArray;
            });
          }
        },
      });

      unsubscribe = () => {
        sub.unsubscribe();
        isMounted.current = false;
      };
    }
    return unsubscribe;
  }, []);

  return deathLogs;
};

export default useServerDeathLogs;
