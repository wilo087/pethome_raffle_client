export interface GQLError {
  graphQLErrors: Error[];
}

export interface Error {
  message: string;
  statusCode?: number;
  extensions: ErrorsExtensions
}


export interface ErrorsExtensions {
  code: string;
  exception: {}
}