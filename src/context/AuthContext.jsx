import React, { createContext, useContext, useState } from "react";
const AuthenticationContext = createContext(null);
const useAuthentication = () => useContext(AuthenticationContext);

const AuthProvider = ({ children }) => {
  const localStorageDetails = JSON.parse(localStorage.getItem("AUTH-DETAILS"));
  const initialAuthState = {
    isLoggedIn: localStorageDetails ? true : false,
    authToken: localStorageDetails?.authToken,
  };
  const [authState, setAuthState] = useState(initialAuthState);
  return (
    <AuthenticationContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export { useAuthentication, AuthProvider };
