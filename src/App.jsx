import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './Components/Sidebar/Sidebar'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import Forgot_Password from './Pages/Forgot_Password/Forgot_Password'
import Hide from './Components/Hide/Hide'
const App = () => {


  return (
    <BrowserRouter>
       <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgot_password' element={<Forgot_Password />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App