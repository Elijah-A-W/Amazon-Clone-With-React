import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkP5UnYuNdHv-6KNXNvzH-lJ6x_X551OE",
    authDomain: "clone-challenge-4e19c.firebaseapp.com",
    projectId: "clone-challenge-4e19c",
    storageBucket: "clone-challenge-4e19c.appspot.com",
    messagingSenderId: "997166987794",
    appId: "1:997166987794:web:153a792a320bcf4f28b6cb",
    measurementId: "G-0GQ38Q52FN"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();    
const auth = firebase.auth();

export { db, auth };

