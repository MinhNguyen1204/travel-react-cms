import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productsQuery = createApi({
  reducerPath: "productAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<any, void>({
      query: () => "products",
    }),
    createProduct: builder.mutation<{ title: string }, Partial<any>>({
      query: (credentials) => ({
        url: `products/add`,
        method: "POST",
        body: credentials,
      }),
    }),
    getProductById: builder.query<string, void>({
      query: (id) => `products/${id}`,
    }),
    deleteProductById: builder.mutation<string, Partial<any>>({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
    }),
    updateProductById: builder.mutation<
      { id: string; title: string },
      Partial<any>
    >({
      query: ({ title, id }) => ({
        url: `products/${id}`,
        method: "PUT",
        body: { title },
      }),
    }),
  }),
});

export default productsQuery;

export const { useGetProductsQuery } = productsQuery;
