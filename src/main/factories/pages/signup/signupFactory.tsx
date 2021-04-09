import React from 'react'
import { makeRemoteAddAccount } from '@/main/factories/usecases/addAccount/remoteAddAccountFactory'
import { makeLocalSaveAccessToken } from '@/main/factories/usecases/saveAccessToken/LocalSaveAccessTokenFactory'
import { SignUp } from '@/presentation/pages'
import { makeSignupValidation } from '@/main/factories/pages/signup/signupValidationFactory'

export const makeSignup = () => (
  <SignUp
    addAccount={makeRemoteAddAccount()}
    validation={makeSignupValidation()}
    saveAccessToken={makeLocalSaveAccessToken()}
  />
)
