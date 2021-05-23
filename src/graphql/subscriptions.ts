/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDeathLogByServerId = /* GraphQL */ `
  subscription OnCreateDeathLogByServerId($serverId: ID!) {
    onCreateDeathLogByServerId(serverId: $serverId) {
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
        bosses {
          nextToken
          startedAt
        }
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
        deathLogs {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const onCreateDeathLog = /* GraphQL */ `
  subscription OnCreateDeathLog {
    onCreateDeathLog {
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
        bosses {
          nextToken
          startedAt
        }
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
        deathLogs {
          nextToken
          startedAt
        }
      }
    }
  }
`;
