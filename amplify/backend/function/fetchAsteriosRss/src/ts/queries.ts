import { DocumentNode } from "graphql";
import gql from "graphql-tag";

export type QueryType = {
  queryName: string;
  query: DocumentNode;
};

export const listServerDeathLogs = (serverId: number): QueryType => ({
  queryName: "listByIsoDate",
  query: gql`
        query serverDeathLogs {
        listByIsoDate(serverId: ${serverId}, sortDirection: DESC, limit: 10) {
            items {
                id
                isoDate
                raidBossId
                serverId
            }
        }
    }
`,
});

export const listServers = (): QueryType => ({
  queryName: "listServers",
  query: gql`
    query listEnabledServers {
      listServers(filter: { enabled: { eq: true } }) {
        items {
          id
          enabled
          name
          asteriosId
        }
      }
    }
  `,
});

export const listRaidBosses = (): QueryType => ({
  queryName: "listRaidBosses",
  query: gql`
    query listRaidBosses {
      listRaidBosses {
        items {
          id
          name
        }
      }
    }
  `,
});

export const createDeathLog = (): QueryType => ({
  queryName: "createServerRaidbossDeathLogs",
  query: gql`
    mutation createDeathLog($input: CreateServerRaidbossDeathLogsInput!) {
      createServerRaidbossDeathLogs(input: $input) {
        id
        isoDate
        content
        contentSnippet
        link
        title
        serverId
        raidBossId
      }
    }
  `,
});
