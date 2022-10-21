// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1xX98h73gwPsxDHvFwv7m8mwsVF0t5D0",
  authDomain: "react-social-30ffc.firebaseapp.com",
  projectId: "react-social-30ffc",
  storageBucket: "react-social-30ffc.appspot.com",
  messagingSenderId: "461480732952",
  appId: "1:461480732952:web:4061be988ffc808ebd566d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);