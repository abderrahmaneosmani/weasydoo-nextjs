/* eslint-disable @next/next/no-img-element */
import Products from "@/components/products";
import React from "react";
import { fetchCategories, fetchProducts } from "../../../services/product-api";

async function getCategories() {}
async function page() {
  const products = await fetchProducts();
  const categories = await fetchCategories();

  return <Products products={products} categories={categories} />;
}

export default page;
