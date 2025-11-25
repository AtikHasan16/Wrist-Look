import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a className="text-2xl cursor-pointer">
            <FaTwitter />
          </a>
          <a className="text-2xl cursor-pointer">
            <FaYoutube />
          </a>
          <a className="text-2xl cursor-pointer">
            <FaFacebook />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          WristLook Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
