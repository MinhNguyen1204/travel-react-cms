import { MiddlewareArray } from "@reduxjs/toolkit";

import authQuery from "./authen/services";
import dashboardQuery from "./dashboard/services";
import productsQuery from "./products/services";

const middlewares = new MiddlewareArray();

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
