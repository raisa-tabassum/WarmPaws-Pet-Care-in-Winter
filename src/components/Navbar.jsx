import React from "react";
import { FaPaw } from "react-icons/fa";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-xs px-5">
      <div className="navbar-start">
        <div className="flex items-center gap-2">
            <FaPaw className="text-4xl text-sky-500" />
          <a className="text-2xl font-bold text-[#093680]">WarmPaws</a>
        </div>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1 text-xl text-[#131952] font-bold">
          <li>
            <NavLink to='/' className={({isActive})=>(isActive ? "active" : "")}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/services' className={({isActive})=>(isActive ? "active" : "")}>Service</NavLink>
          </li>
          <li>
            <NavLink to='/profile' className={({isActive})=>(isActive ? "active" : "")}>My Profile</NavLink>
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
