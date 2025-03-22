import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { auth } from "../config/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export function useAuth() { // function that provide us with AuthContext
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  // This useEffect hook listens for changes in the authentication state,
  // updating the application state accordingly when a user logs in or out.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  async function initializeUser(user) {
    if (user) {
      // If there IS a user logged in:
      setCurrentUser({ ...user }); // Save user's info to state
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null); // Clear user info from state
      setUserLoggedIn(false);
    }
    setLoading(false);
  }

  const value = {
    currentUser,
    userLoggedIn,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
