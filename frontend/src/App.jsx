import React from 'react'
import Home from './home/Home'
import Course from './components/Course'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/course' element={<Course/>} />
     </Routes>
    </>
  )
}

export default App
