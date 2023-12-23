import PublicLayout from "layouts/PublicLayout";
import { Navigate } from "react-router-dom";
import { RoutePath } from "shared/constants/RouteConst";

import LoginView from "./views/Login";
import RegisterView from "./views/Register";

export const AuthRoutes = [
  {
    path: RoutePath.Auth,
    element: <PublicLayout />,
    children: [
      {
        exact: true,
        path: "",
        element: <Navigate to={RoutePath.Login} replace={true} />,
      },
      {
        path: RoutePath.Login,
        element: <LoginView />,
      },

      {
        path: RoutePath.Register,
        element: <RegisterView />,
      },
    ],
  },
];

export * from "./storage";
