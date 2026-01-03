

import { createSelector } from "@reduxjs/toolkit";
import { productsApi } from "../services/productsApi";
import type { RootState } from "../store";

const selectProductsResult =
  productsApi.endpoints.getProducts.select();

const selectProductsData = createSelector(
  selectProductsResult,
  (productsResult) => productsResult.data ?? []
);

export const filteredProductsSelector = createSelector(
  [selectProductsData, (state: RootState) => state.productsUI],
  (products, ui) => {
    return [...products] 
      .filter((p) =>
        p.title.toLowerCase().includes(ui.search.toLowerCase())
      )
      .filter(
        (p) => ui.category === "all" || p.category === ui.category
      )
      .sort((a, b) =>
        ui.sort === "asc" ? a.price - b.price : b.price - a.price
      );
  }
);

