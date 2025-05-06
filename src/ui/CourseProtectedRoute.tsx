import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthTokenCheck } from "../lib/useAuthTokenCheck";
import { useCheckCourseAccessQuery } from "../api/userApi";
import Spinner from "./Spinner";

interface CourseProtectedRouteProps {
  children: React.ReactElement;
}

const CourseProtectedRoute: React.FC<CourseProtectedRouteProps> = ({
  children,
}) => {
  const {
    token,
    isLoading: isAuthLoading,
    isError,
    valid,
    exists,
  } = useAuthTokenCheck();

  const { data, isLoading: isAccessLoading } = useCheckCourseAccessQuery(
    undefined,
    {
      skip: !token || !valid || !exists,
    }
  );

  const hasAccess = !!data?.hasAccess;

  if (!token) return <Navigate to="/register" replace />;
  if (isAuthLoading || isAccessLoading) return <Spinner />;

  if (!valid || !exists || isError) {
    localStorage.removeItem("token");
    localStorage.removeItem("isAccessKey");
    return <Navigate to="/login" replace />;
  }

  if (!hasAccess) {
    return <Navigate to="/course-info" replace />;
  }

  return children;
};

export default CourseProtectedRoute;
