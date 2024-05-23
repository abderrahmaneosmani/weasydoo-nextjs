"use client";

import React, { useState } from "react";
import { ProductType } from "../products/type";
import { useMutation } from "@tanstack/react-query";
import { deleteProduct, updateProduct } from "../../../services/product-api";

type Props = {
  products: ProductType[];
  isAdmin: boolean;
};

function EditableTableProduct({ products, isAdmin }: Props) {
  const [editingRowId, setEditingRowId] = useState<number | null>(null);

  const mutationUpdateProduct = useMutation({
    mutationFn: async (pr: ProductType) => updateProduct(pr as any),
    onSuccess: () => {
      setEditingRowId(null);
    },
  });
  const mutationDeleteProduct = useMutation({
    mutationFn: async (id: number) => deleteProduct(id),
  });

  const [dataProducts, setDataProducts] = useState(products);
  const headers = [
    "ID",
    "Title",
    "Image",
    "Description",
    "Category",
    "Price",
    "Rate",
    "Count",
    "Actions",
  ];

  const handleEditClickProduct = (id: number) => {
    setEditingRowId(id);
  };

  const handleChangeProduct = (
    id: number,
    field: string,
    value: string | number
  ) => {
    setDataProducts((prevData: any) =>
      prevData.map((row: ProductType) =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );
  };

  const handleDeleteProduct = (id: number) => {
    mutationDeleteProduct.mutate(id);
    if (mutationDeleteProduct.status === "success") {
      setDataProducts((prevData: any) =>
        prevData.filter((row: ProductType) => row.id !== id)
      );
    }
  };

  const handleUpdateProductById = (pr: ProductType) => {
    mutationUpdateProduct.mutate(pr);
    console.log("mutation", mutationDeleteProduct.data);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto"></div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100 border-b">
            {headers.map((header) => (
              <th key={header} className="py-2 px-4 text-left text-gray-600">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataProducts.map((row: ProductType) => (
            <tr key={row.id} className="border-b">
              <td className="py-2 px-4">{row.id}</td>
              <td className="py-2 px-4">
                {editingRowId === row.id ? (
                  <input
                    type="text"
                    className="border rounded py-1 px-2 w-full"
                    value={row.title}
                    onChange={(e) =>
                      handleChangeProduct(row.id, "title", e.target.value)
                    }
                  />
                ) : (
                  row.title
                )}
              </td>
              <td className="py-2 px-4">
                {editingRowId === row.id ? (
                  <input
                    type="text"
                    className="border rounded py-1 px-2"
                    value={row.description}
                    onChange={(e) =>
                      handleChangeProduct(row.id, "image", e.target.value)
                    }
                  />
                ) : (
                  <img
                    src={row.image}
                    alt={row.title}
                    width={200}
                    height={200}
                  />
                )}
              </td>
              <td className="py-2 px-4">
                {editingRowId === row.id ? (
                  <input
                    type="text"
                    className="border rounded py-1 px-2"
                    value={row.description}
                    onChange={(e) =>
                      handleChangeProduct(row.id, "description", e.target.value)
                    }
                  />
                ) : (
                  row.description
                )}
              </td>
              <td className="py-2 px-4">
                {editingRowId === row.id ? (
                  <input
                    type="text"
                    className="border rounded py-1 px-2"
                    value={row.category}
                    onChange={(e) =>
                      handleChangeProduct(row.id, "category", e.target.value)
                    }
                  />
                ) : (
                  row.category
                )}
              </td>

              <td className="py-2 px-4">
                {editingRowId === row.id ? (
                  <input
                    type="number"
                    className="border rounded py-1 px-2"
                    value={row.price}
                    onChange={(e) =>
                      handleChangeProduct(row.id, "price", e.target.value)
                    }
                  />
                ) : (
                  row.price
                )}
              </td>
              <td className="py-2 px-4">
                {editingRowId === row.id ? (
                  <input
                    type="number"
                    className="border rounded py-1 px-2"
                    value={row.rating?.rate}
                    onChange={(e) =>
                      handleChangeProduct(row.id, "rate", e.target.value)
                    }
                  />
                ) : (
                  row.rating?.rate
                )}
              </td>
              <td className="py-2 px-4">
                {editingRowId === row.id ? (
                  <input
                    type="number"
                    className="border rounded py-1 px-2"
                    value={row.rating?.count}
                    onChange={(e) =>
                      handleChangeProduct(row.id, "price", e.target.value)
                    }
                  />
                ) : (
                  row.rating?.count
                )}
              </td>
              {isAdmin && (
                <td className="py-2 px-4 space-x-2 flex ">
                  {editingRowId === row.id ? (
                    <button
                      className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                      onClick={() => handleUpdateProductById(row)}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      className="bg-gray-500 text-white py-1 px-3 rounded hover:bg-gray-600"
                      onClick={() => handleEditClickProduct(row?.id as number)}
                    >
                      Edit
                    </button>
                  )}
                  <button
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                    onClick={() => handleDeleteProduct(row.id as number)}
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EditableTableProduct;
