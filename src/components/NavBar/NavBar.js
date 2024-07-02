import React from "react";
import { SearchIcon, UserIcon } from "@heroicons/react/solid";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <nav className="flex flex-col bg-gray-100 py-4">
        <div className="flex justify-between items-center w-full px-4">
          <h2 className="font-Roboto text-sm sm:text-2xl bg-black text-white p-1 sm:p-2">
            ShopEase
          </h2>
          <div className="flex relative items-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <input
              type="text"
              placeholder="Search your products..."
              className="pl-10 pr-4 py-1 sm:py-2 lg:ml-4 w-full rounded-lg focus:outline-none "
            />
            <SearchIcon className="absolute left-3 lg:left-6 h-5 w-5 text-gray-500" />
          </div>
        </div>

        <div className="flex  mt-4 justify-between flex-wrap ml-4 ">
          <ul className="flex space-x-2 lg:space-x-20">
            <li className="font-bold cursor-pointer hover:font-thin sm:text-base text-xs">
              <NavLink to="/" activeclassname="active">
                Home
              </NavLink>
            </li>
            <li className="font-bold cursor-pointer hover:font-thin sm:text-base text-xs">
              <NavLink to="/about" activeclassname="active">
                About
              </NavLink>
            </li>
            <li className="font-bold cursor-pointer hover:font-thin sm:text-base text-xs">
              <NavLink to="/products" activeclassname="active">
                Products
              </NavLink>
            </li>
            <li className="font-bold cursor-pointer hover:font-thin sm:text-base text-xs">
              <NavLink to="/contact" activeclassname="active">
                Contact
              </NavLink>
            </li>
          </ul>
          <ul className="flex-wrap hidden sm:flex ">
            <li>
              <button className="p-1 -mt-1 hover:border hover:border-black rounded -ml-1 sm:text-base text-xs">
                Login
              </button>
            </li>
            <li>
              <button className="p-1 border-2 border-black rounded -mt-1 hover:bg-black hover:text-white ml-4 mr-4 sm:text-base text-xs">
                Sign up
              </button>
            </li>
          </ul>

          <ul className="sm:hidden flex relative mr-2 ">
            <li className="font-bold cursor-pointer hover:font-thin sm:text-base text-xs">
              Account
            </li>
            <UserIcon className="h-4 w-4 text-gray-700 relative " />
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
