import React from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../Constants";

const Navbar = () => {
  return (
    <header className="bg-red-200 w-full py-5 sm:px-10 px-5 flex justify-center items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" width={14} height={18} className="cursor-pointer hover:scale-125"/>

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => {
            return (
              <div
                key={nav}
                className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all "
              >
                {nav}
              </div>
            );
          })}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="Searcg" width={18} height={18} className="cursor-pointer hover:scale-125"/>
          <img src={bagImg} alt="Bag" width={18} height={18} className="cursor-pointer hover:scale-125"/>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;