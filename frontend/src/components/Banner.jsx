import React from 'react'

const Banner = () => {
  return (
    <div className='h-screen w-screen  flex flex-row  '>
      <div className='h-screen w-[50%] flex justify-center  bg-red-50 flex-col '>
        <h1 className='text-black text-4xl pl-20 font-bold'>Hello  , welcome here to learn Something <span className='text-[#DA07B9]'>new everyday!!</span> </h1>
        <p className='pl-20 pr-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
      </div>
      <div className='h-screen w-[50%]'>
        <h2>HFHfios</h2>
      </div>
    </div>
  )
}

export default Banner
