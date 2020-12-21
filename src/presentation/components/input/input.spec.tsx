import React from 'react'
import faker from 'faker'
import { render, fireEvent } from '@testing-library/react'
import Input from '@/presentation/components/input/input'
import Context from '@/presentation/contexts/form/formContext'

const makeSut = (fieldName: string) => render(
  <Context.Provider value={{ state: {} }}>
    <Input name={fieldName} />
  </Context.Provider>
)

describe('Input', () => {
  it('Should begin with readOnly', () => {
    const field = faker.database.column()
    const { getByTestId } = makeSut(field)
    const input = getByTestId(field) as HTMLInputElement
    expect(input.readOnly).toBe(true)
  })

  it('Should remove readOnly on focus', () => {
    const field = faker.database.column()
    const { getByTestId } = makeSut(field)
    const input = getByTestId(field) as HTMLInputElement
    fireEvent.focus(input)
    expect(input.readOnly).toBe(false)
  })
})
