import {
  isRejectedWithValue,
  Middleware,
  MiddlewareAPI,
} from "@reduxjs/toolkit";

const openNotification = (message: string) => {};

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      console.warn("We got a rejected action!", action);
      openNotification(action.payload.data.error);
    }
    return next(action);
  };
