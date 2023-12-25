import { ProductForm } from "features/products/components/ProductForm";
import {
  useGetProductByIdQuery,
  useUpdateProductByIdMutation,
} from "features/products/services";
import { Navigate, useParams } from "react-router-dom";
import LoadingIndicator from "shared/components/LoadingIndicator";
import { RoutePath } from "shared/constants/RouteConst";

const ProductUpdateView = () => {
  const { id } = useParams();
  const { data, isSuccess: isSuccessGetProductById } = useGetProductByIdQuery(
    id as string
  );
  console.log("data: ", data);
  const [updateProduct, { isSuccess }] = useUpdateProductByIdMutation();

  const handleUpdateProduct = (formValues: any) => {
    updateProduct({ ...formValues, id });
  };
  return !isSuccess ? (
    <>
      <div className="flex justify-between">
        <div>Update Product</div>
      </div>
      {isSuccessGetProductById ? (
        <ProductForm
          callback={handleUpdateProduct}
          formValues={{ title: data?.title }}
        />
      ) : (
        <LoadingIndicator />
      )}
    </>
  ) : (
    <Navigate to={`/${RoutePath.Products}`} replace={true} />
  );
};

export default ProductUpdateView;
