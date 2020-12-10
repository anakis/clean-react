import React, { useState } from 'react'
import Styles from './login.scss'
import { Footer, LoginHeader, Input, FormStatus } from '@/presentation/components'
import Context from '@/presentation/contexts/form/formContext'

const Login = (): React.ReactElement => {
  const [state] = useState({
    isLoading: false
  })

  const [errorState] = useState({
    emailError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório',
    main: ''
  })
  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={{ state, errorState }}>
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
