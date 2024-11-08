// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-P3QEP-xnwY4s-ogvX7T73cxNjdeUd2c",
  authDomain: "portfolio-b98c6.firebaseapp.com",
  projectId: "portfolio-b98c6",
  storageBucket: "portfolio-b98c6.firebasestorage.app",
  messagingSenderId: "602551314143",
  appId: "1:602551314143:web:a73ded4db6eb796186ab6a",
  measurementId: "G-36JGSQXD9K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
