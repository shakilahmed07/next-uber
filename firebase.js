import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBNTHvXBijMcrVwzY-7Fx4EQP3D-FjtZB4",
  authDomain: "next-uber-77e5e.firebaseapp.com",
  projectId: "next-uber-77e5e",
  storageBucket: "next-uber-77e5e.appspot.com",
  messagingSenderId: "521048923437",
  appId: "1:521048923437:web:5b016092e36538e51d47a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
