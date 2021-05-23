import React, { useContext, useState, createContext, useEffect } from "react";
import { listRaidBosses, listServers } from "@graphql/queries";
import { ListServersQuery } from "@/API";
import callGraphQL from "@/api/callGraphQL";
import { ListRaidBossesQuery } from "@/api/AWSApi";

export type ServerType = {
  id: number;
  asteriosId: number;
  name: string;
  isEnabled: boolean;
};

export type BossType = {
  id: number;
  name: string;
  chest: string;
  floor?: number;
  image: string;
};

type StateType = {
  servers: ServerType[];
  bosses: BossType[];
};

const MyContext = createContext<StateType | null>(null);

export const useHomeContext = (): StateType => {
  const value = useContext(MyContext)!;

  if (value === null) throw new Error("Please add SharedStateProvider");

  return value;
};

export const HomeStateProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [servers, setServers] = useState<ServerType[]>([]);
  const [bosses, setBosses] = useState<BossType[]>([]);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data: serversData } = await callGraphQL<ListServersQuery>(listServers);
        const { data: bossesData } = await callGraphQL<ListRaidBossesQuery>(listRaidBosses);

        const tServers: ServerType[] =
          serversData?.listServers?.items?.map((server) => ({
            id: +(server?.id ?? 0),
            asteriosId: +(server?.asteriosId ?? 0),
            name: server?.name ?? "",
            isEnabled: server?.enabled ?? false,
          })) ?? [];

        const tBosses: BossType[] =
          bossesData?.listRaidBosses?.items?.map((boss) => ({
            id: +(boss?.id ?? 0),
            name: boss?.name ?? "unknown",
            chest: boss?.chest ?? "unknown chest",
            image: boss?.image ?? "missing",
            floor: boss?.floor ?? undefined,
          })) ?? [];

        setServers(tServers);
        setBosses(tBosses);
      } catch (err) {
        console.error("error fetching servers", err);
      }

      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <MyContext.Provider value={{ servers, bosses }}>{children}</MyContext.Provider>;
};
