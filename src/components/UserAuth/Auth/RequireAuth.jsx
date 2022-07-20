import React from "react";
import {
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import {useAuth} from "../../../context";

export const RequireAuth = () => {
  const {auth} = useAuth();
  const location = useLocation();

  return auth.isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="login" state={{from: location}} replace />
  );
};
