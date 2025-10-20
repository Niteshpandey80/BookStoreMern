import React, { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import Login from "./Login";

const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [showLogin  , setShowLogin] = useState(false)

  return (
    <>
    <nav className="bg-gray-900 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-xl font-bold text-white">Book Store</h1>

    
          <div className="hidden md:flex items-center gap-6">
            <a href="/" className="text-white hover:text-gray-300">Home</a>
            <a href="/course" className="text-white hover:text-gray-300">Course</a>
            <a href="#" className="text-white hover:text-gray-300">Contact</a>
            <a href="#" className="text-white hover:text-gray-300">About</a>

            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="px-3 py-1 border border-white rounded-lg pl-8 focus:outline-none text-white bg-gray-900 placeholder-white"
              />
              <FiSearch className="absolute left-2 top-2 text-white" />
            </div>

            <button className="bg-white text-black px-4 py-1 rounded-lg" onClick={()=>setShowLogin(true)}>
              Login
            </button>
          </div>

          <div className="md:hidden flex items-center text-white">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900 shadow-lg">
          <div className="px-4 py-3 flex flex-col gap-3">
            <a href="/" className="text-white hover:text-gray-300">Home</a>
            <a href="/course" className="text-white hover:text-gray-300">Course</a>
            <a href="#" className="text-white hover:text-gray-300">Contact</a>
            <a href="#" className="text-white hover:text-gray-300">About</a>

            <div className="relative">
              <input
                type="text"
                value={input}
                placeholder="Search"
                className="px-3 py-1 border border-white rounded-lg pl-8 focus:outline-none w-full text-white bg-gray-900 placeholder-white"
                onChange={(e) => setInput(e.target.value)}
              />
              <FiSearch className="absolute left-2 top-2 text-white" />
            </div>

            <button 
            onClick={()=>setShowLogin(true)} className="bg-white text-black px-4 py-1 rounded-lg w-fit">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
    {showLogin && <Login onClose={()=>setShowLogin(false)} />}
    </>
  );
};

export default Navbar;
