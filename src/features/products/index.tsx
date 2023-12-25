import PrivateLayout from "layouts/PrivateLayout";
import ProtectedRoute from "shared/components/ProtectedRoute";
import { RoutePath, RouteRoles } from "shared/constants/RouteConst";

import ProductCreateView from "./views/ProductCreateView";
import ProductManagementView from "./views/ProductManagment";
import ProductUpdateView from "./views/ProductUpdateView";

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
      {
        path: "create",
        element: (
          <PrivateLayout roles={RouteRoles[RoutePath.Products]}>
            <ProductCreateView />
          </PrivateLayout>
        ),
      },
      {
        path: ":id",
        element: (
          <PrivateLayout roles={RouteRoles[RoutePath.Products]}>
            <ProductUpdateView />
          </PrivateLayout>
        ),
      },
    ],
  },
];
