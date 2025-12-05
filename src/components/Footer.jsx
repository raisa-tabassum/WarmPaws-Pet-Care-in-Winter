import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Top Large Footer */}
      <footer className="bg-[#0B1B3F] text-white pt-14 pb-10">
        <div className="w-10/12 mx-auto flex flex-col md:flex-row gap-8 md:gap-46">
          {/* Contact */}
          <div>
            <h3 className="text-2xl font-bold mb-3">Contact</h3>
            <p className="text-xl">📍 Dhaka, Bangladesh</p>
            <p className="text-xl">📞 +880 123 456 789</p>
            <p className="text-xl">📧 petCare@warmpaws.com</p>
          </div>
          {/* Services (Added as you requested) */}
          <div>
            <h6 className="text-2xl font-bold mb-3">Services</h6>
            <ul className="space-y-1">
              <li className="link link-hover text-white text-xl">
                Winter Pet Clothing
              </li>
              <li className="link link-hover text-white text-xl">
                Local Pet Care
              </li>
              <li className="link link-hover text-white text-xl">
                Pet Grooming
              </li>
              <li className="link link-hover text-white text-xl">
                Health & Safety Tips
              </li>
            </ul>
          </div>
          {/* Social Icons */}
          <div>
            <h3 className="text-2xl font-bold mb-3">Social Icons</h3>
            <div className="flex gap-4 text-3xl mt-4">
              <a className="text-blue-400 hover:text-white">
                <FaFacebook />
              </a>
              <a className="text-pink-400 hover:text-white">
                <FaInstagram />
              </a>
              <a className="text-red-500 hover:text-white">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Legal Bar */}
      <div className="bg-[#07122D] text-gray-300 py-3">
        <div className="w-10/12 mx-auto flex justify-between text-sm flex-wrap text-xl">
          <div className="flex gap-6">
            <a href="/privacy-policy" className="link link-hover text-gray-300">
              Privacy & Policy
            </a>
          </div>

          <p>© {new Date().getFullYear()} WarmPaws — All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
