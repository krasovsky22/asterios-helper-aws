import { DocumentNode } from "graphql";
import gql from "graphql-tag";

export type QueryType = {
  query: DocumentNode;
  queryName: string;
};

export const listServerDeathLogs = (serverId: number): QueryType => ({
  queryName: "listByIsoDate:",
  query: gql`
        query serverDeathLogs {
        listByIsoDate(serverId: ${serverId}, sortDirection: DESC) {
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
  queryName: "listServers",
});

export const listRaidBosses = (): QueryType => ({
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
  queryName: "listRaidBosses",
});

export const createDeathLog = (): QueryType => ({
  query: gql`
    mutation createDeathLog($input: CreateServerRaidbossDeathLogsInput!) {
      createServerRaidbossDeathLogs(input: $input) {
        id
      }
    }
  `,
  queryName: "createServerRaidbossDeathLogs",
});
