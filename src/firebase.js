// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX0lilYZdg3LkzpXFZZ2FetdmaOErFN_E",
  authDomain: "fir-react-auth-1997.firebaseapp.com",
  projectId: "fir-react-auth-1997",
  storageBucket: "fir-react-auth-1997.appspot.com",
  messagingSenderId: "833308436482",
  appId: "1:833308436482:web:20f8d7ee977a1ca3655f1b",
  measurementId: "G-SYRKDNL0SJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);
export const googleProvider = new GoogleAuthProvider();
const analytics = getAnalytics(app);