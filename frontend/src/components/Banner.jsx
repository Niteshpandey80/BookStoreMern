import React, { useState } from "react";
import { FiMail } from "react-icons/fi";
import img from "../assets/Banner.png";

const Banner = () => {
  const [sinput, setSinput] = useState("");

  return (
    <div className="h-auto min-h-screen w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-10 bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
        <h1 className="text-gray-900 text-3xl md:text-4xl lg:text-5xl font-bold leading-snug mt-[30px] md:mt-0 ">
          Hello, welcome here to learn{" "}
          <span className="text-[#DA07B9]">new everyday!!</span>
        </h1>
        <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="flex items-center border rounded-lg px-3 py-2 w-full max-w-md bg-white shadow-md">
          <FiMail className="text-gray-500 mr-2" />
          <input
            type="email"
            placeholder="Enter your email to login"
            className="w-full focus:outline-none text-gray-700"
            onChange={(e) => setSinput(e.target.value)}
          />
        </div>
        <button className="bg-[#DA07B9] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#b20696] transition w-fit">
          Get Started
        </button>
        <div>
          <h2 className="font-semibold text-xl text-gray-900">
            Free Offered Courses
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
            incidunt fugit, at dolorem necessitatibus culpa! Cumque placeat.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src={img}
          alt="Banner Illustration"
          className="w-4/5 md:w-full lg:w-[90%] object-contain drop-shadow-lg"
        />
      </div>
    </div>
  );
};

export default Banner;
