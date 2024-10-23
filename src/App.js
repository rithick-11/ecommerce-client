import React from 'react'

import NavBar from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import SignInUp from './pages/SignInUp/SignInUp'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} ></Route>
        <Route exact path='/sign-in-up' element={<SignInUp />} ></Route>
        <Route exact path='/auth' element={<Auth />} ></Route>
      </Routes>
    </div>
  )
}

export default App