import { AnyAction } from "redux";

import { PayloadAction } from "@reduxjs/toolkit";

const isPending = (action: AnyAction): action is PayloadAction<any> =>
  action.type.endsWith("/pending");
const isFulfilled = (action: AnyAction): action is PayloadAction<any> =>
  action.type.endsWith("/fulfilled");
const isRejected = (action: AnyAction): action is PayloadAction<any> =>
  action.type.endsWith("/rejected");

export { isFulfilled, isPending, isRejected };
