import { expect, it } from "vitest";
import { filteredProductsSelector } from "./selectors";
import type { Product } from "../../types/Product";



it("testing selectors output with search filter", ()=>{

    const products = [
        {id:1, title:"Apple iPhone", category:"electronics", price:999},
        {id:2, title:"Samsung Galaxy", category:"electronics", price:899},
        {id:3, title:"Nike Shoes", category:"fashion", price:199},
    ];

    const filtersState = {
        search: "apple",
        category: "all",
        sort: "asc" as "asc" | "desc",
    }

    const result   = filteredProductsSelector.resultFunc(products as Product[], filtersState);
    // console.log(result);
    expect(result).toEqual([{id:1, title:"Apple iPhone", category:"electronics", price:999}]);
})


it("testing selectors output with category filter", ()=>{

    const products = [
        {id:1, title:"Apple iPhone", category:"electronics", price:999},
        {id:2, title:"Samsung Galaxy", category:"electronics", price:899},
        {id:3, title:"Nike Shoes", category:"fashion", price:199},
    ];

    const filtersState = {
        search: "",
        category: "fashion",
        sort: "asc" as "asc" | "desc",
    }

    const result   = filteredProductsSelector.resultFunc(products as Product[], filtersState);
    // console.log("filtered by category:", result);
    expect(result).toEqual([{id:3, title:"Nike Shoes", category:"fashion", price:199}]);
})

it("testing selectors output with sort filter", ()=>{

    const products = [
        {id:1, title:"Apple iPhone", category:"electronics", price:999},
        {id:2, title:"Samsung Galaxy", category:"electronics", price:899},
        {id:3, title:"Nike Shoes", category:"fashion", price:199},
    ];

    const filtersState = {
        search: "",
        category: "all",
        sort: "asc" as "asc" | "desc",
    }

    const result   = filteredProductsSelector.resultFunc(products as Product[], filtersState);
    // console.log("filtered by sort:", result);
    expect(result).toEqual([
        {id:3, title:"Nike Shoes", category:"fashion", price:199},
        {id:2, title:"Samsung Galaxy", category:"electronics", price:899},
        {id:1, title:"Apple iPhone", category:"electronics", price:999},
        
    ]);
})