/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateServerInput = {
  id?: string | null,
  asteriosId: string,
  name: string,
  enabled: boolean,
};

export type ModelServerConditionInput = {
  asteriosId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  enabled?: ModelBooleanInput | null,
  and?: Array< ModelServerConditionInput | null > | null,
  or?: Array< ModelServerConditionInput | null > | null,
  not?: ModelServerConditionInput | null,
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

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Server = {
  __typename: "Server",
  id?: string,
  asteriosId?: string,
  name?: string,
  enabled?: boolean,
  bosses?: ModelServerRaidbossConnection,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelServerRaidbossConnection = {
  __typename: "ModelServerRaidbossConnection",
  items?:  Array<ServerRaidboss | null > | null,
  nextToken?: string | null,
};

export type ServerRaidboss = {
  __typename: "ServerRaidboss",
  id?: string,
  isoDate?: string | null,
  content?: string | null,
  contentSnippet?: string | null,
  link?: string | null,
  title?: string | null,
  serverId?: string,
  raidBossId?: string,
  server?: Server,
  raidBoss?: RaidBoss,
  createdAt?: string,
  updatedAt?: string,
};

export type RaidBoss = {
  __typename: "RaidBoss",
  id?: string,
  name?: string,
  floor?: number | null,
  image?: string | null,
  chest?: string | null,
  server?: ModelServerRaidbossConnection,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateServerInput = {
  id: string,
  asteriosId?: string | null,
  name?: string | null,
  enabled?: boolean | null,
};

export type DeleteServerInput = {
  id?: string | null,
};

export type CreateRaidBossInput = {
  id?: string | null,
  name: string,
  floor?: number | null,
  image?: string | null,
  chest?: string | null,
};

export type ModelRaidBossConditionInput = {
  name?: ModelStringInput | null,
  floor?: ModelIntInput | null,
  image?: ModelStringInput | null,
  chest?: ModelStringInput | null,
  and?: Array< ModelRaidBossConditionInput | null > | null,
  or?: Array< ModelRaidBossConditionInput | null > | null,
  not?: ModelRaidBossConditionInput | null,
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

export type UpdateRaidBossInput = {
  id: string,
  name?: string | null,
  floor?: number | null,
  image?: string | null,
  chest?: string | null,
};

export type DeleteRaidBossInput = {
  id?: string | null,
};

export type CreateServerRaidbossInput = {
  id?: string | null,
  isoDate?: string | null,
  content?: string | null,
  contentSnippet?: string | null,
  link?: string | null,
  title?: string | null,
  serverId: string,
  raidBossId: string,
};

export type ModelServerRaidbossConditionInput = {
  isoDate?: ModelStringInput | null,
  content?: ModelStringInput | null,
  contentSnippet?: ModelStringInput | null,
  link?: ModelStringInput | null,
  title?: ModelStringInput | null,
  serverId?: ModelIDInput | null,
  raidBossId?: ModelIDInput | null,
  and?: Array< ModelServerRaidbossConditionInput | null > | null,
  or?: Array< ModelServerRaidbossConditionInput | null > | null,
  not?: ModelServerRaidbossConditionInput | null,
};

export type UpdateServerRaidbossInput = {
  id: string,
  isoDate?: string | null,
  content?: string | null,
  contentSnippet?: string | null,
  link?: string | null,
  title?: string | null,
  serverId?: string | null,
  raidBossId?: string | null,
};

export type DeleteServerRaidbossInput = {
  id?: string | null,
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

export type ModelServerConnection = {
  __typename: "ModelServerConnection",
  items?:  Array<Server | null > | null,
  nextToken?: string | null,
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

export type ModelRaidBossConnection = {
  __typename: "ModelRaidBossConnection",
  items?:  Array<RaidBoss | null > | null,
  nextToken?: string | null,
};

export type ModelServerRaidbossFilterInput = {
  id?: ModelIDInput | null,
  isoDate?: ModelStringInput | null,
  content?: ModelStringInput | null,
  contentSnippet?: ModelStringInput | null,
  link?: ModelStringInput | null,
  title?: ModelStringInput | null,
  serverId?: ModelIDInput | null,
  raidBossId?: ModelIDInput | null,
  and?: Array< ModelServerRaidbossFilterInput | null > | null,
  or?: Array< ModelServerRaidbossFilterInput | null > | null,
  not?: ModelServerRaidbossFilterInput | null,
};

export type CreateServerMutationVariables = {
  input?: CreateServerInput,
  condition?: ModelServerConditionInput | null,
};

export type CreateServerMutation = {
  createServer?:  {
    __typename: "Server",
    id: string,
    asteriosId: string,
    name: string,
    enabled: boolean,
    bosses?:  {
      __typename: "ModelServerRaidbossConnection",
      items?:  Array< {
        __typename: "ServerRaidboss",
        id: string,
        isoDate?: string | null,
        content?: string | null,
        contentSnippet?: string | null,
        link?: string | null,
        title?: string | null,
        serverId: string,
        raidBossId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateServerMutationVariables = {
  input?: UpdateServerInput,
  condition?: ModelServerConditionInput | null,
};

export type UpdateServerMutation = {
  updateServer?:  {
    __typename: "Server",
    id: string,
    asteriosId: string,
    name: string,
    enabled: boolean,
    bosses?:  {
      __typename: "ModelServerRaidbossConnection",
      items?:  Array< {
        __typename: "ServerRaidboss",
        id: string,
        isoDate?: string | null,
        content?: string | null,
        contentSnippet?: string | null,
        link?: string | null,
        title?: string | null,
        serverId: string,
        raidBossId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteServerMutationVariables = {
  input?: DeleteServerInput,
  condition?: ModelServerConditionInput | null,
};

export type DeleteServerMutation = {
  deleteServer?:  {
    __typename: "Server",
    id: string,
    asteriosId: string,
    name: string,
    enabled: boolean,
    bosses?:  {
      __typename: "ModelServerRaidbossConnection",
      items?:  Array< {
        __typename: "ServerRaidboss",
        id: string,
        isoDate?: string | null,
        content?: string | null,
        contentSnippet?: string | null,
        link?: string | null,
        title?: string | null,
        serverId: string,
        raidBossId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRaidBossMutationVariables = {
  input?: CreateRaidBossInput,
  condition?: ModelRaidBossConditionInput | null,
};

export type CreateRaidBossMutation = {
  createRaidBoss?:  {
    __typename: "RaidBoss",
    id: string,
    name: string,
    floor?: number | null,
    image?: string | null,
    chest?: string | null,
    server?:  {
      __typename: "ModelServerRaidbossConnection",
      items?:  Array< {
        __typename: "ServerRaidboss",
        id: string,
        isoDate?: string | null,
        content?: string | null,
        contentSnippet?: string | null,
        link?: string | null,
        title?: string | null,
        serverId: string,
        raidBossId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRaidBossMutationVariables = {
  input?: UpdateRaidBossInput,
  condition?: ModelRaidBossConditionInput | null,
};

export type UpdateRaidBossMutation = {
  updateRaidBoss?:  {
    __typename: "RaidBoss",
    id: string,
    name: string,
    floor?: number | null,
    image?: string | null,
    chest?: string | null,
    server?:  {
      __typename: "ModelServerRaidbossConnection",
      items?:  Array< {
        __typename: "ServerRaidboss",
        id: string,
        isoDate?: string | null,
        content?: string | null,
        contentSnippet?: string | null,
        link?: string | null,
        title?: string | null,
        serverId: string,
        raidBossId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRaidBossMutationVariables = {
  input?: DeleteRaidBossInput,
  condition?: ModelRaidBossConditionInput | null,
};

export type DeleteRaidBossMutation = {
  deleteRaidBoss?:  {
    __typename: "RaidBoss",
    id: string,
    name: string,
    floor?: number | null,
    image?: string | null,
    chest?: string | null,
    server?:  {
      __typename: "ModelServerRaidbossConnection",
      items?:  Array< {
        __typename: "ServerRaidboss",
        id: string,
        isoDate?: string | null,
        content?: string | null,
        contentSnippet?: string | null,
        link?: string | null,
        title?: string | null,
        serverId: string,
        raidBossId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateServerRaidbossMutationVariables = {
  input?: CreateServerRaidbossInput,
  condition?: ModelServerRaidbossConditionInput | null,
};

export type CreateServerRaidbossMutation = {
  createServerRaidboss?:  {
    __typename: "ServerRaidboss",
    id: string,
    isoDate?: string | null,
    content?: string | null,
    contentSnippet?: string | null,
    link?: string | null,
    title?: string | null,
    serverId: string,
    raidBossId: string,
    server:  {
      __typename: "Server",
      id: string,
      asteriosId: string,
      name: string,
      enabled: boolean,
      bosses?:  {
        __typename: "ModelServerRaidbossConnection",
        nextToken?: string | null,
      } | null,
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
      server?:  {
        __typename: "ModelServerRaidbossConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateServerRaidbossMutationVariables = {
  input?: UpdateServerRaidbossInput,
  condition?: ModelServerRaidbossConditionInput | null,
};

export type UpdateServerRaidbossMutation = {
  updateServerRaidboss?:  {
    __typename: "ServerRaidboss",
    id: string,
    isoDate?: string | null,
    content?: string | null,
    contentSnippet?: string | null,
    link?: string | null,
    title?: string | null,
    serverId: string,
    raidBossId: string,
    server:  {
      __typename: "Server",
      id: string,
      asteriosId: string,
      name: string,
      enabled: boolean,
      bosses?:  {
        __typename: "ModelServerRaidbossConnection",
        nextToken?: string | null,
      } | null,
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
      server?:  {
        __typename: "ModelServerRaidbossConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteServerRaidbossMutationVariables = {
  input?: DeleteServerRaidbossInput,
  condition?: ModelServerRaidbossConditionInput | null,
};

export type DeleteServerRaidbossMutation = {
  deleteServerRaidboss?:  {
    __typename: "ServerRaidboss",
    id: string,
    isoDate?: string | null,
    content?: string | null,
    contentSnippet?: string | null,
    link?: string | null,
    title?: string | null,
    serverId: string,
    raidBossId: string,
    server:  {
      __typename: "Server",
      id: string,
      asteriosId: string,
      name: string,
      enabled: boolean,
      bosses?:  {
        __typename: "ModelServerRaidbossConnection",
        nextToken?: string | null,
      } | null,
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
      server?:  {
        __typename: "ModelServerRaidbossConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetServerQueryVariables = {
  id?: string,
};

export type GetServerQuery = {
  getServer?:  {
    __typename: "Server",
    id: string,
    asteriosId: string,
    name: string,
    enabled: boolean,
    bosses?:  {
      __typename: "ModelServerRaidbossConnection",
      items?:  Array< {
        __typename: "ServerRaidboss",
        id: string,
        isoDate?: string | null,
        content?: string | null,
        contentSnippet?: string | null,
        link?: string | null,
        title?: string | null,
        serverId: string,
        raidBossId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
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
      bosses?:  {
        __typename: "ModelServerRaidbossConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
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
    server?:  {
      __typename: "ModelServerRaidbossConnection",
      items?:  Array< {
        __typename: "ServerRaidboss",
        id: string,
        isoDate?: string | null,
        content?: string | null,
        contentSnippet?: string | null,
        link?: string | null,
        title?: string | null,
        serverId: string,
        raidBossId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRaidBosssQueryVariables = {
  filter?: ModelRaidBossFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRaidBosssQuery = {
  listRaidBosss?:  {
    __typename: "ModelRaidBossConnection",
    items?:  Array< {
      __typename: "RaidBoss",
      id: string,
      name: string,
      floor?: number | null,
      image?: string | null,
      chest?: string | null,
      server?:  {
        __typename: "ModelServerRaidbossConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetServerRaidbossQueryVariables = {
  id?: string,
};

export type GetServerRaidbossQuery = {
  getServerRaidboss?:  {
    __typename: "ServerRaidboss",
    id: string,
    isoDate?: string | null,
    content?: string | null,
    contentSnippet?: string | null,
    link?: string | null,
    title?: string | null,
    serverId: string,
    raidBossId: string,
    server:  {
      __typename: "Server",
      id: string,
      asteriosId: string,
      name: string,
      enabled: boolean,
      bosses?:  {
        __typename: "ModelServerRaidbossConnection",
        nextToken?: string | null,
      } | null,
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
      server?:  {
        __typename: "ModelServerRaidbossConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListServerRaidbosssQueryVariables = {
  filter?: ModelServerRaidbossFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListServerRaidbosssQuery = {
  listServerRaidbosss?:  {
    __typename: "ModelServerRaidbossConnection",
    items?:  Array< {
      __typename: "ServerRaidboss",
      id: string,
      isoDate?: string | null,
      content?: string | null,
      contentSnippet?: string | null,
      link?: string | null,
      title?: string | null,
      serverId: string,
      raidBossId: string,
      server:  {
        __typename: "Server",
        id: string,
        asteriosId: string,
        name: string,
        enabled: boolean,
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
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateServerSubscription = {
  onCreateServer?:  {
    __typename: "Server",
    id: string,
    asteriosId: string,
    name: string,
    enabled: boolean,
    bosses?:  {
      __typename: "ModelServerRaidbossConnection",
      items?:  Array< {
        __typename: "ServerRaidboss",
        id: string,
        isoDate?: string | null,
        content?: string | null,
        contentSnippet?: string | null,
        link?: string | null,
        title?: string | null,
        serverId: string,
        raidBossId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateServerSubscription = {
  onUpdateServer?:  {
    __typename: "Server",
    id: string,
    asteriosId: string,
    name: string,
    enabled: boolean,
    bosses?:  {
      __typename: "ModelServerRaidbossConnection",
      items?:  Array< {
        __typename: "ServerRaidboss",
        id: string,
        isoDate?: string | null,
        content?: string | null,
        contentSnippet?: string | null,
        link?: string | null,
        title?: string | null,
        serverId: string,
        raidBossId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteServerSubscription = {
  onDeleteServer?:  {
    __typename: "Server",
    id: string,
    asteriosId: string,
    name: string,
    enabled: boolean,
    bosses?:  {
      __typename: "ModelServerRaidbossConnection",
      items?:  Array< {
        __typename: "ServerRaidboss",
        id: string,
        isoDate?: string | null,
        content?: string | null,
        contentSnippet?: string | null,
        link?: string | null,
        title?: string | null,
        serverId: string,
        raidBossId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRaidBossSubscription = {
  onCreateRaidBoss?:  {
    __typename: "RaidBoss",
    id: string,
    name: string,
    floor?: number | null,
    image?: string | null,
    chest?: string | null,
    server?:  {
      __typename: "ModelServerRaidbossConnection",
      items?:  Array< {
        __typename: "ServerRaidboss",
        id: string,
        isoDate?: string | null,
        content?: string | null,
        contentSnippet?: string | null,
        link?: string | null,
        title?: string | null,
        serverId: string,
        raidBossId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRaidBossSubscription = {
  onUpdateRaidBoss?:  {
    __typename: "RaidBoss",
    id: string,
    name: string,
    floor?: number | null,
    image?: string | null,
    chest?: string | null,
    server?:  {
      __typename: "ModelServerRaidbossConnection",
      items?:  Array< {
        __typename: "ServerRaidboss",
        id: string,
        isoDate?: string | null,
        content?: string | null,
        contentSnippet?: string | null,
        link?: string | null,
        title?: string | null,
        serverId: string,
        raidBossId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRaidBossSubscription = {
  onDeleteRaidBoss?:  {
    __typename: "RaidBoss",
    id: string,
    name: string,
    floor?: number | null,
    image?: string | null,
    chest?: string | null,
    server?:  {
      __typename: "ModelServerRaidbossConnection",
      items?:  Array< {
        __typename: "ServerRaidboss",
        id: string,
        isoDate?: string | null,
        content?: string | null,
        contentSnippet?: string | null,
        link?: string | null,
        title?: string | null,
        serverId: string,
        raidBossId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateServerRaidbossSubscription = {
  onCreateServerRaidboss?:  {
    __typename: "ServerRaidboss",
    id: string,
    isoDate?: string | null,
    content?: string | null,
    contentSnippet?: string | null,
    link?: string | null,
    title?: string | null,
    serverId: string,
    raidBossId: string,
    server:  {
      __typename: "Server",
      id: string,
      asteriosId: string,
      name: string,
      enabled: boolean,
      bosses?:  {
        __typename: "ModelServerRaidbossConnection",
        nextToken?: string | null,
      } | null,
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
      server?:  {
        __typename: "ModelServerRaidbossConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateServerRaidbossSubscription = {
  onUpdateServerRaidboss?:  {
    __typename: "ServerRaidboss",
    id: string,
    isoDate?: string | null,
    content?: string | null,
    contentSnippet?: string | null,
    link?: string | null,
    title?: string | null,
    serverId: string,
    raidBossId: string,
    server:  {
      __typename: "Server",
      id: string,
      asteriosId: string,
      name: string,
      enabled: boolean,
      bosses?:  {
        __typename: "ModelServerRaidbossConnection",
        nextToken?: string | null,
      } | null,
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
      server?:  {
        __typename: "ModelServerRaidbossConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteServerRaidbossSubscription = {
  onDeleteServerRaidboss?:  {
    __typename: "ServerRaidboss",
    id: string,
    isoDate?: string | null,
    content?: string | null,
    contentSnippet?: string | null,
    link?: string | null,
    title?: string | null,
    serverId: string,
    raidBossId: string,
    server:  {
      __typename: "Server",
      id: string,
      asteriosId: string,
      name: string,
      enabled: boolean,
      bosses?:  {
        __typename: "ModelServerRaidbossConnection",
        nextToken?: string | null,
      } | null,
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
      server?:  {
        __typename: "ModelServerRaidbossConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
