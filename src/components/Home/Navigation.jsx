import React from "react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "../searchBar/SearchBar";
const Navigation = () => {
  return (
    <div>
      <nav className="bg-[#E07A5F] shadow-md p-4 flex justify-between">
        <div className="text-black font-semibold flex gap-x-4 text-xl text-white">
          <Image src="/logo.png" width={65} height={5}></Image>
          HomeMart
        </div>
        <SearchBar></SearchBar>

        <ul className="flex text-gray-700 space-x-5 text-white font-semibold">
          <li>Home</li>
          <li>
            <Link href="/productList">Shop</Link>
          </li>
          <li>About Us</li>
          {/* <LoginButton></LoginButton> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
