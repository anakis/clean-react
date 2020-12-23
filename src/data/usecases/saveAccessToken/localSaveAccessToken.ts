import { SaveAccessToken } from '@/domain/usecases/saveAccessToken'
import { SetStorage } from '@/data/protocols/cache'

export class LocalSaveAccessToken implements SaveAccessToken {
  constructor (private readonly setStorage: SetStorage) {}

  async save (accessToken: string) {
    await this.setStorage.set('accessToken', accessToken)
  }
}
