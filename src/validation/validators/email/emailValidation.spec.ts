import { EmailValidation } from '@/validation/validators/email/emailValidation'
import { InvalidFieldError } from '@/validation/errors'
import faker from 'faker'

const makeSut = (field: string) => new EmailValidation(field)

describe('EmailValidation', () => {
  it('Should return error if email is invalid', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const error = sut.validate(faker.random.word())
    expect(error).toEqual(new InvalidFieldError(field))
  })
  it('Should return falsy if email is valid', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const error = sut.validate(faker.internet.email())
    expect(error).toBeFalsy()
  })
})
