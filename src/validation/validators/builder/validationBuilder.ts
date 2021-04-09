import { FieldValidation } from '@/validation/protocols/fieldValidation'
import { RequiredFieldValidation } from '@/validation/validators'
import { CompareFieldsValidation } from '@/validation/validators/compareFields/compareFieldsValidation'
import { EmailValidation } from '@/validation/validators/email/emailValidation'
import { MinLengthValidation } from '@/validation/validators/minLength/minLengthValidation'

export class ValidationBuilder {
  private constructor (private readonly fieldName: string, private readonly validations: FieldValidation[]) {}

  static field (fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, [])
  }

  required (): ValidationBuilder {
    this.validations.push(new RequiredFieldValidation(this.fieldName))
    return this
  }

  email (): ValidationBuilder {
    this.validations.push(new EmailValidation(this.fieldName))
    return this
  }

  min (value: number): ValidationBuilder {
    this.validations.push(new MinLengthValidation(this.fieldName, value))
    return this
  }

  sameAs (fieldToCompare: string): ValidationBuilder {
    this.validations.push(new CompareFieldsValidation(this.fieldName, fieldToCompare))
    return this
  }

  build (): FieldValidation[] {
    return this.validations
  }
}
