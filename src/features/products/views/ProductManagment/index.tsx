import { useEffect } from "react";
import {
  useDeleteProductByIdMutation,
  useGetProductsQuery,
} from "features/products/services";
import LoadingIndicator from "shared/components/LoadingIndicator";
import TableComponent from "shared/components/TableComponent";

import "./style.scss";

const ProductManagement = () => {
  //   const { data, isLoading } = useGetProductsQuery();
  const [deleteProductById] = useDeleteProductByIdMutation();
  // useEffect(() => {
  //   console.log("isLoading: ", isLoading);
  //   console.log("data: ", data);
  // }, [isLoading]);

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
  return (
    <>
      <div className="">Products Page</div>
      <TableComponent
        heads={heads}
        // rows={data.products}
        useQuery={useGetProductsQuery}
        actions={[
          { name: "Edit", callback: () => void 0 },
          {
            name: "Delete",
            callback: (product) => {
              deleteProductById(product.id);
            },
          },
        ]}
      />
    </>
  );
};

export default ProductManagement;
