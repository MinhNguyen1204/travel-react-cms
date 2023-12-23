import { useSelector } from "react-redux";
import { getLoaderState } from "storage/selectors/loaderSelector";

import "./style.scss";

interface IProps {
  loading?: boolean;
}
const LoadingIndicator = ({ loading }: IProps) => {
  const { isLoading } = useSelector(getLoaderState);
  const showLoading = isLoading || loading;

  if (!showLoading) return null;

  return (
    <div className="loader-container">
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingIndicator;
