import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { ClipLoader } from "react-spinners";
import "./AuthProvider.css"

export const AuthContext = createContext(null);

const auth = getAuth(app);

const gitHubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const loginWithGitHub = () => {
    return signInWithPopup(auth, gitHubProvider);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    logout,
    loginUser,
    loginWithGoogle,
    loginWithGitHub,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {loading ? (
          <div className="spinner-container">
            <ClipLoader size={50} color="#ed241d" />
          </div>
        ) : (
          children
        )}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
