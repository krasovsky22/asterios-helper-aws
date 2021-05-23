import { API, graphqlOperation } from "aws-amplify";
import Observable from "zen-observable-ts";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";

export interface GraphQLOptions {
  input?: Record<string, unknown>;
  variables?: Record<string, unknown>;
  authMode?: GRAPHQL_AUTH_MODE;
}

function subscribeGraphQL<T extends unknown>(
  query: any,
  options?: GraphQLOptions,
): Observable<T> | null {
  const subscription = API.graphql(graphqlOperation(query, options));

  if (subscription instanceof Observable) {
    return subscription as Observable<T>;
  }

  console.error("Incorrect subscription query detected");
  return null;
}

export default subscribeGraphQL;
