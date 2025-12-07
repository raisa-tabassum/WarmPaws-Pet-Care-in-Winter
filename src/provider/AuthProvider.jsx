import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext();
export const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Signup
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Reset password
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // Google Login
  const loginWithGoogle = () => signInWithPopup(auth, googleProvider);

  // Logout
  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const authData = {
    createUser,
    login,
    loginWithGoogle,
    resetPassword,
    user,
    setUser,
    logout,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
