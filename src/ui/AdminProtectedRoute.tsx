import { Navigate } from "react-router-dom";
import { isUserAdmin } from "../api/auth";

interface ProtectedRouteProps {
  children: React.ReactElement;
}

const AdminProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/register" replace />;
  }

  if (!isUserAdmin()) {
    return <Navigate to="/course-info" replace />;
  }

  return children;
};

export default AdminProtectedRoute;
