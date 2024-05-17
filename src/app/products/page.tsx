/* eslint-disable @next/next/no-img-element */
import Products from "@/components/products";
import React from "react";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

async function getCategories() {
  const res = await fetch("https://fakestoreapi.com/products/categories");

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
}
async function page() {
  const products = await getProducts();
  const categories = await getCategories();

  return <Products products={products} categories={categories} />;
}

export default page;
