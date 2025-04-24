import React from "react";
import { Navigate } from "react-router-dom";
import { useCheckCourseAccessQuery } from "../api/userApi";

interface ProtectedRouteProps {
  children: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = localStorage.getItem("token");

  const { data, isLoading } = useCheckCourseAccessQuery(undefined, {
    skip: !token,
  });

  if (!token) return <Navigate to="/register" replace />;
  if (isLoading) return null;

  if (!data?.hasAccess) {
    return <Navigate to="/course-info" replace />;
  }

  return children;
};

export default ProtectedRoute;
