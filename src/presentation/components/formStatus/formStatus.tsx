import React from 'react'
import Styles from './formStatus.scss'
import Spinner from '@/presentation/components/spinner/spinner'

const FormStatus = () => (
  <div className={Styles.errorWrap}>
    <span className={Styles.error}>Erro</span>
    <Spinner className={Styles.spinner} />
  </div>
)

export default FormStatus
