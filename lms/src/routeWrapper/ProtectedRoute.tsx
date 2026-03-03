import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const checkUserIsLoggedIn = () => {
    return localStorage.getItem("token") ? true : false;
  };

  const token = checkUserIsLoggedIn();

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
