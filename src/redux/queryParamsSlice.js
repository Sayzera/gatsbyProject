// queryParamsSlice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryParams: [],
  orderBy: null,
  productType: null,
  productSearch: null,
};

const queryParamsSlice = createSlice({
  name: "queryParams",
  initialState,
  reducers: {
    setCategorParams: (state, action) => {
      state.categoryParams = action.payload;
    },

    setOrderBy: (state, action) => {
      state.orderBy = action.payload;
    },

    setProductType: (state, action) => {
      state.productType = action.payload;
    },

    setProductSearch: (state, action) => {
      state.productSearch = action.payload;
    },
  },
});

export const {
  setCategorParams,
  setOrderBy,
  setProductType,
  setProductSearch,
} = queryParamsSlice.actions;
export default queryParamsSlice.reducer;

// Selector
export const selectCategoryParams = (state) => state.queryParams.categoryParams;
export const selectOrderBy = (state) => state.queryParams.orderBy;
export const selectProductType = (state) => state.queryParams.productType;
export const selectProductSearch = (state) => state.queryParams.productSearch;
