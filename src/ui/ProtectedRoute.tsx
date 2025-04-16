import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = localStorage.getItem("token");
  const isAccessKey = localStorage.getItem("isAccessKey") === "true";

  if (!token) {
    return <Navigate to="/register" replace />;
  }

  if (!isAccessKey) {
    return <Navigate to="/course-info" replace />;
  }

  return children;
};

export default ProtectedRoute;
