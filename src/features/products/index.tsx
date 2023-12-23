import { UserRole } from "features/authen/constants";
import PrivateLayout from "layouts/PrivateLayout";
import ProtectedRoute from "shared/components/ProtectedRoute";
import { RoutePath, RouteRoles } from "shared/constants/RouteConst";

import ProductManagementView from "./views/ProductManagment";

export const ProductsRoutes = [
  {
    path: RoutePath.Products,
    element: <ProtectedRoute />,
    children: [
      {
        path: RoutePath.Root,
        element: (
          <PrivateLayout roles={RouteRoles[RoutePath.Products]}>
            <ProductManagementView />
          </PrivateLayout>
        ),
      },
    ],
  },
];
