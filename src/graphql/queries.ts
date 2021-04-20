/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listServers = /* GraphQL */ `
  query ListServers(
    $filter: ModelServerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        asteriosId
        name
        enabled
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        bosses {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncServers = /* GraphQL */ `
  query SyncServers(
    $filter: ModelServerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncServers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        asteriosId
        name
        enabled
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        bosses {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const listRaidBosses = /* GraphQL */ `
  query ListRaidBosses(
    $filter: ModelRaidBossFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRaidBosses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        floor
        image
        chest
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        deathLogs {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const syncRaidBosses = /* GraphQL */ `
  query SyncRaidBosses(
    $filter: ModelRaidBossFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRaidBosses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        floor
        image
        chest
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        deathLogs {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const listServerRaidbossDeathLogs = /* GraphQL */ `
  query ListServerRaidbossDeathLogs(
    $filter: ModelServerRaidbossDeathLogsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServerRaidbossDeathLogs(
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        server {
          id
          asteriosId
          name
          enabled
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        raidBoss {
          id
          name
          floor
          image
          chest
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        server {
          id
          asteriosId
          name
          enabled
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        raidBoss {
          id
          name
          floor
          image
          chest
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncServerRaidbossDeathLogs = /* GraphQL */ `
  query SyncServerRaidbossDeathLogs(
    $filter: ModelServerRaidbossDeathLogsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncServerRaidbossDeathLogs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        server {
          id
          asteriosId
          name
          enabled
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        raidBoss {
          id
          name
          floor
          image
          chest
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
