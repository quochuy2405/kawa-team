'use client'
import { auth, provider } from '@/utils/firebase.config'
import { Button } from 'antd'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'

const SignInGoogle = () => {
  const onSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result)
        if (!credential) return
        const token = credential.accessToken
        // The signed-in user info.
        const user = result.user
        // IdP data available using getAdditionalUserInfo(result)
        console.log('token', token)
        console.log('user', user)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.customData.email
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error)
        // ...
      })
  }

  return (
    <Button
      onClick={onSignInWithGoogle}
      className="!flex !items-center !justify-center !text-xs"
      icon={<FcGoogle />}
    >
      Sign in
    </Button>
  )
}

export default SignInGoogle
