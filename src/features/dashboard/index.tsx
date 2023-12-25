import AnalyticView from "features/Analytic";
import PrivateLayout from "layouts/PrivateLayout";
import { RouteObject } from "react-router-dom";
import ProtectedRoute from "shared/components/ProtectedRoute";
import {
  DashboardPath,
  RoutePath,
  RouteRoles,
} from "shared/constants/RouteConst";

import DashboardView from "./views/DashboardView";

export const DashboardRoutes: RouteObject[] = [
  {
    path: RoutePath.Dashboard,
    element: <ProtectedRoute />,
    children: [
      {
        path: DashboardPath.Main,
        element: (
          <PrivateLayout roles={RouteRoles[RoutePath.Dashboard]}>
            <DashboardView />
          </PrivateLayout>
        ),
      },
      {
        path: DashboardPath.Analytic,
        element: (
          <PrivateLayout roles={RouteRoles[RoutePath.Dashboard]}>
            <AnalyticView />
          </PrivateLayout>
        ),
      },
    ],
  },
];
