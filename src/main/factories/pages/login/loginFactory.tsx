import React from 'react'
import { makeRemoteAuthentication } from '@/main/factories/usecases/authentication/remoteAuthenticationFactory'
import { Login } from '@/presentation/pages'
import { makeLoginValidation } from '@/main/factories/pages/login/loginValidationFactory'

export const makeLogin = () => (
  <Login authentication={makeRemoteAuthentication()} validation={makeLoginValidation()}/>
)
