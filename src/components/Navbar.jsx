"use client";
import { oxanium } from "@/app/layout";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navOptions = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/watches">Watches</Link>
      </li>
    </>
  );

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-base-100/60 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-200 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>

          <Link href="/" className={`btn btn-ghost`}>
            <h1 className="text-2xl ">WristLook</h1>
          </Link>
        </div>
        <div className={` ${oxanium.className} navbar-center hidden lg:flex`}>
          <ul className="menu menu-horizontal text-xl px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end gap-2">
          <Link href="/login" className="btn btn-outline">
            Login
          </Link>
          <Link href="/register" className="btn btn-primary">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
