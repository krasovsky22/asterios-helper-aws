import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Server {
  readonly id: string;
  readonly asteriosId: string;
  readonly name: string;
  readonly enabled: boolean;
  readonly bosses?: (ServerRaidbossDeathLogs | null)[];
  constructor(init: ModelInit<Server>);
  static copyOf(source: Server, mutator: (draft: MutableModel<Server>) => MutableModel<Server> | void): Server;
}

export declare class ServerRaidbossDeathLogs {
  readonly id: string;
  readonly isoDate?: string;
  readonly content?: string;
  readonly contentSnippet?: string;
  readonly link?: string;
  readonly title?: string;
  readonly server: Server;
  readonly raidBoss: RaidBoss;
  constructor(init: ModelInit<ServerRaidbossDeathLogs>);
  static copyOf(source: ServerRaidbossDeathLogs, mutator: (draft: MutableModel<ServerRaidbossDeathLogs>) => MutableModel<ServerRaidbossDeathLogs> | void): ServerRaidbossDeathLogs;
}

export declare class RaidBoss {
  readonly id: string;
  readonly name: string;
  readonly floor?: number;
  readonly image?: string;
  readonly chest?: string;
  readonly deathLogs?: (ServerRaidbossDeathLogs | null)[];
  constructor(init: ModelInit<RaidBoss>);
  static copyOf(source: RaidBoss, mutator: (draft: MutableModel<RaidBoss>) => MutableModel<RaidBoss> | void): RaidBoss;
}