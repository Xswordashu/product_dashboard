
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import productsReducer from "../redux/slices/Product/productsSlice";
import favoritesReducer from "../redux/slices/Favorite/favoriteSlice";
import { productsApi } from "../redux/services/productsApi";

export function renderWithStore(
  ui: React.ReactNode,
  { route = "/" } = {}
) {
  const store = configureStore({
    reducer: {
      [productsApi.reducerPath]: productsApi.reducer,
      productsUI: productsReducer,
      favorites: favoritesReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsApi.middleware),
  });

  return {
    store,
    ...render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>
          {ui}
        </MemoryRouter>
      </Provider>
    ),
  };
}
