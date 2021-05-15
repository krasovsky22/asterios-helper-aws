export declare const fetchServers: <T>() => Promise<T[]>;
export declare const fetchRaidBosses: <T>() => Promise<T[]>;
export declare const persisDeathLog: <T = {
    id: number;
}>(input: Record<string, string | number>) => Promise<T[]>;
export declare const fetchServerDeathLogs: <T>(serverId: number) => Promise<T[]>;
