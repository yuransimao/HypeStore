import firebase from "firebase/compat/app"
import "firebase/compat/auth"

import  "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC_9riPKR1u7NrcJTLxAimjXseABzmWyc4",
    authDomain: "loja-36586.firebaseapp.com",
    projectId: "loja-36586",
    storageBucket: "loja-36586.appspot.com",
    messagingSenderId: "537668252183",
    appId: "1:537668252183:web:ae6b72c41798cc25026252",
    measurementId: "G-H02PB650VL"
  };

  const app = firebase.initializeApp(firebaseConfig)
  const auth = firebase.auth()
  const db = firebase.firestore();

  export {firebase, auth, app, db}