import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAVC_mZEcswk48RF52wndC-jfkfEsf55Y",
  authDomain: "vivatrip-d4102.firebaseapp.com",
  projectId: "vivatrip-d4102",
  storageBucket: "vivatrip-d4102.firebasestorage.app",
  messagingSenderId: "122452897007",
  appId: "1:122452897007:web:aec27df96c8ca804263f1a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }