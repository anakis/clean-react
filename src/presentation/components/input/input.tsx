import React, { useContext } from 'react'
import Styles from './input.scss'
import Context from '@/presentation/contexts/form/formContext'

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input = (props: InputProps) => {
  const { errorState } = useContext(Context)
  const error = errorState[`${props.name}Error`]
  const enableInput = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.readOnly = false
  }

  const getStatus = () => '🔴'

  const getTitle = () => error
  return (
    <div className={Styles.inputWrap}>
      <input {...props} readOnly onFocus={enableInput}/>
      <span data-testid={`${props.name}-status`} title={getTitle()} className={Styles.status}>{getStatus()}</span>
    </div>
  )
}

export default Input
