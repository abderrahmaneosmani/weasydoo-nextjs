import { NextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import AddProduct from "@/components/manage-products/AddProduct";
import EditProduct from "@/components/manage-products/EditProduct";
import React from "react";
import { getServerSession } from "next-auth";
import Product from "@/components/products/Product";
import { getProducts } from "../page";

async function page() {
  const session = await getServerSession(NextAuthOptions);
  const products = await getProducts();
  const isAdmin = session?.user?.role === "admin";

  return (
    <div className=" py-20 ">
      <div className="text-2xl md:text-3xl font-bold">
        {isAdmin && <AddProduct />}
      </div>
      <div className="grid grid-cols-2 ">
        <EditProduct products={products} isAdmin={isAdmin} />
      </div>
    </div>
  );
}

export default page;
