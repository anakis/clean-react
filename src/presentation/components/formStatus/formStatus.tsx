import React, { useContext } from 'react'
import Styles from './formStatus.scss'
import { Spinner } from '@/presentation/components'
import Context from '@/presentation/contexts/form/formContext'

const FormStatus = () => {
  const { state, errorState } = useContext(Context)
  const { isLoading } = state
  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {isLoading && <Spinner className={Styles.spinner} />}
      {errorState.main && <span className={Styles.error}>Erro</span>}
    </div>
  )
}

export default FormStatus
