import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = () => {
  const { token } = useAuth();

  // Only redirect if token is explicitly null
  if (token === null) return <Navigate to="/login" />;

  return <Outlet />;
};

export default ProtectedRoute;
