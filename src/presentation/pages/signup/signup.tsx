import React from 'react'
import Styles from './signup.scss'
import { Footer, LoginHeader, Input, FormStatus } from '@/presentation/components'
import Context from '@/presentation/contexts/form/formContext'
import { Link } from 'react-router-dom'

const SignUp = (): React.ReactElement => (
  <div className={Styles.signup}>
    <LoginHeader />
    <Context.Provider value={{ state: {} }}>
      <form className={Styles.form}>
        <h2>Criar conta</h2>
        <Input type="text" name="text" placeholder="Digite seu nome" />
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <Input type="password" name="password" placeholder="Digite sua senha" />
        <Input type="password" name="passwordConfirmation" placeholder="Repita sua senha" />
        <button className={Styles.submit} type="submit">Salvar</button>
        <Link to="/login" className={Styles.link}>Voltar para Login</Link>
        <FormStatus />
      </form>

    </Context.Provider>
    <Footer />
  </div>
)

export default SignUp
