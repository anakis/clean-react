import { FieldValidation } from '@/validation/protocols/fieldValidation'
import { InvalidFieldError } from '@/validation/errors'

export class CompareFieldsValidation implements FieldValidation {
  constructor (readonly field: string, private readonly fieldToCompare: string) {}

  validate (input: object): Error {
    if (input[this.field] !== input[this.fieldToCompare]) { return new InvalidFieldError() }
    return null
  }
}
