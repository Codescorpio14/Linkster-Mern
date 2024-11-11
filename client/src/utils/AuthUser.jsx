import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const AuthUser = ({ allowedRole }) => {
  const { user } = useSelector((state) => state.auth);

  return allowedRole?.find((role) => user.role?.includes(role)) ? (
    <Outlet />
  ) : user ? (
    <Navigate to="/unauthorized" replace />
  ) : (
    <Navigate to="account" replace />
  );
};

export default AuthUser;
