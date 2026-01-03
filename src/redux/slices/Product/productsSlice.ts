import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ProductsUIState {
  search: string;
  category: string;
  sort: "asc" | "desc";
}

const initialState: ProductsUIState = {
  search: "",
  category: "all",
  sort: "asc",
};

const productsSlice = createSlice({
  name: "productsUI",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    setSort(state, action: PayloadAction<"asc" | "desc">) {
      state.sort = action.payload;
    },
  },
});

export const { setSearch, setCategory, setSort } = productsSlice.actions;
export default productsSlice.reducer;
