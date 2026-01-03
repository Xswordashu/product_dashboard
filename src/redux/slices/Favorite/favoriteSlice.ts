import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [] as number[],
  reducers: {
    toggleFavorite(state, action: PayloadAction<number>) {
      const id = action.payload;
      return state.includes(id)
        ? state.filter((i) => i !== id)
        : [...state, id];
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
