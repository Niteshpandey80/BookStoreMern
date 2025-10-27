import React from 'react'
import Home from './home/Home'
import {Routes, Route, Navigate} from 'react-router-dom'
import Courses from './courses/Courses'
import SignUp from './components/SignUp'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'
import AddBook from './components/AddBooks'

const App = () => {
   const [authUser , setAuthUser] = useAuth()
    console.log(authUser)
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/course' element={authUser?<Courses/>:<Navigate to="/signup"/>} />
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/addbooks' element={authUser?<AddBook/>:<Navigate to="/signup"/>}/>
     </Routes>
     <Toaster />
    </>
  )
}

export default App
