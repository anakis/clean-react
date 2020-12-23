import { LocalStorageAdapter } from '@/infra/cache/localStorageAdapter/localStorageAdapter'
import { SetStorage } from '@/data/protocols/cache'

export const makeLocalStorageAdapter = (): SetStorage => new LocalStorageAdapter()
