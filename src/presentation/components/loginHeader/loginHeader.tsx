import React from 'react'
import Styles from './loginHeader.scss'
import { Logo } from '@/presentation/components'

const LoginHeader = () => (
  <header className={Styles.header}>
    <Logo />
    <h1>4Dev - Enquete para Programadores</h1>
  </header>
)

export default React.memo(LoginHeader)
