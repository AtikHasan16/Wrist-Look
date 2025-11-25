"use client";

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const AddProductForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    description: "",
    price: "",
    category: "",
    image: "",
    stock: "",
    features: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Convert features from comma-separated string to array
      const featuresArray = formData.features
        .split(",")
        .map((f) => f.trim())
        .filter((f) => f);

      const productData = {
        name: formData.name,
        brand: formData.brand,
        description: formData.description,
        price: parseFloat(formData.price),
        category: formData.category,
        image:
          formData.image ||
          "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800",
        stock: parseInt(formData.stock),
        inStock: parseInt(formData.stock) > 0,
        features: featuresArray,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const response = await axios.post(
        "https://wristlook-sr.vercel.app/watches",
        productData
      );

      toast.success("Product added successfully!");

      // Reset form
      setFormData({
        name: "",
        brand: "",
        description: "",
        price: "",
        category: "",
        image: "",
        stock: "",
        features: "",
      });

      // Redirect to watches page after 2 seconds
      setTimeout(() => {
        router.push("/watches");
      }, 2000);
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error(error.response?.data?.message || "Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="card bg-base-200 shadow-2xl">
        <div className="card-body">
          <h2 className="card-title text-3xl mb-6">Add New Watch</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title/Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">
                  Watch Name <span className="text-error">*</span>
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="e.g., Chronograph Master"
                className="input input-bordered w-full"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Brand */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">
                  Brand <span className="text-error">*</span>
                </span>
              </label>
              <input
                type="text"
                name="brand"
                placeholder="e.g., Luxe Time"
                className="input input-bordered w-full"
                value={formData.brand}
                onChange={handleChange}
                required
              />
            </div>

            {/* Short Description */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">
                  Short Description <span className="text-error">*</span>
                </span>
              </label>
              <textarea
                name="description"
                placeholder="Brief description (1-2 sentences)"
                className="textarea textarea-bordered h-24 w-full"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Features (Full Description) */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">
                  Features (comma-separated)
                </span>
              </label>
              <textarea
                name="features"
                placeholder="e.g., Swiss quartz movement, Stainless steel case, Sapphire crystal"
                className="textarea textarea-bordered h-32 w-full"
                value={formData.features}
                onChange={handleChange}
              ></textarea>
              <label className="label">
                <span className="label-text-alt">
                  Separate each feature with a comma
                </span>
              </label>
            </div>

            {/* Price and Stock */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Price (USD) <span className="text-error">*</span>
                  </span>
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="999.99"
                  step="0.01"
                  min="0"
                  className="input input-bordered w-full"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Stock Quantity <span className="text-error">*</span>
                  </span>
                </label>
                <input
                  type="number"
                  name="stock"
                  placeholder="10"
                  min="0"
                  className="input input-bordered w-full"
                  value={formData.stock}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Category */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">
                  Category <span className="text-error">*</span>
                </span>
              </label>
              <select
                name="category"
                className="select select-bordered w-full"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option value="Luxury">Luxury</option>
                <option value="Sport">Sport</option>
                <option value="Casual">Casual</option>
                <option value="Smart">Smart</option>
              </select>
            </div>

            {/* Image URL */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">
                  Image URL (optional)
                </span>
              </label>
              <input
                type="url"
                name="image"
                placeholder="https://example.com/image.jpg"
                className="input input-bordered w-full"
                value={formData.image}
                onChange={handleChange}
              />
              <label className="label">
                <span className="label-text-alt">
                  Leave empty to use default image
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="card-actions justify-end mt-8">
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => router.push("/watches")}
                disabled={loading}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner"></span>
                    Adding Product...
                  </>
                ) : (
                  "Add Product"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductForm;
