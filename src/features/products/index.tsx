import { UserRole } from 'features/authen/constants';
import PrivateLayout from 'layouts/PrivateLayout';
import ProtectedRoute from 'shared/components/ProtectedRoute';
import { RoutePath } from 'shared/constants/RouteConst';
import ProductManagementView from './views/ProductManagment';

export const ProductsRoutes = [
  {
    path: RoutePath.Products,
    element: <PrivateLayout />,
    children: [
      {
        path: RoutePath.Root,
        element: (
          <ProtectedRoute roles={[UserRole.ADMIN]}>
            <ProductManagementView />
          </ProtectedRoute>
        ),
      },
    ],
  },
];
