import React from 'react'
import Home from './home/Home'
import {Routes, Route} from 'react-router-dom'
import Courses from './courses/Courses'
import SignUp from './components/SignUp'
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/course' element={<Courses/>} />
      <Route path='/signup' element={<SignUp/>}/>
     </Routes>
     <Toaster />
    </>
  )
}

export default App
