import React from "react";
import { ProductType } from "./type";
import Rating from "../rating/Rating";

function Product({ product }: { product: ProductType }) {
  return (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <div className="bg-white p-4 shadow-md rounded-md">
        <img
          src={product.image}
          alt={product?.title}
          className="h-80 w-72 object-cover rounded-t-xl"
        />
        <p className="text-lg font-semibold mb-2 line-clamp-1">
          {product?.title}
        </p>
        <p className="text-gray-900 font-bold text-lg mt-2">
          {product?.price} $
        </p>
        <p className="text-gray-600 mb-2">{product?.category}</p>
      </div>
    </div>
  );
}

export default Product;
