import { CubeIcon } from "@heroicons/react/24/solid";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col md:gap-9 gap-4 justify-center items-center mb-6">
      <div className="flex md:gap-12 gap-8">
        <CubeIcon className="w-6 h-6 text-gray-900" />
        <CubeIcon className="w-6 h-6 text-gray-900" />
        <CubeIcon className="w-6 h-6 text-gray-900" />
        <CubeIcon className="w-6 h-6 text-gray-900" />
      </div>

      <div className="flex md:gap-12 gap-8">
        <p className="md:text-lg text-sm font-bold text-gray-900">
          Condition of Use
        </p>
        <p className="md:text-lg text-sm font-bold text-gray-900">
          Privacy & Policy
        </p>
        <p className="md:text-lg text-sm font-bold text-gray-900">Press Room</p>
      </div>

      <p className="md:text-lg text-sm font-bold text-gray-500 text-center">
        © 2023 MovieBox by Hadi Yusuf Al Ghifari - (untuk test array.ma)
      </p>
    </footer>
  );
};

export default Footer;
