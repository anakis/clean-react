import { HttpPostClient } from 'data/protocols/http/httPostClient'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string

  async post (url: string): Promise<void> {
    this.url = url
    return await Promise.resolve()
  }
}
