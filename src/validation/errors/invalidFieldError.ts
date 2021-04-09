export class InvalidFieldError extends Error {
  constructor (readonly field?: string) {
    super(`${field ? `O campo ${field}` : 'O campo'} é inválido`)
    this.name = 'InvalidFieldError'
  }
}
