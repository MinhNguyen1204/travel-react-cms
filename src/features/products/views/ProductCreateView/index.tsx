import { ProductForm } from "features/products/components/ProductForm";
import { useCreateProductMutation } from "features/products/services";
import { Navigate } from "react-router-dom";
import { RoutePath } from "shared/constants/RouteConst";

const ProductCreateView = () => {
  const [createProduct, { isSuccess }] = useCreateProductMutation();
  return !isSuccess ? (
    <>
      <div className="flex justify-between">
        <div>Create Product</div>
      </div>
      <ProductForm callback={createProduct} />
    </>
  ) : (
    <Navigate to={`/${RoutePath.Products}`} replace={true} />
  );
};

export default ProductCreateView;
