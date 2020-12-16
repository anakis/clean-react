import React, { useState, useEffect } from 'react'
import Styles from './login.scss'
import { Footer, LoginHeader, Input, FormStatus } from '@/presentation/components'
import Context from '@/presentation/contexts/form/formContext'
import { Validation } from '@/presentation/protocols/validation'

type Props = {
  validation: Validation
}
const Login = ({ validation }: Props): React.ReactElement => {
  const [state, setState] = useState({
    isLoading: false,
    emailError: '',
    passwordError: '',
    mainError: '',
    email: '',
    password: ''
  })

  useEffect(() => {
    setState({
      ...state,
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password)
    })
  }, [state.email, state.password])

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={{ state, setState }}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input type="password" name="password" placeholder="Digite sua senha" />
          <button data-testid="submit" disabled={!!(state.emailError || state.passwordError)} className={Styles.submit} type="submit">Entrar</button>
          <span className={Styles.link}>Criar conta</span>
          <FormStatus />
        </form>

      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login
