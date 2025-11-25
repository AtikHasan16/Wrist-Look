import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import AddProductForm from "@/components/AddProductForm";

export const metadata = {
  title: "Add Product | WristLook",
  description: "Add a new watch to the collection",
};

const AddProductPage = async () => {
  const session = await auth();

  if (!session?.user) {
    return redirect("/login");
  }

  return (
    <div className="min-h-screen bg-base-100 py-16">
      <div className="container mx-auto px-4">
        <AddProductForm />
      </div>
    </div>
  );
};

export default AddProductPage;
