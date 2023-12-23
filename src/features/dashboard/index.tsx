import { UserRole } from 'features/authen/constants';
import PrivateLayout from 'layouts/PrivateLayout';
import ProtectedRoute from 'shared/components/ProtectedRoute';
import { RoutePath, RouteRoles } from 'shared/constants/RouteConst';
import DashboardView from './views/DashboardView';
import AnalyticView from 'features/Analytic';
import { RouteObject } from 'react-router-dom';


const DashboardMain = "main";
const DashboardAnalytic = "analytic";

export const DashboardRoutes: RouteObject[] = [
  {
    path: RoutePath.Dashboard,
    element: <ProtectedRoute />,
    children: [
      {

        path: DashboardMain,
        element: (
          <PrivateLayout roles={RouteRoles[RoutePath.Dashboard]}>
            <DashboardView />
          </PrivateLayout>
        ),
      },
      {
        path: DashboardAnalytic,
        element: (
          <PrivateLayout roles={RouteRoles[RoutePath.Dashboard]}>
            <AnalyticView />
          </PrivateLayout>
        ),
      },
    ],
  },
];
