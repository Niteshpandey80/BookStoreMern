import React from 'react'
import list from '../../public/list'
import { useNavigate } from 'react-router-dom'

const Course = () => {
  const navigate = useNavigate()
  return (
    <div className='min-h-screen mt-20 flex flex-col items-center '>
      <h1 className='text-black text-4xl mt-15'>
        We're Delighted to have you <span className='text-[#E44B97]'>Here! :)</span>
      </h1>

      <p className='mt-6 text-xs sm:text-sm md:text-lg leading-5 sm:leading-7 md:leading-8 text-center text-gray-700 lg:px-32'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eius ullam, sequi deserunt quia mollitia doloremque quaerat, aliquam explicabo error corrupti quisquam perspiciatis possimus eaque nostrum veniam vel voluptas! Quod porro vel tenetur eveniet consequatur odio natus vitae cum odit exercitationem, ducimus pariatur, quisquam molestiae?
      </p>

      <button className='bg-[#E44B97] hover:bg-pink-700 text-white pl-3 pr-3 pt-1 pb-1 text-xl rounded mt-5' onClick={()=>navigate('/')}>
        Back
      </button>
      <div className='w-full px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {list.map((items) => (
          <div 
            key={items.id} 
            className='bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center hover:scale-105 duration-200'
          >
            <img 
              src={items.image} 
              alt={items.title} 
              className='w-full h-60 object-cover rounded-lg mb-4'
            />
            <h2 className='text-lg font-semibold text-gray-800'>{items.title}</h2>
            <p className='text-sm text-gray-600 mt-1'>{items.name}</p>
            <p className='mt-2 text-pink-600 font-bold'>
              {items.price === 0 ? 'Free' : `₹${items.price}`}
            </p>
            <span
              className={`mt-2 px-3 py-1 rounded-full text-xs ${
                items.category === 'free'
                  ? 'bg-green-200 text-green-700'
                  : 'bg-yellow-200 text-yellow-700'
              }`}
            >
              {items.category}
            </span>
            <button className='text-sm bg-pink-500 mt-3 text-white pl-2 pr-2 pt-1 pb-2'>Buy Know</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Course
