import { screen } from "@testing-library/react";
import ProductsPage from "./ProductsPage";
import { renderWithStore } from "../../test/renderWithStore";
// import { renderWithStore } from "@/test/renderWithStore";

describe("ProductsPage", () => {
  it("renders products from API", async () => {
    renderWithStore(<ProductsPage />);
   
     expect(await screen.findByText("Laptop")).toBeInTheDocument();
  
  });
});
