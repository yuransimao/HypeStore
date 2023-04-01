
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStore} from 'firebase/storage'

export const config ={
      apikey:process.env.VITE_PUBLIC_FIREBASE_API_KEY,
      authDomain:process.env.VITE_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.VITE_PUBLIC_FIREBASE_PROJECT_ID
}

const app = initializeApp( config)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const Store = getStore(app)

export default app