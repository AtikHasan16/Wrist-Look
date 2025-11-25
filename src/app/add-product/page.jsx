import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
const AddProductPage = async () => {
  const session = await auth();

  if (!session?.user) {
    return redirect("/login");
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">Add Product (Protected)</h1>
    </div>
  );
};

export default AddProductPage;
