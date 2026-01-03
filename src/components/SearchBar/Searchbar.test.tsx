import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";

import { renderWithStore } from "../../test/renderWithStore";
import ProductsPage from "../../pages/ProductsPage/ProductsPage";

it("filters products by search", async () => {
  renderWithStore(<ProductsPage />);

  const searchInput = await screen.findByRole("textbox");
  await userEvent.type(searchInput, "lap");

  expect(screen.getByText("Laptop")).toBeInTheDocument();

});
