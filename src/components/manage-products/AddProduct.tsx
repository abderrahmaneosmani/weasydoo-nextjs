"use client";

import { useMutation } from "@tanstack/react-query";
import React from "react";
import { addProduct } from "../../../services/product-api";
import { ProductType } from "../products/type";

function AddProduct() {
  const [showForm, setShowForm] = React.useState(false);

  const mutationProduct = useMutation({
    mutationFn: async (pr: Omit<ProductType, "id">) => addProduct(pr),
  });

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleAddProduct = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formProduct = new FormData(event?.currentTarget);
    const title = formProduct?.get("title") as string;
    const price = formProduct?.get("price") as string;
    const description = formProduct?.get("description") as string;
    const category = formProduct?.get("category") as string;
    const prod = { title, price: Number(price), category, description };
    mutationProduct.mutate(prod);

    if (mutationProduct.status === "success") {
      setShowForm(false);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <button
        onClick={toggleForm}
        className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Create a new product
      </button>
      {showForm && (
        <form onSubmit={handleAddProduct}>
          <div className="bg-white border border-4 rounded-lg shadow relative m-10">
            <div className="flex items-start justify-between p-5 border-b rounded-t">
              <h3 className="text-xl font-semibold">Add product</h3>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="title"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Title
                  </label>
                  <input
                    required
                    type="text"
                    name="title"
                    id="title"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="title"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="category"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Category
                  </label>
                  <input
                    required
                    type="text"
                    name="category"
                    id="category"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="category"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="price"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="enter a price"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="description"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    description
                  </label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Electronics"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 rounded-b">
              <button
                className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                type="submit"
              >
                Add
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default AddProduct;
