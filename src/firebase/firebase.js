// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr5hYxzu9Eso5gl48G841WCpUxHxiObCs",
  authDomain: "coffee-store-site-f3c90.firebaseapp.com",
  projectId: "coffee-store-site-f3c90",
  storageBucket: "coffee-store-site-f3c90.firebasestorage.app",
  messagingSenderId: "841197690395",
  appId: "1:841197690395:web:d41094e62ab0b5e2cc22be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
