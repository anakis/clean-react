import { RequiredFieldValidation } from '@/validation/requiredField'
import { RequiredFieldError } from '@/validation/errors'

describe('RequiredFieldValidation', () => {
  it('Should return error if field is empty', () => {
    const sut = new RequiredFieldValidation('email')
    const error = sut.validate('')
    expect(error).toEqual(new RequiredFieldError())
  })
})