import gql from "graphql-tag";
import axios from "axios";
import * as graphql from "graphql";
const { print } = graphql;
require("dotenv").config();

const listServers = gql`
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
`;

const listRaidBosses = gql`
  query ListRaidBosses {
    listRaidBosses {
      items {
        deathLogs(sortDirection: DESC, limit: 1) {
          items {
            id
            isoDate
            serverId
            raidBossId
          }
        }
        id
        name
      }
    }
  }
`;

const createDeathLog = gql`
  mutation createDeathLog($input: CreateServerRaidbossDeathLogsInput!) {
    createServerRaidbossDeathLogs(input: $input) {
      id
    }
  }
`;

type RequestDataType = {
  query: string;
  variables?: {
    input: Record<string, string | number>;
  };
};

const createAwsSyncApiCall = async <T>(
  query: graphql.DocumentNode,
  queryName: string,
  input?: Record<string, string | number>,
): Promise<T[]> => {
  const requestData: RequestDataType = {
    query: print(query),
  };

  if (input) {
    requestData.variables = { input };
  }

  const { data } = await axios({
    url: process.env.API_ASTERIOSAPI_GRAPHQLAPIENDPOINTOUTPUT,
    method: "post",
    headers: {
      "x-api-key": process.env.API_ASTERIOSAPI_GRAPHQLAPIKEYOUTPUT,
    },
    data: requestData,
  });

  console.log("asdasd", data);

  //fetch
  if (!input) {
    const response = data?.data[queryName]?.items ?? [];

    if (response.length === 0) {
      throw new Error(`Unable to fetch ${queryName} from amplify api.`);
    }

    return response;
  }

  //mutation
  const response = data?.data[queryName] ?? [];

  if (response.length === 0) {
    throw new Error(`Unable to fetch ${queryName} from amplify api.`);
  }

  return response;
};

export const fetchServers = async <T>(): Promise<T[]> =>
  await createAwsSyncApiCall<T>(listServers, "listServers");

export const fetchRaidBosses = async <T>(): Promise<T[]> =>
  await createAwsSyncApiCall<T>(listRaidBosses, "listRaidBosses");

export const persisDeathLog = async <T = { id: number }>(
  input: Record<string, string | number>,
): Promise<T[]> =>
  await createAwsSyncApiCall<T>(createDeathLog, "createServerRaidbossDeathLogs:", input);
