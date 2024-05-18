"use client";

import React from "react";
import { ProductType } from "../products/type";

function EditProduct({ product }: { product: ProductType }) {
  const [showForm, setShowForm] = React.useState(false);
  const [formData, setFormData] = React.useState([]);

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("change", event.target.value);
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleEdit = () => {
    console.log("Updated product:", formData);
  };

  return (
    <div>
      <button
        onClick={toggleForm}
        className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Edit
      </button>
      {showForm && (
        <form onSubmit={handleEdit}>
          <div className="bg-white border border-4 rounded-lg shadow relative m-10">
            <div className="flex items-start justify-between p-5 border-b rounded-t">
              <h3 className="text-xl font-semibold">Edit product</h3>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="category"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Title
                  </label>
                  <textarea
                    onChange={(e: any) => handleChange(e)}
                    name="title"
                    id="title"
                    rows={4}
                    cols={50}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Electronics"
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
                    onChange={handleChange}
                    type="text"
                    name="category"
                    id="category"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="category"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="category"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    price
                  </label>
                  <input
                    onChange={(e: any) => handleChange(e)}
                    type="text"
                    name="price"
                    id="price"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="enter a price"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="category"
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    description
                  </label>
                  <input
                    onChange={handleChange}
                    value={product.description}
                    type="text"
                    name="description"
                    id="description"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Electronics"
                  />
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 rounded-b">
              <button
                className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                type="submit"
              >
                Edit
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default EditProduct;
