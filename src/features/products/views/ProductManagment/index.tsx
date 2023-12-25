import {
  useDeleteProductByIdMutation,
  useGetProductsQuery,
} from "features/products/services";
import { useNavigate } from "react-router-dom";
import TableComponent from "shared/components/TableComponent";
import { RoutePath } from "shared/constants/RouteConst";

import "./style.scss";

const ProductManagement = () => {
  const navigate = useNavigate();
  const [deleteProductById] = useDeleteProductByIdMutation();

  const heads: HeadCell<ProductItem>[] = [
    {
      id: "id",
      label: "ID",
    },
    {
      id: "title",
      label: "Title",
    },
    {
      id: "brand",
      label: "Brand",
    },
    {
      id: "category",
      label: "Category",
    },
    {
      id: "price",
      label: "Price",
    },
  ];

  const onClickCreateProduct = () => {
    navigate(`/${RoutePath.Products}/create`);
  };
  const onClickEditProduct = (item: ProductItem) => {
    navigate(`/${RoutePath.Products}/${item.id}`);
  };
  const onClickDeleteProduct = (item: ProductItem) => {
    deleteProductById(item.id);
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="">Products Page</div>
        <button
          onClick={onClickCreateProduct}
          className="rounded-xl bg-blue-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-blue-600 active:bg-blue-700 ">
          Create Product
        </button>
      </div>
      <TableComponent
        heads={heads}
        // rows={data.products}
        useQuery={useGetProductsQuery}
        actions={[
          { name: "Edit", callback: onClickEditProduct },
          {
            name: "Delete",
            callback: onClickDeleteProduct,
          },
        ]}
      />
    </>
  );
};

export default ProductManagement;
