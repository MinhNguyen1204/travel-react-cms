import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DummyUser } from 'shared/constants/UserList';

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
    }),
    me: builder.query<any, { token: string }>({

      query: (body) => `/${body.token}`,
      transformResponse(baseQueryReturnValue, meta, arg) {
        const token = localStorage.getItem("token") || "";
        return DummyUser[token];
      },
    })
  }),
});

export default authQuery;

export const {
  useLoginMutation,
  useRegisterMutation,
  useMeQuery,
} = authQuery;
