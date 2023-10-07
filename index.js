import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvQ33nZv-JT507Ys16ft14Z3n1-nZsZLU",
  authDomain: "my-react-blog-635a9.firebaseapp.com",
  projectId: "my-react-blog-635a9",
  storageBucket: "my-react-blog-635a9.appspot.com",
  messagingSenderId: "165884001550",
  appId: "1:165884001550:web:74a334c66fd60c7d162b5f",
  measurementId: "G-QWZP75LZ1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
