import { EmailValidation } from '@/validation/validators/email/emailValidation'
import { InvalidFieldError } from '@/validation/errors'

describe('EmailValidation', () => {
  it('Should return error if email is invalid', () => {
    const sut = new EmailValidation('email')
    const error = sut.validate('')
    expect(error).toEqual(new InvalidFieldError('email'))
  })
})
