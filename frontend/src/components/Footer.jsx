import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-white">Book Store</h2>
          <p className="mt-3 text-gray-400">
            Learn something new everyday with our free and premium courses.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Courses</a></li>
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <p className="mt-3 text-gray-400">Email: support@bookstore.com</p>
          <p className="text-gray-400">Phone: +91 98765 43210</p>

          <div className="flex gap-4 mt-4">
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-pink-600 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-pink-600 transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-pink-600 transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-pink-600 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Book Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
