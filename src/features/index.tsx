import { MiddlewareArray } from "@reduxjs/toolkit";

import authQuery from "./authen/services";
import homeQuery from "./dashboard/services";
import { AuthRoutes, authSlice } from "./authen";
import { DashboardRoutes } from "./dashboard";
import { ProductsRoutes } from "./products";

const middlewares = new MiddlewareArray();

export const AppRoutes = [
  // Add more modules
  ...AuthRoutes,
  ...DashboardRoutes,
  ...ProductsRoutes,
];

export const AppSlices = {
  // Add more module slices
  auth: authSlice,
};

export const AppQueries = {
  [homeQuery.reducerPath]: homeQuery.reducer,
  [authQuery.reducerPath]: authQuery.reducer,
};

export const AppMiddleware = middlewares.concat(
  authQuery.middleware,
  homeQuery.middleware
);
