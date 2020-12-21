import { RemoteAuthentication } from '@/data/usecases/authentication/RemoteAuthentication'
import { makeAxiosHttpClient } from '@/main/factories/http/axiosHttpClientFactory'
import { Authentication } from '@/domain/usecases'
import { makeApiUrl } from '@/main/factories/http/apiUrlFactory'

export const makeRemoteAuthentication = (): Authentication =>
  new RemoteAuthentication(makeApiUrl(), makeAxiosHttpClient())
