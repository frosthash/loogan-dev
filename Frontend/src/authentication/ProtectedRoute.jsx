import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../contexts/UserAuthContext";

function ProtectedRoute({ children }) {
  const { currentUser } = useUserAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default ProtectedRoute;
