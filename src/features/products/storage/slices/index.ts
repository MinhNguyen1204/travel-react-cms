import productsQuery from "features/products/services";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RoutePath } from "shared/constants/RouteConst";

import { createSlice, isAnyOf } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "products",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      productsQuery.endpoints.updateProductById.matchFulfilled,
      (state, action) => {
        toast.success("Updated Success");
      }
    );
    builder.addMatcher(
      productsQuery.endpoints.createProduct.matchFulfilled,
      (state, action) => {
        toast.success("Created Success");
      }
    );
    builder.addMatcher(
      productsQuery.endpoints.deleteProductById.matchFulfilled,
      (state, action) => {
        toast.success("Deleted Success");
      }
    );
  },
});

export const ProductsSlice = slice.reducer;
