import { API, graphqlOperation } from "aws-amplify";
import { GraphQLResult, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";

export interface GraphQLOptions {
  limit?: number;
  filter?: Record<string, unknown>;
  input?: Record<string, unknown>;
  variables?: Record<string, unknown>;
  authMode?: GRAPHQL_AUTH_MODE;
}

async function callGraphQL<T>(
  query: any,
  options?: GraphQLOptions & any,
): Promise<GraphQLResult<T>> {
  return (await API.graphql(graphqlOperation(query, options))) as GraphQLResult<T>;
}

export default callGraphQL;
