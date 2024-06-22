import React from "react";
import { Search, Lineicon } from "../icons";

const Navbar = () => {
  return (
    <nav
      className="bg-white mt-3
     h-16 flex items-center justify-between px-6"
    >
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold text-red-500 cursor-pointer">
          Cookbuddy
        </h1>
        <Lineicon className="mx-4" />
        <div className="flex items-center">
        <Search className="text-gray-700 ml-5 h-3 w-3 " />
        <input
            type="text"
            placeholder="What would you like to cook?"
            className="border-none placeholder:text-sm placeholder:text-[#2B2B2B] outline-none w-60 p-2 rounded-lg focus:ring-0 focus:border focus:border-b-2 focus:border-indigo-500"
          />
        </div>
      </div>
      <div className="flex items-center text-sm space-x-6">
        <a href="/" className="text-gray-700 hover:border-b-2 hover:border-red-500 transition-colors hover:text-gray-900">
          Home
        </a>
        <a href="/discover" className="text-gray-700 hover:border-b-2 hover:border-red-500 transition-colors hover:text-gray-900">
          Discover Recipes
        </a>
        <a href="/your-recipes" className="text-gray-700 hover:border-b-2 hover:border-red-500 transition-colors hover:text-gray-900">
          Your Recipes
        </a>
        <a
          href="/get-started"
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
