import { HttpPostClient, HttpPostParams } from '@/data/protocols/http/httPostClient'
import { HttpReponse, HttpStatusCode } from '@/data/protocols/http/httpResponse'

export class HttpPostClientSpy<T, R> implements HttpPostClient<T, R> {
  url?: string
  body?: T
  response: HttpReponse<R> = {
    statusCode: HttpStatusCode.ok
  }

  async post (params: HttpPostParams<T>): Promise<HttpReponse<R>> {
    this.url = params.url
    this.body = params.body
    return await Promise.resolve(this.response)
  }
}
