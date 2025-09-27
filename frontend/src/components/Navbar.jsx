import React, { useState } from "react";
import { FiSearch, FiMoon, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input , setInput] = useState('')

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-xl font-bold text-gray-900">Book Store</h1>
          <div className="hidden md:flex items-center gap-6">
            <a href="/" className="text-gray-700 hover:text-black">Home</a>
            <a href="/course" className="text-gray-700 hover:text-black">Course</a>
            <a href="#" className="text-gray-700 hover:text-black">Contact</a>
            <a href="#" className="text-gray-700 hover:text-black">About</a>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="px-3 py-1 border rounded-lg pl-8 focus:outline-none"
              />
              <FiSearch className="absolute left-2 top-2 text-gray-500" />
            </div>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <FiMoon className="text-xl" />
            </button>
            <button className="bg-black text-white px-4 py-1 rounded-lg">
              Login
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-3 flex flex-col gap-3">
            <a href="/" className="text-gray-700 hover:text-black">Home</a>
            <a href="/course" className="text-gray-700 hover:text-black">Course</a>
            <a href="#" className="text-gray-700 hover:text-black">Contact</a>
            <a href="#" className="text-gray-700 hover:text-black">About</a>

            <div className="relative">
              <input
                type="text"
                value={input}
                placeholder="Search"
                className="px-3 py-1 border rounded-lg pl-8 focus:outline-none w-full"
                onChange={(e)=>setInput(e.target.value)}
              />
              <FiSearch className="absolute left-2 top-2 text-gray-500" />
            </div>

            <button className="p-2 rounded-full hover:bg-gray-100 w-fit">
              <FiMoon className="text-xl" />
            </button>

            <button className="bg-black text-white px-4 py-1 rounded-lg w-fit">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
