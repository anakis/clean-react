import { makeAxiosHttpClient } from '@/main/factories/http/axiosHttpClientFactory'
import { AddAccount } from '@/domain/usecases'
import { makeApiUrl } from '@/main/factories/http/apiUrlFactory'
import { RemoteAddAccount } from '@/data/usecases/addAccount/RemoteAddAccount'

export const makeRemoteAddAccount = (): AddAccount =>
  new RemoteAddAccount(makeApiUrl('/signup'), makeAxiosHttpClient())
