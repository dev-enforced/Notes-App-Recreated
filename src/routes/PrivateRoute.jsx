import React from "react";
import { useAuthentication } from "context";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ partGiven }) => {
  const {
    authState: { isLoggedIn },
  } = useAuthentication();
  return isLoggedIn ? partGiven : <Navigate replace to="/login" />;
};
export { PrivateRoute };
