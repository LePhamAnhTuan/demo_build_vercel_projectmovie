import { configureStore } from "@reduxjs/toolkit";
import nguoiDungSlices from "./slices/nguoiDungSlices";
import loadingSlices from "./slices/loadingSlices";
export const store = configureStore({
  reducer: {
    nguoiDung: nguoiDungSlices,
    loading: loadingSlices,
  },
});
