import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDbS9ZFQfHo6lBropubj8GG-24F5iInBo",
  authDomain: "chatgptmessenger-2a6cd.firebaseapp.com",
  projectId: "chatgptmessenger-2a6cd",
  storageBucket: "chatgptmessenger-2a6cd.appspot.com",
  messagingSenderId: "875043379149",
  appId: "1:875043379149:web:e0792e19054fd2f6a15684",
  measurementId: "G-LR7G6P146D"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }