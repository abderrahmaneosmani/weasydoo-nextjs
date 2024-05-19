import React from "react";
import Rating, { RatingType } from "../rating/Rating";
import { ProductType } from "./type";

function ProductDetails({ product }: { product: ProductType }) {
  return (
    <div>
      <div className="bg-white p-4 shadow-md rounded-md">
        <div className="relative w-full pb-[56.25%] mb-4">
          <img
            src={product.image}
            alt={product?.title}
            className="absolute inset-0 w-full h-full object-cover border border-gray-300 rounded-md"
          />
        </div>
        <p className="text-lg font-semibold mb-2 line-clamp-1">
          {product?.title}
        </p>
        <p className="text-gray-900 font-bold text-lg mt-3">
          {product?.price} $
        </p>
        <p className="text text-gray-600 mt-2">{product.description}</p>

        <div className="mt-2">
          <Rating rating={product?.rating as RatingType} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
