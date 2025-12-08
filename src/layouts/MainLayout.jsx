// src/layouts/MainLayout.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-base-300">
      <div className="absolute top-0 left-0 w-full z-2">
        <nav className="w-11/12 mx-auto mt-4">
          <Navbar></Navbar>
        </nav>
      </div>
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bottom-0 left-0 w-full z-50">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
