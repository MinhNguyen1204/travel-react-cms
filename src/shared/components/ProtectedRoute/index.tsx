import { useSelector } from "react-redux";
import { getIsAuthenticated } from "features/authen/storage";
// import AccessDenied from '../../views/AccessDenied/index';
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import PrivateLayout from "layouts/PrivateLayout";
import React, { useEffect } from "react";
import { useMeQuery } from "features/auth/services";
import useDidUpdate from "hooks/useDidUpdate";

const ProtectedRoute = ({
  redirectPath = '/auth/login',
  children,
}: { redirectPath?: string, children?: React.ReactNode }) => {

  const { data: user, isLoading: userLoading, isError } = useMeQuery({
    token: localStorage.getItem("token") || "",
  });

  const navigate = useNavigate();


  useDidUpdate(() => {
    if (!user) {
      navigate("/auth/login");
      return;
    }
  }, [user, isError])

  if (userLoading) {
    return <div>Loading...</div>;
  }

  return <Outlet />

};

export default ProtectedRoute;
