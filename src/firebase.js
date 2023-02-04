// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.FIRE_BASE_API_KEY,
  authDomain: 'chat-19025.firebaseapp.com',
  projectId: 'chat-19025',
  storageBucket: 'chat-19025.appspot.com',
  messagingSenderId: '207862793348',
  appId: '1:207862793348:web:e24bad884fc4193de56ed1',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
