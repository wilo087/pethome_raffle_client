export interface GQLError {
  graphQLErrors: Error[];
}

export interface Error {
  message: string;
  statusCode?: number;
}
