/* eslint-disable @next/next/no-script-component-in-head */
'use client'

import { useAddPost } from '@/store/server/features/post/mutations'
import { useGetPosts } from '@/store/server/features/post/queries'
import { provider, ui } from '@/utils/firebase.config'
import 'firebaseui/dist/firebaseui.css'
import { useEffect } from 'react'

export default function Home() {
  const { isLoading: isGetPostsLoading, data: getPostsData } = useGetPosts()
  const addPost = useAddPost()

  useEffect(() => {
    // Load the Google Identity Services API
    const script = document.createElement('script')
    script.src =
      'https://accounts.google.com/gsi/client;https://accounts.google.com/gsi/; connect-src https://accounts.google.com/gsi/;'
    script.async = true
    document.head.appendChild(script)

    script.onload = () => {
      // Initialize Google One-tap with your client ID
      const google = (window as any)?.google
      if (!google) return
      google.accounts.id.initialize({
        client_id: '495924492807-b803l2kjek2lsq12lej2qn4sa9hsplru.apps.googleusercontent.com',
        callback: async (response: any) => {
          // Handle Google One-tap response
          console.log('Google One-tap response', response)
        }
      })
    }
    // Initialize FirebaseUI
    ui.start('#firebaseui-auth-container', {
      signInSuccessUrl: '/', // Redirect URL after sign-in
      signInOptions: [provider.providerId], // Use Google as the sign-in provider
      credentialHelper: 'googleyolo',
      signInFlow: 'popup',
      tosUrl: '/',
      privacyPolicyUrl: '/'
    })

    // Clean up the script tag on component unmount
  }, [])
  return (
    <div className="App">
      <div id="firebaseui-auth-container"></div>
      <div
        id="g_id_onload"
        data-client_id="495924492807-b803l2kjek2lsq12lej2qn4sa9hsplru.apps.googleusercontent.com"
        data-login_uri="https://your.domain/your_login_endpoint"
        data-your_own_param_1_to_login="any_value"
        data-your_own_param_2_to_login="any_value"
      ></div>
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
