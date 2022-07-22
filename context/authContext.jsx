import { auth } from "../config/firebaseConfig";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useState, useEffect, createContext, useContext } from "react";

const AdminContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [admin, setAdmin] = useState({});

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setAdmin(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AdminContext.Provider
      value={{
        admin,
        logOut,
        signIn,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AdminContext);
};
