import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 bg-[#e07a5f] text-gray-200 font-sans">
    <div className="mt-2">
      <ul className="space-y-2 font-semibold">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/productList">ProductList</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
      </ul>
    </div>

    <div className="p-4">
      <h3 className="font-semibold">Contact Us</h3>
      <ul className="space-y-2">
        <li>Email: mart@gmail.com</li>
        <li>Contact: 789584347 </li>
      </ul>
    </div>

    <div className="p-4">
      <h3 className="font-semibold">Connect With Us</h3>
      <ul className="space-y-2">
        <li>
          <span>Facebook</span>
          <FaFacebookF className="w-6 h-6 text-white hover:text-blue-500 transition" />
        </li>
        <li>
          <span>Instagram</span>
          <FaInstagram className="w-6 h-6 text-white hover:text-pink-500 transition" />
        </li>
      </ul>
    </div>
  </div>;
};

export default Footer;
