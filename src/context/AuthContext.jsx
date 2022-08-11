import React, { createContext, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";
import { getLoginResponse, getSignupResponse } from "services";
import { routeConstants } from "constants";
const AuthenticationContext = createContext(null);
const useAuthentication = () => useContext(AuthenticationContext);

const AuthProvider = ({ children }) => {
  const localStorageDetails = JSON.parse(localStorage.getItem("AUTH-DETAILS"));
  const navigateTo = useNavigate();
  const location = useLocation();
  const initialAuthState = {
    isLoggedIn: localStorageDetails ? true : false,
    authToken: localStorageDetails?.authToken,
  };
  const [authState, setAuthState] = useState(initialAuthState);
  const { HOME_ROUTE, NOTES_HOME } = routeConstants;
  const loginSubmissionHandler = async (loginDataGiven) => {
    try {
      const { data, status } = await getLoginResponse(loginDataGiven);
      const { encodedToken: encodedTokenFromData } = data;
      if (status === 200) {
        localStorage.setItem(
          "AUTH-DETAILS",
          JSON.stringify({
            isLoggedIn: true,
            authToken: encodedTokenFromData,
          })
        );
        setAuthState((prev) => ({
          ...prev,
          isLoggedIn: true,
          authToken: encodedTokenFromData,
        }));
        navigateTo(location?.state?.from?.pathname ?? NOTES_HOME, {
          replace: true,
        });
        toast.success("Signed in successfully");
      }
    } catch (loginSubmissionError) {
      toast.error("Login failed.Please try again.");
      console.error("LOGIN SUBMISSION ERROR:", loginSubmissionError);
    }
  };
  const signupSubmissionHandler = async (signupDataGiven) => {
    try {
      const { data, status } = await getSignupResponse(signupDataGiven);
      const { encodedToken: encodedTokenFromData } = data;

      if (status === 201) {
        localStorage.setItem(
          "AUTH-DETAILS",
          JSON.stringify({
            isLoggedIn: true,
            authToken: encodedTokenFromData,
          })
        );
        setAuthState((prev) => ({
          ...prev,
          isLoggedIn: true,
          authToken: encodedTokenFromData,
        }));
        navigateTo(location?.state?.from?.pathname ?? NOTES_HOME, {
          replace: true,
        });
      }
      toast.success("Signed up successfully");
    } catch (signupSubmissionError) {
      toast.error("Sign up failed.Please try again.");
      console.error("LOGIN SUBMISSION ERROR:", signupSubmissionError);
    }
  };
  const logoutHandler = () => {
    setAuthState((prev) => ({ ...prev, isLoggedIn: false, authToken: "" }));
    localStorage.removeItem("AUTH-DETAILS");
    navigateTo(HOME_ROUTE);
    toast.success("Signed out successfully");
  };
  return (
    <AuthenticationContext.Provider
      value={{
        authState,
        setAuthState,
        loginSubmissionHandler,
        signupSubmissionHandler,
        logoutHandler,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export { useAuthentication, AuthProvider };
