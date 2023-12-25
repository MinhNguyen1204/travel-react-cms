import { AuthRoutes } from "features/authen";
import { DashboardRoutes } from "features/dashboard";
import { ProductsRoutes } from "features/products";

export const AppRoutes = [
  // Add more modules
  ...AuthRoutes,
  ...DashboardRoutes,
  ...ProductsRoutes,
];
