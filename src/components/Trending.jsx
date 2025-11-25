import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllWatches } from "@/lib/getAllWatches";

const Trending = async () => {
  // Placeholder data for trending items
  const data = await getAllWatches();
  const trendingItems = data.slice(0, 3);

  return (
    <div className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-base-content">
          Trending Now
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trendingItems.map((item) => (
            <div
              key={item._id}
              className="card rounded-2xl bg-base-100 shadow-xl"
            >
              <figure className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl">{item.name}</h2>
                <p className="text-xl font-semibold text-primary">
                  {item.price}
                </p>
                <div className="card-actions justify-end">
                  <Link
                    href={`/watches/${item._id}`}
                    className="btn btn-primary "
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/watches" className="btn btn-outline btn-wide">
            View All Collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Trending;
