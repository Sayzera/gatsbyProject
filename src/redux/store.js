import { configureStore } from "@reduxjs/toolkit";
import queryParamsSlice from "./queryParamsSlice";

const store = configureStore({
  reducer: {
    queryParams: queryParamsSlice,
  },
});

export default store;
