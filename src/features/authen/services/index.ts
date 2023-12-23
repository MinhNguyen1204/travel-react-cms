import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface UserInfo {
  email: string
  password: string
}

const authQuery = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://reqres.in/api',
  }),
  endpoints: (builder) => ({
    login: builder.mutation<{ token: string }, Partial<UserInfo>>({
      query: (credentials) => ({
        url: `login`,
        method: 'POST',
        body: credentials,
      })
    }),
    register: builder.mutation<UserInfo, UserInfo>({
      query: (credentials) => ({
        url: `register`,
        method: 'POST',
        body: credentials,
      })
    })
  }),
});

export default authQuery;

export const {
  useLoginMutation,
  useRegisterMutation
} = authQuery;
