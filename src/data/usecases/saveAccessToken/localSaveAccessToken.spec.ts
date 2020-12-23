import faker from 'faker'
import { LocalSaveAccessToken } from '@/data/usecases/saveAccessToken/localSaveAccessToken'
import { SetStorageSpy } from '@/data/test'

describe('LocalSaveAccessToken', () => {
  it('Should call SetStorage with correct value', async () => {
    const setStorageSpy = new SetStorageSpy()
    const sut = new LocalSaveAccessToken(setStorageSpy)
    const accessToken = faker.random.uuid()
    await sut.save(accessToken)
    expect(setStorageSpy.key).toBe('accessToken')
    expect(setStorageSpy.value).toBe(accessToken)
  })
})
