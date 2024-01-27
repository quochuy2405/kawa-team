import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyADcqFVs8t3UjQI44qX0M8xCWaJ6cVwKH8',
  authDomain: 'kawa-ba6c9.firebaseapp.com',
  projectId: 'kawa-ba6c9',
  storageBucket: 'kawa-ba6c9.appspot.com',
  messagingSenderId: '37712127974',
  appId: '1:37712127974:web:03bf8950bac960c5a85827',
  measurementId: 'G-R1PGFGRFQ4'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getDatabase()
const auth = getAuth()
auth.languageCode = 'it'
const provider = new GoogleAuthProvider()
provider.addScope('https://www.googleapis.com/auth/contacts.readonly')

export { app, auth, db, provider }
