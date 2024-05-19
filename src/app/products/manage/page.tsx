import { NextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import AddProduct from "@/components/manage-products/AddProduct";
import EditProduct from "@/components/manage-products/EditProduct";
import ListProducts from "@/components/manage-products/ListProduct";
import React from "react";
import { getServerSession } from "next-auth";
async function page() {
  const session = await getServerSession(NextAuthOptions);

  console.log("session wow", session);

  return (
    <div className=" py-20 ">
      <div className="text-2xl md:text-3xl font-bold">
        {session?.user?.role === "admin" && <AddProduct />}
      </div>
      <div className="grid grid-cols-2 ">
        <ListProducts />
      </div>
    </div>
  );
}

export default page;
