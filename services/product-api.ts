import { ProductType } from "@/components/products/type";

export const addProduct = async (product: Omit<ProductType, "id">) => {
  const create_product = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    body: JSON.stringify(product),
  });
  if (create_product.ok) return create_product.json();
};
export const updateProduct = async (product: ProductType) => {
  const update_product = await fetch(
    `https://fakestoreapi.com/products/${product.id}`,
    {
      method: "PUT",
      body: JSON.stringify(product),
    }
  );
  if (update_product.ok) {
    return update_product.json();
  }
};

export const deleteProduct = async (id: number) => {
  const delete_product = await fetch(
    `https://fakestoreapi.com/products/${id}`,
    {
      method: "DELETE",
    }
  );
  if (delete_product.ok) {
    return delete_product.json();
  }
};
