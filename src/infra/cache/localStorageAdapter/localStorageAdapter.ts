import { SetStorage } from '@/data/protocols/cache'

export class LocalStorageAdapter implements SetStorage {
  async set (key: string, value: any) {
    localStorage.setItem(key, value)
  }
}
