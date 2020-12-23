import { SetStorage } from '@/data/protocols/cache'

export class SetStorageSpy implements SetStorage {
  key: string
  value: any
  async set (key: string, value: any) {
    this.key = key
    this.value = value
  }
}
