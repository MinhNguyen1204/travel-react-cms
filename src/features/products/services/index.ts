import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productsQuery = createApi({
  reducerPath: "productAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query<any, string>({
      query: (page: string) =>
        `products?limit=10&skip=${
          (Number(page) - 1) * 10
        }&select=title,price,brand,category`,
      transformResponse: (response: { products: any }) => {
        console.log("response.: ", response);
        return response.products;
      },
      providesTags: ["Products"],
    }),
    createProduct: builder.mutation<any, { title: string }>({
      query: (credentials) => ({
        url: "products/add",
        method: "POST",
        body: credentials,
      }),
    }),
    getProductById: builder.query<any, string>({
      query: (id) => `products/${id}`,
    }),
    deleteProductById: builder.mutation<any, string>({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
    updateProductById: builder.mutation<any, { id: string; title: string }>({
      query: ({ title, id }) => ({
        url: `products/${id}`,
        method: "PUT",
        body: { title },
      }),
    }),
  }),
});

export default productsQuery;

export const { useGetProductsQuery, useDeleteProductByIdMutation } =
  productsQuery;
