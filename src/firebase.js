// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnIRRHbMtCQdqEdIRdqN_yb9bdQu_9roY",
  authDomain: "benmoury-eac94.firebaseapp.com",
  projectId: "benmoury-eac94",
  storageBucket: "benmoury-eac94.appspot.com",
  messagingSenderId: "425754279673",
  appId: "1:425754279673:web:e62ef6b76088549a61ec28",
  measurementId: "G-2XLP33SXR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);