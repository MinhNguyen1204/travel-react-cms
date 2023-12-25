import { useForm } from "react-hook-form";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

type ProductFormType = {
  title: string;
};

const schema = yup.object({
  title: yup.string().required("This field is required"),
});

type ProductFormTypeProps = {
  formValues: ProductFormType;
  callback: (values: ProductFormType) => void;
};

export const ProductForm = ({ formValues, callback }: ProductFormTypeProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormType>({
    resolver: yupResolver(schema),
    defaultValues: formValues || { title: "" },
  });

  const onSubmit = (data: ProductFormType) => {
    callback(data);
  };

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Title
        </label>
        <input
          type="text"
          id="title"
          {...register("title")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Please input title"
          required
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Submit
      </button>
    </form>
  );
};
