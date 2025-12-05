import React from "react";
import { FaPaw } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-xs px-5">
      <div className="navbar-start">
        <div className="flex items-center gap-2">
            <FaPaw className="text-4xl text-[##62cef5]" />
          <a className="text-2xl font-bold text-[#093680]">WarmPaws</a>
        </div>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1 text-xl text-[#131952] font-bold">
          <li>
            <a>Home</a>
          </li>
          <li>
            <details>
              <summary>Services</summary>
              <ul className="p-2 bg-base-100 w-40 z-1">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>My Profile</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn px-6 text-white font-bold rounded-lg border-none bg-[#1f30a1]">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
