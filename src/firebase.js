import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCT-_Puy0UBJbgdZ5mW8-Uh1BDd1oko0Zc',
  authDomain: 'chat-19025.firebaseapp.com',
  projectId: 'chat-19025',
  storageBucket: 'chat-19025.appspot.com',
  messagingSenderId: '207862793348',
  appId: '1:207862793348:web:e24bad884fc4193de56ed1',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()
