import React, { useContext } from 'react'
import Context from '@/presentation/contexts/form/formContext'

type Props = {
  text: string
}
const SubmitButton = ({ text }: Props) => {
  const { state } = useContext(Context)
  return (
    <button data-testid="submit" disabled={state.isFormInvalid}
      type="submit">{text}</button>
  )
}

export default SubmitButton
