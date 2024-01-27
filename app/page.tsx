/* eslint-disable @next/next/no-script-component-in-head */
'use client'

import { useAddPost } from '@/store/server/features/post/mutations'
import { useGetPosts } from '@/store/server/features/post/queries'
import { auth, provider } from '@/utils/firebase.config'
import { Button } from 'antd'
import { GoogleAuthProvider, signInWithCredential, signInWithPopup, signOut } from 'firebase/auth'

import { useEffect } from 'react'

export default function Home() {
  const { isLoading: isGetPostsLoading, data: getPostsData } = useGetPosts()
  const addPost = useAddPost()

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
        client_id: '37712127974-tnr1gp0drcfn3umgfk2flgsa0ubju3ma.apps.googleusercontent.com',
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
    // Load the Google Identity Services API
    // Clean up the script tag on component unmount
  }, [])
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
    <div className="App">
      <Button onClick={onSignInWithGoogle}>Login Go</Button>
      <Button onClick={() => signOut(auth)}>Login Go</Button>

      <button
        onClick={() =>
          addPost.mutate({
            id: 1,
            userId: 10,
            title: 'test',
            body: 'test'
          })
        }
      >
        Add New Post
      </button>
      <hr />
      <div>
        {isGetPostsLoading ? (
          <p>Loading...</p>
        ) : (
          getPostsData?.map((post: any) => (
            <div key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
