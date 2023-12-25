import { Link } from "react-router-dom";

interface IProps {
  data: string[];
}
const BreadCrumb = ({ data }: IProps) => {
  if (!data.length) return null;

  return data.map((item, idx, self) => {
    const isLast = idx == self.length - 1;
    return (
      <div className="flex items-center text-gray-500" key={item}>
        <span>{item.capitalize()}</span>
        {isLast ? null : <span className="mx-2 text-sm">/</span>}
      </div>
    );
  });
};

export default BreadCrumb;
