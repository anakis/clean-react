import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login } from '@/presentation/pages'
import '@/presentation/styles/globals.scss'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" exact component={Login} />
    </Switch>
  </BrowserRouter>
)

export default Router
