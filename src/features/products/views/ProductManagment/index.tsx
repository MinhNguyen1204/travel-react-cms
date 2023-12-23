import { useGetProductsQuery } from 'features/products/services';
import LoadingIndicator from 'shared/components/LoadingIndicator';
import './style.scss';

const ProductManagement = () => {
  const { data, isLoading } = useGetProductsQuery();

  return <div className="">Products</div>;
};

export default ProductManagement;
