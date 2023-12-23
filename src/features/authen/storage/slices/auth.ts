import { UserRole } from "features/authen/constants";
import authQuery from "features/authen/services";

import { createSlice } from "@reduxjs/toolkit";

const initialState: AuthType = {
  token: null,
  isAuthenticated: false,
  user: null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      localStorage.removeItem("token");
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authQuery.endpoints.me.matchFulfilled,
      (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
      }
    );
    builder.addMatcher(
      authQuery.endpoints.login.matchFulfilled,
      (state, action) => {
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.user = { ...action.payload, role: UserRole.ADMIN }; // Fake role
        localStorage.setItem("token", action.payload.token);
      }
    );
  },
});

export const { logout } = slice.actions;
export const authSlice = slice.reducer;
