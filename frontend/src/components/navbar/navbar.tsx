import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center text-2xl border-b w-full">
      <div className=" w-[90%] flex flex-row justify-between items-center ">
        <div className="text-xl font-semibold text-black cursor-pointer">
          <Link href="/">Brand Logo</Link>
        </div>
        <div className="flex flex-row gap-4 ">
          <div className="text-blue-700 text-lg cursor-pointer hover:underline duration-150">
            Item 1
          </div>
          <div className="text-blue-700 text-lg cursor-pointer hover:underline duration-150">
            Item 2
          </div>
          <div className="text-blue-700 text-lg cursor-pointer hover:underline duration-150">
            Item 3
          </div>
        </div>
        <div className="text-xl font-semibold text-black cursor-pointer">
          <Link href="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
