/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
        bosses {
          nextToken
        }
      }
      raidBoss {
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
    }
  }
`;
