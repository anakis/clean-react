import React, { useContext } from 'react'
import Styles from './formStatus.scss'
import { Spinner } from '@/presentation/components'
import Context from '@/presentation/contexts/form/formContext'

const FormStatus = () => {
  const { state } = useContext(Context)
  const { isLoading, mainError } = state
  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {isLoading && <Spinner className={Styles.spinner} />}
      {mainError && <span className={Styles.error}>{mainError}</span>}
    </div>
  )
}

export default FormStatus
