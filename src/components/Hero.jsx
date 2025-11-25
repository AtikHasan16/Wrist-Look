import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div
      className="hero min-h-[80vh]"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1974&auto=format&fit=crop)",
      }}
    >
      <div className="hero-overlay opacity-100"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-xl">
          <h1 className="mb-5 text-6xl font-bold text-white drop-shadow-2xl">
            Find Your Perfect Wrist Look
          </h1>
          <p className="mb-5 text-white">
            Discover our exclusive collection of premium timepieces. Elevate
            your style with WristLook.
          </p>
          <Link href="/watches" className="btn btn-primary">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
