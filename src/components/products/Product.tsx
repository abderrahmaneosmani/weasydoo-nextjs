import React from "react";
import { ProductType } from "./type";

function Product({ product }: any) {
  return (
    <div
      className="flex items-center justify-center w-[300px] h-[400px] mt-20"
      key={product?.id}
    >
      <div className="bg-white p-4 shadow-md rounded-md">
        <img
          src={product.image}
          alt="Product 1"
          className="appearance-none border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
        />
        <h2 className="text-lg font-semibold mb-2">{product?.title}</h2>
        <p className="text-gray-600">{product?.description}</p>
        <p className="text-gray-800 font-semibold mt-2">{product?.price}</p>
      </div>
    </div>
  );
}

export default Product;
