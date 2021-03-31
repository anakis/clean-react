import React from 'react'
import SignUp from './signup'
import { createMemoryHistory } from 'history'
import { render, RenderResult } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { Helper } from '@/presentation/test'

const history = createMemoryHistory({ initialEntries: ['/signup'] })

type SutTypes = {
  sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(
    <Router history={history}>
      <SignUp />
    </Router>
  )
  return {
    sut
  }
}

describe('Signup', () => {
  it('Should start with initial state', () => {
    const validationError = 'Campo obrigatório'
    const { sut } = makeSut()

    Helper.testChildCount(sut, 'error-wrap', 0)
    Helper.testButtonIsDisabled(sut, 'submit', true)
    Helper.testStatusForField(sut, 'name', validationError)
    Helper.testStatusForField(sut, 'email', validationError)
    Helper.testStatusForField(sut, 'password', validationError)
    Helper.testStatusForField(sut, 'passwordConfirmation', validationError)
  })
})
