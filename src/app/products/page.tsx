/* eslint-disable @next/next/no-img-element */
import Products from "@/components/products";
import React from "react";

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
async function page() {
  const products = await getData();

  return (
    <div className="flex flex justify-center items-start flex">
      <Products products={products} />
    </div>
  );
}

export default page;
