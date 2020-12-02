import React from 'react'
import Logo from '@/presentation/components/logo/logo'
import Styles from './loginHeader.scss'

const LoginHeader = () => (
  <header className={Styles.header}>
    <Logo />
    <h1>4Dev - Enquete para Programadores</h1>
  </header>
)

export default React.memo(LoginHeader)
