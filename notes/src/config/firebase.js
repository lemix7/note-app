// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth , GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBAVNqBVFreo36iP-h0Zg0BlCeRX3tj_c",
  authDomain: "notes-app-af2b7.firebaseapp.com",
  projectId: "notes-app-af2b7",
  storageBucket: "notes-app-af2b7.firebasestorage.app",
  messagingSenderId: "80865259571",
  appId: "1:80865259571:web:df2f7071028b1acfacf346",
  measurementId: "G-PNRKV172W6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)