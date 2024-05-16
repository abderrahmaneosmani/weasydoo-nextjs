"use client";
import React from "react";

function Products({ products }: any) {
  const [dataProducts, setDataProducts] = React.useState(products);

  const handleSearch = (queryProduct: string) => {
    queryProduct = queryProduct.toLowerCase();

    let results: any = [];

    if (queryProduct.length > 0) {
      dataProducts.forEach((product: any) => {
        const myResult = product?.title?.toLowerCase().search(queryProduct);
        if (myResult !== -1) {
          results.push(product);
          setDataProducts(results);
        }
      });
    }
    if (queryProduct.length === 0) {
      setDataProducts(products);
    }
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <input
          type="text"
          onChange={(e) => handleSearch(e?.target?.value)}
          placeholder="search a product"
          className="appearance-none border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {dataProducts.map((product: any) => {
            return (
              <div key={product?.id}>
                <div className="bg-white p-4 shadow-md rounded-md">
                  <img
                    src={product.image}
                    alt="Product 1"
                    className="appearance-none border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
                  />
                  <h2 className="text-lg font-semibold mb-2">
                    {product?.title}
                  </h2>
                  <p className="text-gray-600">{product?.description}</p>
                  <p className="text-gray-800 font-semibold mt-2">
                    {product?.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
