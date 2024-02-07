'use client'
import { auth } from '@/configs/firebase.config'
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth'
import React, { useEffect } from 'react'

const OneTap = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    script.async = true
    document.head.appendChild(script)
    script.onload = () => {
      // Initialize Google One-tap with your client ID
      const google = (window as any)?.google
      if (!google) return
      google.accounts.id.initialize({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        state_cookie_domain: 'https://example.com',
        cancel_on_tap_outside: false,
        callback: async (response: any) => {
          if (response.credential) {
            // If the response contains a credential, the user has successfully signed in
            const credential = GoogleAuthProvider.credential(response.credential)
            console.log('credential', credential)
            if (!credential) {
              console.error('Unable to get credential from One-tap response')
              return
            }
            try {
              // Sign in with Firebase using the obtained credential
              const firebaseUser = await signInWithCredential(auth, credential)
              console.log('firebaseUser', firebaseUser)
              // Access the user and token information
              const token = credential.idToken
              const user = firebaseUser.user
              console.log('Firebase sign-in success:', user)
              console.log('Google One-tap token:', token)
              // Perform additional actions or update UI as needed
            } catch (error) {
              console.error('Firebase sign-in error:', error)
              // Handle errors, such as authentication failure
            }
          } else {
            // Handle cases where the user did not sign in
            console.log('User did not sign in with Google One-tap')
          }
        }
      })
      google.accounts.id.prompt()
    }
  }, [])
  return <></>
}

export default OneTap
