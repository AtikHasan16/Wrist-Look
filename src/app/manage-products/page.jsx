import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getAllWatches } from "@/lib/getAllWatches";
import ManageProductsClient from "@/components/ManageProductsClient";

export const metadata = {
  title: "Manage Products | WristLook",
  description: "Manage your watch inventory",
};

const ManageProductsPage = async () => {
  const session = await auth();

  if (!session?.user) {
    return redirect("/login");
  }

  const products = await getAllWatches();

  return (
    <div className="min-h-screen bg-base-100">
      <ManageProductsClient initialProducts={products} />
    </div>
  );
};

export default ManageProductsPage;
