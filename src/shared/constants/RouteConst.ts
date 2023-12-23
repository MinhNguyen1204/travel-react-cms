import { UserRole } from "features/auth/constants";

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
}
