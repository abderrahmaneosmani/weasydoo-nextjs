import Product from "@/components/products/Product";
import React from "react";
async function getProductById(id: number) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}
async function page({ params }: any) {
  const product = await getProductById(params.id);

  return (
    <div className="flex justify-center items-center  mt-40">
      <Product product={product} />
    </div>
  );
}

export default page;
