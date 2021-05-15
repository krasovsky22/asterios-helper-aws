import { DocumentNode } from "graphql";
export declare type QueryType = {
    queryName: string;
    query: DocumentNode;
};
export declare const listServerDeathLogs: (serverId: number) => QueryType;
export declare const listServers: () => QueryType;
export declare const listRaidBosses: () => QueryType;
export declare const createDeathLog: () => QueryType;
