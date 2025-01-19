import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/Home/About'
import Login from './pages/Home/Login'
import Registration from './pages/Home/Registration'

const App = () => {
  return (
    <div className='m-0 p-0'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Registration/>}/>
      </Routes>
    </div>
  )
}

export default App