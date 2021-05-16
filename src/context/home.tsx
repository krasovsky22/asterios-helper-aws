import React, { useContext, useState, createContext, useEffect } from "react";
import { listServers } from "@graphql/queries";
import { ListServersQuery } from "@/API";
import callGraphQL from "@/api/callGraphQL";

export type ServerType = {
  id: number;
  asteriosId: number;
  name: string;
  isEnabled: boolean;
};

type StateType = {
  servers: ServerType[];
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
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await callGraphQL<ListServersQuery>(listServers);
        const tServers: ServerType[] =
          data?.listServers?.items?.map((server) => ({
            id: +(server?.id ?? 0),
            asteriosId: +(server?.asteriosId ?? 0),
            name: server?.name ?? "",
            isEnabled: server?.enabled ?? false,
          })) ?? [];

        setServers(tServers);
      } catch (err) {
        console.error("error fetching servers", err);
      }

      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <MyContext.Provider value={{ servers }}>{children}</MyContext.Provider>;
};
