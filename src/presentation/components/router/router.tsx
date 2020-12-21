import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

type Props = {
  makeLogin: () => React.ReactElement
}

const Router = ({ makeLogin }: Props) => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" exact component={makeLogin} />
    </Switch>
  </BrowserRouter>
)

export default Router
