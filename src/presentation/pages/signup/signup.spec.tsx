import React from 'react'
import SignUp from './signup'
import { createMemoryHistory } from 'history'
import { render, RenderResult } from '@testing-library/react'
import { Router } from 'react-router-dom'

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

const testChildCount = (sut: RenderResult, fieldName: string, count: number) => {
  const el = sut.getByTestId(fieldName)
  expect(el.childElementCount).toBe(count)
}

const testButtonIsDisabled = (sut: RenderResult, fieldName: string, isDisabled: boolean) => {
  const button = sut.getByTestId(fieldName) as HTMLButtonElement
  expect(button.disabled).toBe(isDisabled)
}

const testStatusForField = (sut: RenderResult, fieldName: string, validationError?: string) => {
  const fieldStatus = sut.getByTestId(`${fieldName}-status`)
  expect(fieldStatus.title).toBe(validationError || 'Tudo certo')
  expect(fieldStatus.textContent).toBe(validationError ? '🔴' : '🟢')
}

describe('Signup', () => {
  it('Should start with initial state', () => {
    const validationError = 'Campo obrigatório'
    const { sut } = makeSut()

    testChildCount(sut, 'error-wrap', 0)
    testButtonIsDisabled(sut, 'submit', true)
    testStatusForField(sut, 'name', validationError)
    testStatusForField(sut, 'email', validationError)
    testStatusForField(sut, 'password', validationError)
    testStatusForField(sut, 'passwordConfirmation', validationError)
  })
})