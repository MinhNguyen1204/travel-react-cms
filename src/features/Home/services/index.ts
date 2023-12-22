import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const homeQuery = createApi({
  reducerPath: 'homeAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<any, void>({
      query: () => `posts`,
    })
  }),
});

export default homeQuery;

export const {
  useGetPostsQuery,
} = homeQuery;

