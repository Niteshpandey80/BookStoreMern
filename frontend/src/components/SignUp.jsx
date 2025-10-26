import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const SignUp = () => {
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:3000/user/signup", userInfo);
      console.log(res.data);

      if (res.data) {
        toast.success("Sign Up Successfully 🎉");
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        navigate("/", { replace: true });
      }
    } catch (err) {
      console.log(err);
      if (err.response && err.response.data && err.response.data.message) {
        toast.error("Error: " + err.response.data.message);
      } else {
        toast.error("Something went wrong!");
      }
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 relative">
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl w-96 p-8 flex flex-col items-center relative">
          <h1 className="text-3xl font-bold text-black mb-6">Create Account</h1>

          <Link
            to="/"
            className="absolute right-4 top-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full h-8 w-8 flex items-center justify-center text-2xl shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-pink-300/50"
          >
            &times;
          </Link>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
            <div>
              <label className="block text-gray-800 text-sm mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                {...register("fullname", { required: true })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              {errors.fullname && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            <div>
              <label className="block text-gray-800 text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: true })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            <div>
              <label className="block text-gray-800 text-sm mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                {...register("password", { required: true })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            <button
              type="submit"
              className="mt-4 w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg transition-all duration-300"
            >
              Sign Up
            </button>
          </form>

          <p className="text-sm text-gray-700 mt-4">
            Already have an account?{" "}
            <button
              onClick={() => setShowLogin(true)}
              className="text-pink-600 px-4 py-1 rounded-lg w-fit"
            >
              Login
            </button>
          </p>
        </div>
      </div>

      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </>
  );
};

export default SignUp;
