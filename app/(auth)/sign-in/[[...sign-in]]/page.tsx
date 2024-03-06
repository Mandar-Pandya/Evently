import { SignIn } from '@clerk/nextjs'
import React from 'react'

const LoginPage = () => {
  console.log("in signin page")
  return (
    <SignIn />
  )
}

export default LoginPage