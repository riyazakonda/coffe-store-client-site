import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { createContext, useState } from "react";
import { auth } from "../firebase/firebase";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const info = {
    users,
    setUsers,
    createUser,
    signIn,
    loading,
  };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
