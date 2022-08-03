import React from "react";
import { useLocation } from "react-router-dom";
import { useAuthentication } from "context";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ partGiven }) => {
  const {
    authState: { isLoggedIn },
  } = useAuthentication();
  const location = useLocation();
  return isLoggedIn ? (
    partGiven
  ) : (
    <Navigate replace to="/login" state={{ from: location }} />
  );
};
export { PrivateRoute };
