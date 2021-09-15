import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZ0IZgLgdwEWyo9lA6D1GTdrNwRv2Wj7s",
    authDomain: "fir-276b0.firebaseapp.com",
    projectId: "fir-276b0",
    storageBucket: "fir-276b0.appspot.com",
    messagingSenderId: "71995418056",
    appId: "1:71995418056:web:f274dd78f46cc5f2770cfd",
    measurementId: "G-NKB67D1PLG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {db, auth};