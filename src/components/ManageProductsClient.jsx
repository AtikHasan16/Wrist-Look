"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { BiTrash, BiShow } from "react-icons/bi";
import Swal from "sweetalert2";

const ManageProductsClient = ({ initialProducts }) => {
  const router = useRouter();
  const [products, setProducts] = useState(initialProducts);
  const [loading, setLoading] = useState(false);

  const handleDelete = async (productId, productName) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: `Do you want to delete "${productName}"? This action cannot be undone!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (!result.isConfirmed) return;

    setLoading(true);
    try {
      await axios.delete(
        `https://wristlook-sr.vercel.app/watches/${productId}`
      );

      // Update local state to remove deleted product
      setProducts(products.filter((p) => p._id !== productId));

      Swal.fire({
        title: "Deleted!",
        text: "Product has been deleted successfully.",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });

      toast.success("Product deleted successfully!");
    } catch (error) {
      console.error("Error deleting product:", error);

      Swal.fire({
        title: "Error!",
        text: error.response?.data?.message || "Failed to delete product",
        icon: "error",
      });

      toast.error(error.response?.data?.message || "Failed to delete product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Manage Products</h1>
          <p className="text-base-content/70">
            Total Products: {products.length}
          </p>
        </div>
        <Link href="/add-product" className="btn btn-primary">
          Add New Product
        </Link>
      </div>

      {/* Products Table - Desktop */}
      <div className="hidden lg:block overflow-x-auto bg-base-200 rounded-box shadow-lg">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                </td>
                <td>
                  <div className="font-semibold">{product.name}</div>
                </td>
                <td>{product.brand}</td>
                <td>
                  <span className="badge badge-primary">
                    {product.category}
                  </span>
                </td>
                <td className="font-bold text-primary">${product.price}</td>
                <td>
                  <span
                    className={`badge ${
                      product.inStock ? "badge-success" : "badge-error"
                    }`}
                  >
                    {product.inStock
                      ? `${product.stock} in stock`
                      : "Out of stock"}
                  </span>
                </td>
                <td>
                  <div className="flex gap-2">
                    <Link
                      href={`/watches/${product._id}`}
                      className="btn btn-sm btn-ghost"
                      title="View Details"
                    >
                      <BiShow className="w-5 h-5" />
                    </Link>
                    <button
                      onClick={() => handleDelete(product._id, product.name)}
                      className="btn btn-sm btn-ghost text-error"
                      disabled={loading}
                      title="Delete Product"
                    >
                      <BiTrash className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Products Grid - Mobile/Tablet */}
      <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <div key={product._id} className="card bg-base-200 shadow-xl">
            <figure className="relative h-48">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p className="text-sm text-base-content/70">{product.brand}</p>
              <div className="flex gap-2 my-2">
                <span className="badge badge-primary">{product.category}</span>
                <span
                  className={`badge ${
                    product.inStock ? "badge-success" : "badge-error"
                  }`}
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>
              <p className="text-2xl font-bold text-primary">
                ${product.price}
              </p>
              <div className="card-actions justify-end mt-4">
                <Link
                  href={`/watches/${product._id}`}
                  className="btn btn-sm btn-primary gap-2"
                >
                  <BiShow className="w-4 h-4" />
                  View
                </Link>
                <button
                  onClick={() => handleDelete(product._id, product.name)}
                  className="btn btn-sm btn-error gap-2"
                  disabled={loading}
                >
                  <BiTrash className="w-4 h-4" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {products.length === 0 && (
        <div className="text-center py-20">
          <h3 className="text-2xl font-bold mb-2">No products found</h3>
          <p className="text-base-content/70 mb-6">
            Start by adding your first product
          </p>
          <Link href="/add-product" className="btn btn-primary">
            Add Product
          </Link>
        </div>
      )}
    </div>
  );
};

export default ManageProductsClient;
