// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPoAlwQbO_OgelB-kPsrf9HOxGbDTY4SM",
  authDomain: "greenmind-162239.firebaseapp.com",
  projectId: "greenmind-162239",
  storageBucket: "greenmind-162239.firebasestorage.app",
  messagingSenderId: "237138020368",
  appId: "1:237138020368:web:e4fd3b911d39f26963a295",
  measurementId: "G-XMXS4HKYFE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore()

export {analytics , auth,firestore};