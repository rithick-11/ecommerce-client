import React from 'react'
import{ Toaster } from 'react-hot-toast';
import NavBar from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import SignInUp from './pages/SignInUp/SignInUp'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import { Cart } from './pages/Cart/Cart';

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} ></Route>
        <Route exact path='/sign-in-up' element={<SignInUp />} ></Route>
        <Route exact path='/cart' element={<Cart />} ></Route>
        <Route exact path='/auth' element={<Auth />} ></Route>
      </Routes>
      <Toaster position="bottom-center" />
    </div>
  )
}

export default App