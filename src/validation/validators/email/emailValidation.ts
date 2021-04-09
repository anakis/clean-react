import { FieldValidation } from '@/validation/protocols/fieldValidation'
import { InvalidFieldError } from '@/validation/errors/invalidFieldError'

export class EmailValidation implements FieldValidation {
  constructor (readonly field: string) {}
  validate (input: object): Error {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (input[this.field]) {
      if (!regex.test(input[this.field])) return new InvalidFieldError(this.field)
    }
    return null
  }
}
