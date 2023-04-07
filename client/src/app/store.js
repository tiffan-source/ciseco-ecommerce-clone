import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../features/api/apiSlice";
import uploadSlice from "../features/upload/uploadSlice";
import authSlice from "../features/auth/authSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    upload: uploadSlice,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
