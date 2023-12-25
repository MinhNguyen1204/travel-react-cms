import { MiddlewareArray } from "@reduxjs/toolkit";

import authQuery from "./authen/services";
import dashboardQuery from "./dashboard/services";
import productsQuery from "./products/services";
import { ProductsSlice } from "./products/storage";
import { authSlice } from "./authen";

const middlewares = new MiddlewareArray();

export const AppSlices = {
  // Add more module slices
  auth: authSlice,
  products: ProductsSlice,
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
