import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { renderWithStore } from "../../test/renderWithStore";
import ProductsPage from "../../pages/ProductsPage/ProductsPage";

it("filters products by category", async () => {
  renderWithStore(<ProductsPage />);

  // wait for products to load
  await screen.findByText("Laptop");



  const categorySelect = screen.getAllByRole("combobox")[0];

 
  await userEvent.selectOptions(categorySelect, "electronics");

  expect(screen.getByText("Laptop")).toBeInTheDocument();
  expect(screen.getByText("Phone")).toBeInTheDocument();

   
   expect(screen.queryByText("Necklace")).not.toBeInTheDocument();
});
