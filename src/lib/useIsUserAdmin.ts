import { useGetMyProfileQuery } from "../api/userApi";

export const useIsUserAdmin = () => {
  const { data: userData, isLoading, isError } = useGetMyProfileQuery();

  return { isAdmin: userData?.isAdmin, isLoading, isError };
};
