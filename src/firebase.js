//This file arranges the connection between the app and firebase
import firebase from "firebase/app"
import 'firebase/storage';
import 'firebase/firestore';
import "firebase/auth"

//firebase authenticatie obtained from local env file
const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
})

//storage
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
//authenticatie
export const auth = app.auth()
//firebase exports to use in other components
export { app, projectFirestore, projectStorage, timestamp };