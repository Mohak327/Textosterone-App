import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkfdi_Mz576KKTNUfT3jI5FqEf3lyjMyI",
  authDomain: "textosterone-app.firebaseapp.com",
  projectId: "textosterone-app",
  storageBucket: "textosterone-app.appspot.com",
  messagingSenderId: "1009962675091",
  appId: "1:1009962675091:web:ca9f5056c40133593c9666",
  measurementId: "G-GEV3P0JKDF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore()

export default database