import { FieldValidationSpy } from '@/validation/validators/test'
import { ValidationComposite } from '@/validation/validators/validationComposite/validationComposite'
import faker from 'faker'

type SutTypes = {
  sut: ValidationComposite
  fieldValidationsSpy: FieldValidationSpy[]
}

const makeSut = (fieldName: string): SutTypes => {
  const fieldValidationsSpy = [
    new FieldValidationSpy(fieldName),
    new FieldValidationSpy(fieldName)
  ]
  const sut = ValidationComposite.build(fieldValidationsSpy)

  return {
    sut,
    fieldValidationsSpy
  }
}

describe('ValidationComposite', () => {
  it('Should return error if any validation fails', () => {
    const fieldName = faker.database.column()
    const { sut, fieldValidationsSpy } = makeSut(fieldName)
    const [fieldValidationSpy1, fieldValidationSpy2] = fieldValidationsSpy

    const errorMessage = faker.random.words()
    fieldValidationSpy1.error = new Error(errorMessage)

    fieldValidationSpy2.error = new Error(faker.random.words())

    const error = sut.validate(fieldName, faker.random.word())
    expect(error).toBe(errorMessage)
  })
  it('Should return falsy if there is no error', () => {
    const fieldName = faker.database.column()
    const { sut } = makeSut(fieldName)

    const error = sut.validate(fieldName, faker.random.word())
    expect(error).toBeFalsy()
  })
})
