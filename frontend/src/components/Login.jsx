import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

const Login = ({onClose}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  // const axios.post

  const onSubmit = (data) => console.log(data)
  return (
    <div className='fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50'>
      <div className='bg-white rounded-xl shadow-2xl w-96 p-6 relative'>
        <button onClick={onClose} className='absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-2xl'>
          &times;
        </button>
        <h2 className='text-2xl font-semibold text-center mb-6'>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
            <input type="email"  placeholder='Enter your email' {...register("email", { required: true })}  className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-pink-500' />
            {errors.email && <span className='text-red-500 text-sm'>This field is required</span>}
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Password
            </label>
            <input type="password" placeholder='Enter your password' {...register("password", { required: true })} 
            className='w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-pink-500'/>
            {errors.password && <span className='text-red-500 text-sm'>This field is required</span>}
          </div>
          <button type='submit' className='bg-pink-500 text-white py-2 rounded-md transition'>Login</button>
        </form>
        <p className='text-center text-sm text-gray-600 mt-4'> Not registered?{" "}
          <Link to='/signup' className='text-pink-500 hover:underline'>Signup</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
