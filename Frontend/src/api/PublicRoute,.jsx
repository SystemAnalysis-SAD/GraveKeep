import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PublicRoute = ({ children }) => {
  const { token } = useAuth();

  // If the user is logged in, redirect to dashboard
  if (token) {
    return <Navigate to="/dashboard" />;
  }

  // Otherwise, render the children (login/register page)
  return children;
};

export default PublicRoute;
