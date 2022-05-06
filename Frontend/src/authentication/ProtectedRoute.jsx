import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../contexts/UserAuthContext";
const ProtectedRoute = ({ children }) => {
  const { currentUser } = useUserAuth();
  console.log("Check user's name", currentUser.displayName);
  console.log("Check user in Private: ", currentUser);
  if (!currentUser) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
