import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <main className='flex items-center h-screen w-full justify-center'>
        <SignIn />
    </main>
  )
}

export default SignInPage