import { NextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import AddProduct from "@/components/manage-products/AddProduct";
import EditProduct from "@/components/manage-products/EditProduct";
import React from "react";
import { getServerSession } from "next-auth";
import { getProducts } from "../page";
import { redirect } from "next/navigation";

async function page() {
  const session = await getServerSession(NextAuthOptions);
  const products = await getProducts();
  const isAdmin = session?.user?.role === "admin";
  if (session === null) {
    redirect("/auth/login");
  }

  return (
    <div className="w-full  py-20 mx-auto  px-20">
      <p className="text: text-blue-500 text-lg text-center">
        Manage your products
      </p>
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
