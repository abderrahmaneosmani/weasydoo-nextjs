import React from "react";
import { ProductType } from "./type";

function Product({ product }: any) {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-4 shadow-md rounded-md">
        <div className="relative w-full pb-[56.25%] mb-4">
          <img
            src={product.image}
            alt={product?.title}
            className="absolute inset-0 w-full h-full object-cover border border-gray-300 rounded-md"
          />
        </div>
        <h2 className="text-lg font-semibold mb-2 line-clamp-1">
          {product?.title}
        </h2>
        <p className="text-gray-600 line-clamp-3">{product?.description}</p>
        <p className="text-gray-800 font-semibold mt-2">{product?.price}</p>
      </div>
    </div>
  );
}

export default Product;
