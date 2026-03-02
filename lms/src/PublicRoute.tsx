import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const checkUserIsLoggedIn = () => {
    return localStorage.getItem("token") ? true : false;
  };

  const token = checkUserIsLoggedIn();

  return token ? <Navigate to="/" replace /> : <Outlet />;
};

export default PublicRoute;
