import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getWatchById } from "@/lib/getWatchById";
import {
  IoArrowBack,
  IoCalendarOutline,
  IoCheckmarkCircle,
} from "react-icons/io5";
import { BiHeart, BiPackage } from "react-icons/bi";

const WatchDetailsPage = async ({ params }) => {
  const { id } = await params;
  const watch = await getWatchById(id);

  return (
    <div className="min-h-screen bg-base-100">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link
          href="/watches"
          className="btn btn-ghost gap-2 hover:gap-3 transition-all"
        >
          <IoArrowBack className="w-5 h-5" />
          Back to Watches
        </Link>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Large Image */}
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-base-200 shadow-2xl">
            <Image
              src={watch.image}
              alt={watch.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            {!watch.inStock && (
              <div className="absolute top-6 right-6">
                <span className="badge badge-error badge-lg">Out of Stock</span>
              </div>
            )}
            {watch.category && (
              <div className="absolute top-6 left-6">
                <span className="badge badge-primary badge-lg">
                  {watch.category}
                </span>
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            {/* Brand */}
            {watch.brand && (
              <p className="text-primary font-semibold text-lg mb-2">
                {watch.brand}
              </p>
            )}

            {/* Product Title */}
            <h1 className="text-5xl font-bold mb-6">{watch.name}</h1>

            {/* Price */}
            <div className="mb-6">
              <p className="text-4xl font-bold text-primary">${watch.price}</p>
            </div>

            {/* Full Description */}
            <p className="text-lg text-base-content/80 mb-8 leading-relaxed">
              {watch.description}
            </p>

            {/* Features */}
            {watch.features && watch.features.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {watch.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <IoCheckmarkCircle className="w-6 h-6 text-success" />
                      <span className="text-base-content/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Meta Information */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="card bg-base-200">
                <div className="card-body p-4">
                  <div className="flex items-center gap-3">
                    <BiPackage className="w-6 h-6 text-primary" />
                    <div>
                      <p className="text-sm text-base-content/60">Stock</p>
                      <p className="font-semibold">
                        {watch.inStock
                          ? `${watch.stock} Available`
                          : "Out of Stock"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-base-200">
                <div className="card-body p-4">
                  <div className="flex items-center gap-3">
                    <IoCalendarOutline className="w-6 h-6 text-primary" />
                    <div>
                      <p className="text-sm text-base-content/60">Added</p>
                      <p className="font-semibold">
                        {new Date(watch.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                className="btn btn-primary btn-lg flex-1"
                disabled={!watch.inStock}
              >
                {watch.inStock ? "Add to Cart" : "Out of Stock"}
              </button>
              <button className="btn btn-outline btn-lg">
                <BiHeart size={24}></BiHeart>
              </button>
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="mt-16">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card bg-base-200">
              <div className="card-body text-center">
                <div className="text-4xl mb-3">🚚</div>
                <h3 className="font-semibold mb-2">Free Shipping</h3>
                <p className="text-sm text-base-content/70">
                  Free delivery on orders over $100
                </p>
              </div>
            </div>
            <div className="card bg-base-200">
              <div className="card-body text-center">
                <div className="text-4xl mb-3">🔒</div>
                <h3 className="font-semibold mb-2">Secure Payment</h3>
                <p className="text-sm text-base-content/70">
                  100% secure payment methods
                </p>
              </div>
            </div>
            <div className="card bg-base-200">
              <div className="card-body text-center">
                <div className="text-4xl mb-3">↩️</div>
                <h3 className="font-semibold mb-2">30-Day Returns</h3>
                <p className="text-sm text-base-content/70">
                  Easy returns within 30 days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchDetailsPage;
