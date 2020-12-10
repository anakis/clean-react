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
    emailError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório',
    mainError: '',
    email: ''
  })

  useEffect(() => {
    validation.validate({ email: state.email })
  }, [state.email])
  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={{ state, setState }}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input type="password" name="password" placeholder="Digite sua senha" />
          <button data-testid="submit" disabled className={Styles.submit} type="submit">Entrar</button>
          <span className={Styles.link}>Criar conta</span>
          <FormStatus />
        </form>

      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login
