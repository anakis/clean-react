import React from 'react'
import { makeRemoteAuthentication } from '@/main/factories/usecases/authentication/remoteAuthenticationFactory'
import { makeLoginValidation } from '@/main/factories/pages/login/loginValidationFactory'
import { makeLocalSaveAccessToken } from '@/main/factories/usecases/saveAccessToken/LocalSaveAccessTokenFactory'
import { Login } from '@/presentation/pages'

export const makeLogin = () => (
  <Login
    authentication={makeRemoteAuthentication()}
    validation={makeLoginValidation()}
    saveAccessToken={makeLocalSaveAccessToken()}
  />
)
