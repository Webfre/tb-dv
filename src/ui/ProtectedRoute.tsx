import React from "react";
import { Navigate } from "react-router-dom";
import { useHasCourseAccess } from "../lib/useHasCourseAccess";
import Spinner from "./Spinner";

interface ProtectedRouteProps {
  children: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { token, hasAccess, isLoading } = useHasCourseAccess();

  if (!token) return <Navigate to="/register" replace />;

  if (isLoading) return <Spinner />;

  if (!hasAccess) {
    return <Navigate to="/course-info" replace />;
  }

  return children;
};

export default ProtectedRoute;
