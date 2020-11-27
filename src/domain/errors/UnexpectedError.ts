export class UnexpectedError extends Error {
  constructor () {
    super('Algo de errado aconteeu. Tente novamente em alguns segundos')
    this.name = 'UnexpectedError'
  }
}
