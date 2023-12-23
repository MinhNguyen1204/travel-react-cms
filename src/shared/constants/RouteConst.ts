import { UserRole } from "features/authen/constants";

export enum RoutePath {
  Root = '',
  Auth = 'auth',
  Login = 'login',
  Register = 'register',
  Dashboard = 'dashboard',
  Products = 'products',
}

export const RouteRoles = {
  home: [UserRole.ADMIN],
  blog: [UserRole.ADMIN],
  dashboard: [UserRole.ADMIN],
  products: [UserRole.ADMIN],
}
