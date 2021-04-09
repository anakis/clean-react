import { ValidationComposite } from '@/validation/validators'
import { ValidationBuilder } from '@/validation/validators/builder/validationBuilder'

export const makeSignupValidation = () => ValidationComposite.build([
  ...ValidationBuilder.field('name').required().min(5).build(),
  ...ValidationBuilder.field('email').required().email().build(),
  ...ValidationBuilder.field('password').required().min(5).build(),
  ...ValidationBuilder.field('passwordConfirmation').required().sameAs('password').build()
])
