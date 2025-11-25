import React from "react";
import Link from "next/link";
import Image from "next/image";

const Trending = () => {
  // Placeholder data for trending items
  const trendingItems = [
    {
      id: 1,
      name: "Classic Chrono",
      price: "$299",
      img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1999&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Modern Minimalist",
      price: "$199",
      img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1894&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Luxury Gold",
      price: "$499",
      img: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <div className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-base-content">
          Trending Now
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trendingItems.map((item) => (
            <div key={item.id} className="card rounded-2xl bg-base-100 shadow-xl">
              <figure className="relative h-64 overflow-hidden">
                <Image
                  src={item.img}
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
                    href={`/watches/${item.id}`}
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
