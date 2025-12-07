import React, { useContext } from "react";
import { FaPaw } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, setUser, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("LogOut Successful");
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
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
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-2">
            <div className="relative group">
              <img
                src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                alt="avatar"
                className="w-10 h-10 rounded-full border-2 border-sky-500 cursor-pointer"
              />
              {/* Tooltip */}
              <div className="absolute hidden group-hover:block bg-black text-white text-sm px-3 py-1 rounded-lg -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
                {user?.displayName || "No Name"}
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="btn px-6 text-white font-bold rounded-lg border-none bg-[#1f30a1]"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/auth/login"
            className="btn px-6 text-white font-bold rounded-lg border-none bg-[#1f30a1]"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
