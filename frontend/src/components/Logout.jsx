import React from 'react'
import { useAuth } from '../context/AuthProvider'

const LogOut = () => {
    const [authUser , setAuthUser] = useAuth()
  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'>Logout</button>
    </div>
  )
}

export default LogOut
