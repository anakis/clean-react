import { LocalSaveAccessToken } from '@/data/usecases/saveAccessToken/localSaveAccessToken'
import { makeLocalStorageAdapter } from '@/main/factories/cache/localStorageAdapterFactory'

export const makeLocalSaveAccessToken = () => new LocalSaveAccessToken(makeLocalStorageAdapter())
