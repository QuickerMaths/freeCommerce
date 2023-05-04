import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";
import { RootState } from "../redux/store";

const RequireAuth = () => {
  const authData = useAppSelector((state: RootState) => state.authSlice);

  return authData?.username ? <Outlet /> : <Navigate to="/" />;
};

export default RequireAuth;
