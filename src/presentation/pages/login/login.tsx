import React from 'react'
import Styles from './login.scss'
import LogoSVG from '@/assets/logo.svg'
import Spinner from '@/presentation/components/spinner/spinner'

const Login = (): React.ReactElement => {
  return (
    <div className={Styles.login}>
      <header className={Styles.header}>
        <LogoSVG />
        <h1>4Dev - Enquete para Programadores</h1>
      </header>
      <form className={Styles.form}>
        <h2>Login</h2>
        <div className={Styles.inputWrap}>
          <input type="email" name="email" placeholder="Digite seu e-mail" />
          <span className={Styles.status}>🔴</span>
        </div>
        <div className={Styles.inputWrap}>
          <input type="password" name="password" placeholder="Digite sua senha" />
          <span className={Styles.status}>🔴</span>
        </div>
        <button className={Styles.submit} type="submit">Entrar</button>
        <span className={Styles.link}>Criar conta</span>
        <div className={Styles.errorWrap}>
          <span className={Styles.error}>Erro</span>
          <Spinner className={Styles.spinner} />
        </div>
      </form>
      <footer className={Styles.footer} />
    </div>
  )
}

export default Login
