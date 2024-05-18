import AddProduct from "@/components/manage-products/AddProduct";
import EditProduct from "@/components/manage-products/EditProduct";
import ListProducts from "@/components/manage-products/ListProduct";
import React from "react";

function page() {
  return (
    <div className=" py-20 ">
      <div className="text-2xl md:text-3xl font-bold">
        Manage Product
        <AddProduct />
      </div>
      <div className="grid grid-cols-2 ">
        <ListProducts />
      </div>
    </div>
  );
}

export default page;
