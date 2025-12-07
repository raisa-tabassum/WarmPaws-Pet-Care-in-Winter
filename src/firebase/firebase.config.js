import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyQTwPWrCfb82_M7bPKK9DPernxeeFuNE",
  authDomain: "warmpaws-c5bb0.firebaseapp.com",
  projectId: "warmpaws-c5bb0",
  storageBucket: "warmpaws-c5bb0.firebasestorage.app",
  messagingSenderId: "45042538082",
  appId: "1:45042538082:web:9dec33efe6793e458f233b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const googleProvider = new GoogleAuthProvider();