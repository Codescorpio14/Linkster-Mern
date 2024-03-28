import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const AuthUser = () => {
  const { user } = useSelector((state) => state.auth);

  return user ? <Outlet /> : <Navigate to="account" replace />;
};

export default AuthUser;
