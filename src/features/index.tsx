import { MiddlewareArray } from "@reduxjs/toolkit";

import authQuery from "./authen/services";
import dashboardQuery from "./dashboard/services";
import productsQuery from "./products/services";
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
  [dashboardQuery.reducerPath]: dashboardQuery.reducer,
  [authQuery.reducerPath]: authQuery.reducer,
  [productsQuery.reducerPath]: productsQuery.reducer,
};

export const AppMiddleware = middlewares.concat(
  authQuery.middleware,
  dashboardQuery.middleware,
  productsQuery.middleware
);
