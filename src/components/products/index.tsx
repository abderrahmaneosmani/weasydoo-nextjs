"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Product from "./Product";
import Dropdown from "../DropDown";

function Products({ products, categories }: any) {
  const [dataProducts, setDataProducts] = React.useState(products);
  const router = useRouter();

  const [categorySelected, setCategorySelect] = React.useState("");

  const handleSelectCategory = (cat: string) => setCategorySelect(cat);
  console.log("select", categorySelected);
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

  const handleNavigateToProductDetails = (id: any) => {
    router.push(`products/${id}`);
  };
  return (
    <div>
      <div className="flex w-full ">
        <input
          type="text"
          onChange={(e) => handleSearch(e?.target?.value)}
          placeholder="search a product"
          className="appearance-none border border-gray-300 rounded-md py-2 px-4 leading-tight focus:outline-none focus:border-blue-500"
        />
        <Dropdown
          categories={categories}
          handleSelect={handleSelectCategory}
          category={categorySelected}
        />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {dataProducts.map((product: any) => {
            return (
              <div
                key={product?.id}
                onClick={() => handleNavigateToProductDetails(product?.id)}
              >
                <Product product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
