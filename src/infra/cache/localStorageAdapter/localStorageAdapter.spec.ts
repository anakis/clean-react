import faker from 'faker'
import 'jest-localstorage-mock'
import { LocalStorageAdapter } from '@/infra/cache/localStorageAdapter/localStorageAdapter'

const makeSut = () => new LocalStorageAdapter()

describe('LocalStorageAdapter', () => {
  beforeEach(() => localStorage.clear())

  it('Should call localStorage with correct values', async () => {
    const sut = makeSut()
    const key = faker.database.column()
    const value = faker.random.word()
    await sut.set(key, value)
    expect(localStorage.setItem).toHaveBeenCalledWith(key, value)
  })
})