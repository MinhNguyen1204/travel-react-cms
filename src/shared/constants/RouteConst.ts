import { UserRole } from "features/authen/constants";

export enum RoutePath {
  Root = "",
  Auth = "auth",
  Login = "login",
  Register = "register",
  Dashboard = "dashboard",
  Products = "products",
}

export enum DashboardPath {
  Main = "main",
  Analytic = "Analytic",
}
export const RouteRoles: { [key: string]: UserRole[] } = {
  "/dashboard/main": [UserRole.ADMIN],
  "/products": [UserRole.USER],
};
