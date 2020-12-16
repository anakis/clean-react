import { FieldValidation } from '@/validation/protocols/fieldValidation'
import { RequiredFieldValidation } from '@/validation/validators'
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

  build (): FieldValidation[] {
    return this.validations
  }
}
