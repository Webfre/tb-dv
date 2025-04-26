import { useEffect } from "react";
import { useCheckCourseAccessQuery } from "../api/userApi";

export const useHasCourseAccess = () => {
  const token = localStorage.getItem("token");

  const { data, isLoading, error } = useCheckCourseAccessQuery(undefined, {
    skip: !token,
  });

  useEffect(() => {
    if (error && "status" in error && error.status === 404) {
      localStorage.removeItem("token");
      localStorage.removeItem("isAccessKey");
    }
  }, [error]);

  const hasAccess = !!token && !!data?.hasAccess;

  return {
    token,
    hasAccess,
    isLoading,
  };
};
