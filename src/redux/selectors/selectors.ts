import { createSelector } from "@reduxjs/toolkit";
import { type RootState } from "../store";

export const filteredProductsSelector = createSelector(
  [
    (state: RootState) => {
      const queries = state.productsApi.queries as any;
      for (const key in queries) {
        if (key.startsWith("getProducts")) {
          return queries[key]?.data || [];
        }
      }
      return [];
    },
    (state: RootState) => state.productsUI,
  ],
  (products: any[], ui) => {
    return products
      .filter((p: any) =>
        p.title.toLowerCase().includes(ui.search.toLowerCase())
      )
      .filter((p: any) => ui.category === "all" || p.category === ui.category)
      .sort((a: any, b: any) =>
        ui.sort === "asc" ? a.price - b.price : b.price - a.price
      );
  }
);
