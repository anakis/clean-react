import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

type Factory = {
  makeLogin: () => React.ReactElement
  makeSignup: () => React.ReactElement
}

const Router = (props: Factory) => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" exact component={props.makeLogin} />
      <Route path="/signup" exact component={props.makeSignup} />
    </Switch>
  </BrowserRouter>
)

export default Router
