import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
const ManageProductsPage = async () => {
  const session = await auth();

  if (!session?.user) {
    return redirect("/login");
  }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">Manage Products (Protected)</h1>
    </div>
  );
};

export default ManageProductsPage;
