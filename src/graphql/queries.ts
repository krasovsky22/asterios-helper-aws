/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listServers = /* GraphQL */ `
  query ListServers($filter: ModelServerFilterInput, $limit: Int, $nextToken: String) {
    listServers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        asteriosId
        name
        enabled
        createdAt
        updatedAt
        bosses {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getRaidBoss = /* GraphQL */ `
  query GetRaidBoss($id: ID!) {
    getRaidBoss(id: $id) {
      id
      name
      floor
      image
      chest
      createdAt
      updatedAt
      deathLogs {
        items {
          id
          isoDate
          content
          contentSnippet
          link
          title
          serverId
          raidBossId
          _ttl
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listRaidBosses = /* GraphQL */ `
  query ListRaidBosses($filter: ModelRaidBossFilterInput, $limit: Int, $nextToken: String) {
    listRaidBosses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        floor
        image
        chest
        createdAt
        updatedAt
        deathLogs {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const listServerRaidbossDeathLogs = /* GraphQL */ `
  query ListServerRaidbossDeathLogs(
    $filter: ModelServerRaidbossDeathLogsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServerRaidbossDeathLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        isoDate
        content
        contentSnippet
        link
        title
        serverId
        raidBossId
        _ttl
        createdAt
        updatedAt
        server {
          id
          asteriosId
          name
          enabled
          createdAt
          updatedAt
        }
        raidBoss {
          id
          name
          floor
          image
          chest
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const listByIsoDate = /* GraphQL */ `
  query ListByIsoDate(
    $serverId: ID
    $isoDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelServerRaidbossDeathLogsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listByIsoDate(
      serverId: $serverId
      isoDate: $isoDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        isoDate
        content
        contentSnippet
        link
        title
        serverId
        raidBossId
        _ttl
        createdAt
        updatedAt
        server {
          id
          asteriosId
          name
          enabled
          createdAt
          updatedAt
        }
        raidBoss {
          id
          name
          floor
          image
          chest
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
