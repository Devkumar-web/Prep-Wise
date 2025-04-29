// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPzzbL8mCdpZaeYssPNG0Lt79sKQNrMzQ",
  authDomain: "prepwise-3039e.firebaseapp.com",
  projectId: "prepwise-3039e",
  storageBucket: "prepwise-3039e.firebasestorage.app",
  messagingSenderId: "337856159274",
  appId: "1:337856159274:web:ebece3bc6409abeca92d53",
  measurementId: "G-4E8EPYBHGD"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);