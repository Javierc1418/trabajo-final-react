import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1ryrRw0eWwSRkHzbBjwUNUMiG_vUSYow",
  authDomain: "entrega-final-2a1ac.firebaseapp.com",
  projectId: "entrega-final-2a1ac",
  storageBucket: "entrega-final-2a1ac.appspot.com",
  messagingSenderId: "981230722648",
  appId: "1:981230722648:web:2ec26bae3dd07b2497742d",
  measurementId: "G-3PD65NSECF"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)