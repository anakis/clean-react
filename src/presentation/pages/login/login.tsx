import React from 'react'
import Styles from './login.scss'
import Spinner from '@/presentation/components/spinner/spinner'
import LoginHeader from '@/presentation/components/loginHeader/loginHeader'
import Footer from '@/presentation/components/footer/footer'

const Login = (): React.ReactElement => (
  <div className={Styles.login}>
    <LoginHeader />
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
    <Footer />
  </div>
)

export default Login
