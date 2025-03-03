import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navigation = () => {
  return (
    <div>
      <nav className="bg-[#E07A5F] shadow-md p-4 flex justify-between">
        <div className="text-black font-semibold flex gap-x-4 text-xl text-white">
          <Image src="/logo.png" width={10} height={10}></Image>
          HomeMart
        </div>

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
