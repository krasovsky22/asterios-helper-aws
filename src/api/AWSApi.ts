/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateServerRaidbossDeathLogsInput = {
  id?: string | null,
  isoDate?: string | null,
  content?: string | null,
  contentSnippet?: string | null,
  link?: string | null,
  title?: string | null,
  serverId: string,
  raidBossId: string,
  _version?: number | null,
};

export type ModelServerRaidbossDeathLogsConditionInput = {
  isoDate?: ModelStringInput | null,
  content?: ModelStringInput | null,
  contentSnippet?: ModelStringInput | null,
  link?: ModelStringInput | null,
  title?: ModelStringInput | null,
  serverId?: ModelIDInput | null,
  raidBossId?: ModelIDInput | null,
  and?: Array< ModelServerRaidbossDeathLogsConditionInput | null > | null,
  or?: Array< ModelServerRaidbossDeathLogsConditionInput | null > | null,
  not?: ModelServerRaidbossDeathLogsConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ServerRaidbossDeathLogs = {
  __typename: "ServerRaidbossDeathLogs",
  id?: string,
  isoDate?: string | null,
  content?: string | null,
  contentSnippet?: string | null,
  link?: string | null,
  title?: string | null,
  serverId?: string,
  raidBossId?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
  server?: Server,
  raidBoss?: RaidBoss,
};

export type Server = {
  __typename: "Server",
  id?: string,
  asteriosId?: string,
  name?: string,
  enabled?: boolean,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
  bosses?: ModelServerRaidbossDeathLogsConnection,
};

export type ModelServerRaidbossDeathLogsConnection = {
  __typename: "ModelServerRaidbossDeathLogsConnection",
  items?:  Array<ServerRaidbossDeathLogs | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type RaidBoss = {
  __typename: "RaidBoss",
  id?: string,
  name?: string,
  floor?: number | null,
  image?: string | null,
  chest?: string | null,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
  deathLogs?: ModelServerRaidbossDeathLogsConnection,
};

export type ModelServerFilterInput = {
  id?: ModelIDInput | null,
  asteriosId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  enabled?: ModelBooleanInput | null,
  and?: Array< ModelServerFilterInput | null > | null,
  or?: Array< ModelServerFilterInput | null > | null,
  not?: ModelServerFilterInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelServerConnection = {
  __typename: "ModelServerConnection",
  items?:  Array<Server | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelRaidBossFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  floor?: ModelIntInput | null,
  image?: ModelStringInput | null,
  chest?: ModelStringInput | null,
  and?: Array< ModelRaidBossFilterInput | null > | null,
  or?: Array< ModelRaidBossFilterInput | null > | null,
  not?: ModelRaidBossFilterInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelRaidBossConnection = {
  __typename: "ModelRaidBossConnection",
  items?:  Array<RaidBoss | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelServerRaidbossDeathLogsFilterInput = {
  id?: ModelIDInput | null,
  isoDate?: ModelStringInput | null,
  content?: ModelStringInput | null,
  contentSnippet?: ModelStringInput | null,
  link?: ModelStringInput | null,
  title?: ModelStringInput | null,
  serverId?: ModelIDInput | null,
  raidBossId?: ModelIDInput | null,
  and?: Array< ModelServerRaidbossDeathLogsFilterInput | null > | null,
  or?: Array< ModelServerRaidbossDeathLogsFilterInput | null > | null,
  not?: ModelServerRaidbossDeathLogsFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateServerRaidbossDeathLogsMutationVariables = {
  input?: CreateServerRaidbossDeathLogsInput,
  condition?: ModelServerRaidbossDeathLogsConditionInput | null,
};

export type CreateServerRaidbossDeathLogsMutation = {
  createServerRaidbossDeathLogs?:  {
    __typename: "ServerRaidbossDeathLogs",
    id: string,
    isoDate?: string | null,
    content?: string | null,
    contentSnippet?: string | null,
    link?: string | null,
    title?: string | null,
    serverId: string,
    raidBossId: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    server:  {
      __typename: "Server",
      id: string,
      asteriosId: string,
      name: string,
      enabled: boolean,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      bosses?:  {
        __typename: "ModelServerRaidbossDeathLogsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
    raidBoss:  {
      __typename: "RaidBoss",
      id: string,
      name: string,
      floor?: number | null,
      image?: string | null,
      chest?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      deathLogs?:  {
        __typename: "ModelServerRaidbossDeathLogsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
  } | null,
};

export type ListServersQueryVariables = {
  filter?: ModelServerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListServersQuery = {
  listServers?:  {
    __typename: "ModelServerConnection",
    items?:  Array< {
      __typename: "Server",
      id: string,
      asteriosId: string,
      name: string,
      enabled: boolean,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      bosses?:  {
        __typename: "ModelServerRaidbossDeathLogsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncServersQueryVariables = {
  filter?: ModelServerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncServersQuery = {
  syncServers?:  {
    __typename: "ModelServerConnection",
    items?:  Array< {
      __typename: "Server",
      id: string,
      asteriosId: string,
      name: string,
      enabled: boolean,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      bosses?:  {
        __typename: "ModelServerRaidbossDeathLogsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ListRaidBossesQueryVariables = {
  filter?: ModelRaidBossFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRaidBossesQuery = {
  listRaidBosses?:  {
    __typename: "ModelRaidBossConnection",
    items?:  Array< {
      __typename: "RaidBoss",
      id: string,
      name: string,
      floor?: number | null,
      image?: string | null,
      chest?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      deathLogs?:  {
        __typename: "ModelServerRaidbossDeathLogsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetRaidBossQueryVariables = {
  id?: string,
};

export type GetRaidBossQuery = {
  getRaidBoss?:  {
    __typename: "RaidBoss",
    id: string,
    name: string,
    floor?: number | null,
    image?: string | null,
    chest?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    deathLogs?:  {
      __typename: "ModelServerRaidbossDeathLogsConnection",
      items?:  Array< {
        __typename: "ServerRaidbossDeathLogs",
        id: string,
        isoDate?: string | null,
        content?: string | null,
        contentSnippet?: string | null,
        link?: string | null,
        title?: string | null,
        serverId: string,
        raidBossId: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type SyncRaidBossesQueryVariables = {
  filter?: ModelRaidBossFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncRaidBossesQuery = {
  syncRaidBosses?:  {
    __typename: "ModelRaidBossConnection",
    items?:  Array< {
      __typename: "RaidBoss",
      id: string,
      name: string,
      floor?: number | null,
      image?: string | null,
      chest?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      deathLogs?:  {
        __typename: "ModelServerRaidbossDeathLogsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ListServerRaidbossDeathLogsQueryVariables = {
  filter?: ModelServerRaidbossDeathLogsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListServerRaidbossDeathLogsQuery = {
  listServerRaidbossDeathLogs?:  {
    __typename: "ModelServerRaidbossDeathLogsConnection",
    items?:  Array< {
      __typename: "ServerRaidbossDeathLogs",
      id: string,
      isoDate?: string | null,
      content?: string | null,
      contentSnippet?: string | null,
      link?: string | null,
      title?: string | null,
      serverId: string,
      raidBossId: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      server:  {
        __typename: "Server",
        id: string,
        asteriosId: string,
        name: string,
        enabled: boolean,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      },
      raidBoss:  {
        __typename: "RaidBoss",
        id: string,
        name: string,
        floor?: number | null,
        image?: string | null,
        chest?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      },
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ListByIsoDateQueryVariables = {
  serverId?: string | null,
  isoDate?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelServerRaidbossDeathLogsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListByIsoDateQuery = {
  listByIsoDate?:  {
    __typename: "ModelServerRaidbossDeathLogsConnection",
    items?:  Array< {
      __typename: "ServerRaidbossDeathLogs",
      id: string,
      isoDate?: string | null,
      content?: string | null,
      contentSnippet?: string | null,
      link?: string | null,
      title?: string | null,
      serverId: string,
      raidBossId: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      server:  {
        __typename: "Server",
        id: string,
        asteriosId: string,
        name: string,
        enabled: boolean,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      },
      raidBoss:  {
        __typename: "RaidBoss",
        id: string,
        name: string,
        floor?: number | null,
        image?: string | null,
        chest?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      },
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncServerRaidbossDeathLogsQueryVariables = {
  filter?: ModelServerRaidbossDeathLogsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncServerRaidbossDeathLogsQuery = {
  syncServerRaidbossDeathLogs?:  {
    __typename: "ModelServerRaidbossDeathLogsConnection",
    items?:  Array< {
      __typename: "ServerRaidbossDeathLogs",
      id: string,
      isoDate?: string | null,
      content?: string | null,
      contentSnippet?: string | null,
      link?: string | null,
      title?: string | null,
      serverId: string,
      raidBossId: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      server:  {
        __typename: "Server",
        id: string,
        asteriosId: string,
        name: string,
        enabled: boolean,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      },
      raidBoss:  {
        __typename: "RaidBoss",
        id: string,
        name: string,
        floor?: number | null,
        image?: string | null,
        chest?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      },
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateDeathLogSubscription = {
  onCreateDeathLog?:  {
    __typename: "ServerRaidbossDeathLogs",
    id: string,
    isoDate?: string | null,
    content?: string | null,
    contentSnippet?: string | null,
    link?: string | null,
    title?: string | null,
    serverId: string,
    raidBossId: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    server:  {
      __typename: "Server",
      id: string,
      asteriosId: string,
      name: string,
      enabled: boolean,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      bosses?:  {
        __typename: "ModelServerRaidbossDeathLogsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
    raidBoss:  {
      __typename: "RaidBoss",
      id: string,
      name: string,
      floor?: number | null,
      image?: string | null,
      chest?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      deathLogs?:  {
        __typename: "ModelServerRaidbossDeathLogsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
  } | null,
};
