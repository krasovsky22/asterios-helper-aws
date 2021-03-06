import axios from "axios";
import { print } from "graphql";
import {
  createDeathLog,
  listRaidBosses,
  listServerDeathLogs,
  listServers,
  QueryType,
} from "./queries";

// require("dotenv").config();

type RequestDataType = {
  query: string;
  variables?: {
    input: Record<string, string | number>;
  };
};

const createAwsSyncApiCall = async <T>(
  queryMethod: QueryType,
  input?: Record<string, string | number>,
): Promise<T[]> => {
  const { query, queryName } = queryMethod;
  const requestData: RequestDataType = {
    query: print(query),
  };

  if (input) {
    requestData.variables = { input };
  }

  const response = await axios({
    url: process.env.API_ASTERIOSAPI_GRAPHQLAPIENDPOINTOUTPUT,
    method: "post",
    headers: {
      "x-api-key": process.env.API_ASTERIOSAPI_GRAPHQLAPIKEYOUTPUT,
    },
    data: requestData,
  }).catch((error) => {
    console.error(error);
    return error;
  });

  const { data } = response;
  if (data.errors) {
    console.log("errors:", data.errors);
  }

  return data?.data[queryName]?.items ?? data?.data[queryName] ?? [];
};

export const fetchServers = async <T>(): Promise<T[]> =>
  await createAwsSyncApiCall<T>(listServers());

export const fetchRaidBosses = async <T>(): Promise<T[]> =>
  await createAwsSyncApiCall<T>(listRaidBosses());

export const persisDeathLog = async <T = { id: number }>(
  input: Record<string, string | number>,
): Promise<T[]> => await createAwsSyncApiCall<T>(createDeathLog(), input);

export const fetchServerDeathLogs = async <T>(serverId: number): Promise<T[]> =>
  await createAwsSyncApiCall<T>(listServerDeathLogs(serverId));
