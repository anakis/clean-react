import React from 'react'

const SvgrMock = React.forwardRef<HTMLSpanElement, {}>((props, ref) => <span ref={ref} {...props} />)

SvgrMock.displayName = 'foo'

export const ReactComponent = SvgrMock
export default SvgrMock
