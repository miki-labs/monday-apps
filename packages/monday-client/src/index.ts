import mondaySdk from "monday-sdk-js";

/** API version for direct monday GraphQL requests. */
export const MONDAY_API_VERSION = "2026-07" as const;

export type MondayApiVersion = typeof MONDAY_API_VERSION;

export interface GraphQLRequest {
  readonly query: string;
  readonly variables?: Readonly<Record<string, unknown>>;
}

export function createMondayClient() {
  return mondaySdk();
}
