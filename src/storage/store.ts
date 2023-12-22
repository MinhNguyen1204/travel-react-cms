import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers } from "redux";
import logger from "redux-logger";
import { AppMiddleware, AppQueries, AppSlices } from "features";
import loader from "storage/slices/loader";
import { rtkQueryErrorLogger } from "shared/middlewares/errorToast";

export const rootReducer = combineReducers({
  // RTK slices
  loader,
  // App slices
  ...AppSlices,
  // RTK queries
  ...AppQueries
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      logger,
      rtkQueryErrorLogger,
      ...AppMiddleware
    ),
});

export type AppState = ReturnType<typeof rootReducer>;
export const userAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export default store;
