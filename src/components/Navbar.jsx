"use client";

import { BsFillMenuButtonFill } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { handleSignOut } from "@/app/actions/index";

const Navbar = ({ session }) => {
  //   console.log(session);

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
      <li>
        <Link href="/contact">Contact Us</Link>
      </li>
    </>
  );

  return (
    <div
      className={`sticky top-0 z-50 transition-all border-b border-base-200 duration-300 ${
        scrolled
          ? "bg-base-100/60 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <BsFillMenuButtonFill size={26} />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 z-1 p-2 shadow bg-base-200 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <div>
            <Link href="/" className={`btn btn-ghost font-bold`}>
              <h1 className="text-2xl">WristLook</h1>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-lg font-semibold px-1">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          {session?.user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle btn-xl avatar"
              >
                <div className="w-12 rounded-full  outline-2 outline-offset-2 outline-primary">
                  {session.user.image ? (
                    <Image
                      src={session.user.image}
                      alt={session.user.name || "User"}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="bg-primary text-primary-content w-full h-full flex items-center justify-center text-xl font-bold">
                      {session.user.name?.[0] || session.user.email?.[0] || "U"}
                    </div>
                  )}
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-200 rounded-box w-64"
              >
                <li className="menu-title text-secondary">
                  <div className="flex flex-col gap-1 px-2 py-3">
                    <span className="font-semibold text-xl">
                      {session.user.name || "User"}
                    </span>
                    <span className=" ">{session.user.email}</span>
                  </div>
                </li>
                <div className="divider my-0"></div>
                <li>
                  <Link href="/add-product" className="text-base">
                    <IoMdAdd className="h-5 w-5" />
                    Add Product
                  </Link>
                </li>
                <li>
                  <Link href="/manage-products" className="text-base">
                    <MdManageAccounts className="h-5 w-5" />
                    Manage Products
                  </Link>
                </li>
                <div className="divider my-0"></div>
                <li className="px-2 pb-2 w-full">
                  <form action={handleSignOut} className="w-full">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block gap-2"
                    >
                      <IoLogOut className="h-4 w-4" />
                      Logout
                    </button>
                  </form>
                </li>
              </ul>
            </div>
          ) : (
            <Link href="/login" className="btn btn-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
