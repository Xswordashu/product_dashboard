import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./services/productsApi";
import favoritesReducer from "./slices/Favorite/favoriteSlice";
import productsReducer from "./slices/Product/productsSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    favorites: favoritesReducer,
    productsUI: productsReducer,
  },
  middleware: (getDefault) => getDefault().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
