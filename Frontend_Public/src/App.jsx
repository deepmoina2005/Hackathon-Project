import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Seller from './pages/Seller'
import About from './pages/About'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import Login from './pages/Login/Login'
import VerifyEmail from './pages/Login/VerifyEmail'
import ResetPassword from './pages/Login/ResetPassword'
import Product from './pages/Product'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Collection from './pages/Collection'

const App = () => {

  return (
    <div>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/seller' element={<Seller/>}/>
        <Route path='/Collection' element={<Collection/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/verify-email' element={<VerifyEmail/>}/>
        <Route path='place-order' element={<PlaceOrder/>} />
        <Route path='/reset-password' element={<ResetPassword/>}/>
        <Route path='/orders' element={<Orders/>} />
      </Routes>
    </div>
  )
}

export default App