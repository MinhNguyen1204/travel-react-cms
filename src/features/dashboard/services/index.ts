import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const dashboardQuery = createApi({
  reducerPath: "homeAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<any, void>({
      query: () => `posts`,
    }),
  }),
});

export default dashboardQuery;

export const { useGetPostsQuery } = dashboardQuery;
