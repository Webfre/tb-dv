import { Navigate } from "react-router-dom";
import { isUserAdmin } from "../api/auth";
import { useAuthTokenCheck } from "../lib/useAuthTokenCheck";
import Spinner from "./Spinner";

interface ProtectedRouteProps {
  children: React.ReactElement;
}

const AdminProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { token, isError, isLoading, valid, exists } = useAuthTokenCheck();

  if (!token) {
    return <Navigate to="/register" replace />;
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (isError || !valid) {
    // токен протух или подпись неверна
    localStorage.removeItem("token");
    localStorage.removeItem("isAccessKey");
    return <Navigate to="/login" replace />;
  }

  if (valid && !exists) {
    // токен валиден, но пользователь не найден
    localStorage.removeItem("token");
    localStorage.removeItem("isAccessKey");
    return <Navigate to="/register" replace />;
  }

  if (!isUserAdmin()) {
    return <Navigate to="/course-info" replace />;
  }

  return children;
};

export default AdminProtectedRoute;
