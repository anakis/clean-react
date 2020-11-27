export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  notFound = 400,
  unauthorized = 401,
  serverError = 500
}

export type HttpReponse = {
  statusCode: HttpStatusCode
  body?: any
}
