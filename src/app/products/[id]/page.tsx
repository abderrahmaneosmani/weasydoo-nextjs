import Product from "@/components/products/Product";
import ProductDetails from "@/components/products/ProductDetails";
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
    <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg mt-20">
      <ProductDetails product={product} />
    </div>
  );
}

export default page;
