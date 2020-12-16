import { FieldValidationSpy } from '@/validation/validators/test'
import { ValidationComposite } from '@/validation/validators/validationComposite/validationComposite'

describe('ValidationComposite', () => {
  it('Should return error if any validation fails', () => {
    const fieldValidationSpy1 = new FieldValidationSpy('any_field')

    fieldValidationSpy1.error = new Error('first_error_message')

    const fieldValidationSpy2 = new FieldValidationSpy('any_field')

    fieldValidationSpy2.error = new Error('second_error_message')

    const sut = new ValidationComposite([
      fieldValidationSpy1,
      fieldValidationSpy2
    ])
    const error = sut.validate('any_field', 'any_value')
    expect(error).toBe('first_error_message')
  })
})
