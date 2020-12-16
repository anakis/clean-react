import React, { useContext } from 'react'
import Styles from './input.scss'
import Context from '@/presentation/contexts/form/formContext'

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input = (props: InputProps) => {
  const { state, setState } = useContext(Context)
  const error = state[`${props.name}Error`]
  const enableInput = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.readOnly = false
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }
  const getStatus = () => error ? '🔴' : '🟢'

  const getTitle = () => error || 'Tudo certo'
  return (
    <div className={Styles.inputWrap}>
      <input onChange={handleChange} {...props} data-testid={props.name} readOnly onFocus={enableInput}/>
      <span data-testid={`${props.name}-status`} title={getTitle()} className={Styles.status}>{getStatus()}</span>
    </div>
  )
}

export default Input
