// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPe14HQONI8iXZbCJyb1giC28-NQ5msHU",
  authDomain: "lnct-oas.firebaseapp.com",
  projectId: "lnct-oas",
  storageBucket: "lnct-oas.firebasestorage.app",
  messagingSenderId: "639637178623",
  appId: "1:639637178623:web:d849c6c98a0035abc2e4ca",
  measurementId: "G-M1MNH0FK5M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);