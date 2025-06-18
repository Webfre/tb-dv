import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../api/baseApi";
import themeReducer from "./themeSlice";
import uiReducer from "./uiSlice";
import accessReducer from "./accessSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    ui: uiReducer,
    access: accessReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
