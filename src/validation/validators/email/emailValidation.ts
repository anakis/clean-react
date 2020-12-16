import { FieldValidation } from '@/validation/protocols/fieldValidation'
import { InvalidFieldError } from '@/validation/errors/invalidFieldError'

export class EmailValidation implements FieldValidation {
  constructor (readonly field: string) {}
  validate (value: string): Error {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (value) {
      if (!regex.test(value)) return new InvalidFieldError(this.field)
    }
    return null
  }
}
