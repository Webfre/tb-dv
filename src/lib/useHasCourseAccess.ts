import { useCheckCourseAccessQuery } from "../api/userApi";

export const useHasCourseAccess = () => {
  const token = localStorage.getItem("token");

  const { data, isLoading } = useCheckCourseAccessQuery(undefined, {
    skip: !token,
  });

  const hasAccess = !!token && !!data?.hasAccess;

  return {
    token,
    hasAccess,
    isLoading,
  };
};
