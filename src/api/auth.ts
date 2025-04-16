import jwtDecode from "jwt-decode";

interface DecodedToken {
  sub: number;
  email: string;
  isAdmin: boolean;
  isAccessKey: boolean;
  accessKey?: string;
  exp: number;
  iat: number;
}

export const isUserAdmin = (): boolean => {
  const token = localStorage.getItem("token");
  if (!token) return false;

  try {
    const decoded = jwtDecode<DecodedToken>(token);
    return !!decoded.isAdmin;
  } catch (error) {
    console.error("Ошибка при декодировании токена:", error);
    return false;
  }
};
