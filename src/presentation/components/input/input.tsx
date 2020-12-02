import React from 'react'
import Styles from './input.scss'

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input = (props: InputProps) => (
  <div className={Styles.inputWrap}>
    <input {...props}/>
    <span className={Styles.status}>🔴</span>
  </div>
)

export default Input
