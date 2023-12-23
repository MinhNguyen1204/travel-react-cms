import { UserRole } from 'features/authen/constants';
import PrivateLayout from 'layouts/PrivateLayout';
import ProtectedRoute from 'shared/components/ProtectedRoute';
import { RoutePath } from 'shared/constants/RouteConst';
import DashboardView from './views/DashboardView';

export const DashboardRoutes = [
  {
    path: RoutePath.Root,
    element: <PrivateLayout />,
    children: [
      {
        index: true,
        path: RoutePath.Root,
        element: (
          <ProtectedRoute roles={[UserRole.ADMIN]}>
            <DashboardView />
          </ProtectedRoute>
        ),
      },
      {
        path: RoutePath.Dashboard,
        element: (
          <ProtectedRoute roles={[UserRole.ADMIN]}>
            <DashboardView />
          </ProtectedRoute>
        ),
      },
    ],
  },
];
