import { useSelector } from "react-redux";
import { getIsAuthenticated } from "features/authen/storage";
// import AccessDenied from '../../views/AccessDenied/index';
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import PrivateLayout from "layouts/PrivateLayout";
import React, { useEffect } from "react";
import useDidUpdate from "hooks/useDidUpdate";
import { useMeQuery } from "features/authen/services";
import { sideBarData } from "shared/constants/SideBarConst";
import { getFirstPathBySideBar } from "shared/utils/Path";
import LoadingIndicator from "../LoadingIndicator";

const ProtectedRoute = () => {

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { data: user, isLoading: userLoading, isError } = useMeQuery({
    token: localStorage.getItem("token") || "",
  });

  const isEmtyRoute = pathname.split("/").length < 3;

  useDidUpdate(() => {
    if (!user) {
      navigate("/auth/login");
      return;
    }
  }, [user, isError])

  if (isEmtyRoute) {
    const path = getFirstPathBySideBar(sideBarData);
    return <Navigate to={path} />
  }

  if (userLoading) {
    return <LoadingIndicator />
  }

  return <Outlet />

};

export default ProtectedRoute;
