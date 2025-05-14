import { useCheckTokenQuery } from "../api/userApi";

export const useAuthTokenCheck = () => {
  const token = localStorage.getItem("token");

  const { data, isLoading, isError, error } = useCheckTokenQuery(undefined, {
    skip: !token,
  });

  const valid = data?.valid ?? false;
  const exists = data?.exists ?? false;

  return {
    token,
    isLoading,
    isError,
    error,
    valid,
    exists,
  };
};
