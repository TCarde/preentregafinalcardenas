import {getFirestore} from 'firebase/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAlBLYvjxCwYuu80JIt4WknpF1jc6pU8Ws",
  authDomain: "ecommerce-17a3a.firebaseapp.com",
  projectId: "ecommerce-17a3a",
  storageBucket: "ecommerce-17a3a.appspot.com",
  messagingSenderId: "691960526215",
  appId: "1:691960526215:web:dfa52a4c059f55243a8f22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);