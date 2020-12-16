import { FieldValidation } from '@/validation/protocols/fieldValidation'
import { InvalidFieldError } from '@/validation/errors/invalidFieldError'

export class EmailValidation implements FieldValidation {
  constructor (readonly field: string) {}
  validate (value: string): Error {
    return (new InvalidFieldError(this.field))
  }
}
