import firebase from "firebase"
import 'firebase/firestore'
if(!firebase.apps.length){
    firebase.initializeAp({
      apikey:process.env.VITE_PUBLIC_FIREBASE_API_KEY,
      authDomain:process.env.VITE_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.VITE_PUBLIC_FIREBASE_PROJECT_ID
    })
}

export default firebase