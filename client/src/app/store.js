import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../features/api/apiSlice";
import uploadSlice from "../features/upload/uploadSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    upload: uploadSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
