import { describe, it, expect } from "vitest";
import reducer, { toggleFavorite } from "./favoriteSlice";

describe("favorites slice", () => {
  it("filter state test to check item is added in the state", () => {
    const state = reducer(
      undefined,
      //   { search: "", category: "all", sort: "asc" },
      toggleFavorite(1)
    );
    expect(state).toContain(1);
  });

  it("filter state test to check item is removed from the state", () => {
    const initialState = [1, 2, 3];
    const state = reducer(initialState, toggleFavorite(2));
    expect(state).not.toContain(2);
  });
});
