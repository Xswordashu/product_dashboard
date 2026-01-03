import { describe, it, expect } from "vitest";
import reducer, { setCategory, setSearch } from "./productsSlice";

describe("products slice", () => {
  it("search state test", () => {
    const state = reducer(
      undefined,
      //   { search: "", category: "all", sort: "asc" },
      setSearch("laptop")
    );
    expect(state.search).toBe("laptop");
  });

  it("filter state test", () => {
    const state = reducer(undefined, setCategory("electronics"));
    expect(state.category).toBe("electronics");
  });
});
