import React, { useContext, useState, useEffect, createContext } from "react";
import { auth } from "../config/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState("");
  const [fullName, setFullName] = useState("");

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signOut(email, password) {
    return signOut(auth, email, password);
  }

  function resetPassword(email, password) {
    return auth.sendPasswordResetEmail(email);
  }

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  function getUserDetails() {
    fullName = setFullName(auth.currentUser.displayName);
    return fullName;
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        currentUser,
        fullName,
        signIn,
        signUp,
        signOut,
        googleSignIn,
        getUserDetails,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
