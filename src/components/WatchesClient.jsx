"use client";

import Image from "next/image";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";

const WatchesClient = ({ watches }) => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-6">All Watches</h1>
        <div className="flex justify-between items-center gap-4">
          <label className="input">
            <BiSearch></BiSearch>

            <input type="search" required placeholder="Search here..." />
          </label>
          <select defaultValue="Pick a font" className="select">
            <option disabled={true}>Sort by Category</option>
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {watches.map((item) => (
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
              <p className="text-base-content/70 line-clamp-2">
                {item.description}
              </p>
              <div className="flex items-center justify-between mt-4">
                <p className="text-2xl font-bold text-primary">${item.price}</p>
                <Link
                  href={`/watches/${item._id}`}
                  className="btn btn-primary btn-sm"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchesClient;
