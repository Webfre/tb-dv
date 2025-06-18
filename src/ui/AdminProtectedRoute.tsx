import { Navigate } from "react-router-dom";
import { useIsUserAdmin } from "../lib/useIsUserAdmin";
import { useAuthTokenCheck } from "../lib/useAuthTokenCheck";
import Spinner from "./Spinner";

interface ProtectedRouteProps {
  children: React.ReactElement;
}

const AdminProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { token, isError, isLoading: loadingAuth, valid } = useAuthTokenCheck();
  const { isAdmin, loadingAdmin } = useIsUserAdmin();

  const isLoading = loadingAuth || loadingAdmin;

  if (!token) {
    return <Navigate to="/register" replace />;
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    localStorage.removeItem("token");
    return <Navigate to="/login" replace />;
  }

  if (!valid) {
    localStorage.removeItem("token");
    return <Navigate to="/register" replace />;
  }

  if (!isAdmin) {
    return <Navigate to="/course-info" replace />;
  }

  return children;
};

export default AdminProtectedRoute;
