import React from "react";
import logo from "../images/logo.png";
import { MdShoppingBasket } from "react-icons/md";


const Header = () => {
  return (
    <header className="fixed z-50 w-screen p-6 px-16">
      {/* tablet and desktop */}
      <div className="hidden md:flex w-full h-full">
        <div className="flex items-center gap-2">
          <img src={logo} className="w-10 object-cover" alt="logo" />
          <p className="text-headingColor text-2xl font-bold">FoodieFeast</p>
        </div>

        <ul className="flex items-center gap-8 ml-auto">
          <li className="text-xl text-textColor cursor-pointer hover:text-headingColor duration-75 ease-in-out">
            Home
          </li>
          <li className="text-xl text-textColor cursor-pointer hover:text-headingColor duration-75 ease-in-out">
            Menu
          </li>
          <li className="text-xl text-textColor cursor-pointer hover:text-headingColor duration-75 ease-in-out">
            About us
          </li>
          <li className="text-xl text-textColor cursor-pointer hover:text-headingColor duration-75 ease-in-out">
            Service
          </li>
        </ul>
        <div className="relative flex items-center justify-center">
          <MdShoppingBasket  className="text-2xl ml-8 cursor-pointer text-textColor"/>
          <div className="absolute -top-1 -right-2  w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-xs font-semibold text-white">2</p>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="flex md:hidden w-full h-full"></div>
    </header>
  );
};

export default Header;
