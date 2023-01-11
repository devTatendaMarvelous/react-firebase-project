// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import{getFirestore}from'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtDDxuQKJHkOdiFhnUN75Qq2xF_okq34w",
  authDomain: "react-blog-92b02.firebaseapp.com",
  projectId: "react-blog-92b02",
  storageBucket: "react-blog-92b02.appspot.com",
  messagingSenderId: "641648736924",
  appId: "1:641648736924:web:84effe076baa58610ccb59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db=getFirestore(app)