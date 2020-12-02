import React, { ReactElement } from 'react'
import Styles from './spinner.scss'

type Props = React.HTMLAttributes<HTMLDivElement>

const Spinner = (props: Props): ReactElement => (
  <div {...props} className={[Styles.spinner, props.className].join(' ')}><div></div><div></div><div></div><div></div></div>
)

export default Spinner
