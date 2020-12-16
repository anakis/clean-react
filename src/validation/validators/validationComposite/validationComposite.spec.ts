import { FieldValidationSpy } from '@/validation/validators/test'
import { ValidationComposite } from '@/validation/validators/validationComposite/validationComposite'

describe('ValidationComposite', () => {
  it('Should return error if any validation fails', () => {
    const fieldValidationSpy1 = new FieldValidationSpy('any_field')
    const fieldValidationSpy2 = new FieldValidationSpy('any_field')

    fieldValidationSpy2.error = new Error('any_error_message')

    const sut = new ValidationComposite([
      fieldValidationSpy1,
      fieldValidationSpy2
    ])
    const error = sut.validate('any_field', 'any_value')
    expect(error).toBe('any_error_message')
  })
})
