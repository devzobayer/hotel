// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxuWoOsYDBwxzA7JnxtwN-nN_ey8cgS5Q",
  authDomain: "booking-hotel-52b4e.firebaseapp.com",
  projectId: "booking-hotel-52b4e",
  storageBucket: "booking-hotel-52b4e.firebasestorage.app",
  messagingSenderId: "784607561659",
  appId: "1:784607561659:web:5f04ed72be9928af84e69e",
  measurementId: "G-DS10LR1QSG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };