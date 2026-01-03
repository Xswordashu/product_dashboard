import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://fakestoreapi.com/products", () => {
    return HttpResponse.json([
      { id: 1, title: "Laptop", category: "electronics", price: 1000 },
      { id: 2, title: "Phone", category: "electronics", price: 500 },
    ]);
  }),
];

// https://fakestoreapi.com/products