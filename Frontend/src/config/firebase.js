import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "@firebase/auth";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARwJ1b21_p0Z4tDUSXzYdJMt6CdCNifUc",
  authDomain: "smartclassroom-5ec09.firebaseapp.com",
  projectId: "smartclassroom-5ec09",
  storageBucket: "smartclassroom-5ec09.appspot.com",
  messagingSenderId: "72014915247",
  appId: "1:72014915247:web:30cd147c3574fbc3f2565a",
  measurementId: "G-ZT7QKBRSM8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const auth = getAuth(app);
export default { app, db };
