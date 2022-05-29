// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHPTnqYO7qy3K7PwDBR10g1MmbnRSwQ_U",
  authDomain: "ecommerce-rlozano.firebaseapp.com",
  projectId: "ecommerce-rlozano",
  storageBucket: "ecommerce-rlozano.appspot.com",
  messagingSenderId: "705760177099",
  appId: "1:705760177099:web:5428958f912614bcf1e44e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
