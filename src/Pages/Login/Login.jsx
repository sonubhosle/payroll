import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../Style/Auth.css'
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const handleSubmit = (e) =>{
    e.preventDefault()
  }


  return (
    <div className='auth_section'>

      <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <p>Access to our dashboard</p>
        <div className="input_group">
          <div className="label">Email Address</div>
          <input type="text" name="name" />
        </div>
        <div className="input_group">
          <div className="label">Password  <Link to={'/forgot_password'}>Forgot Password?</Link></div>
          <input type="password" name='password' />
          <input type={showPassword ? "text" : "password"} name='password' />
          <div  className="password-toggle" onClick={togglePasswordVisibility}>
            {showPassword ? <FaEye /> :  <FaEyeSlash /> }
          </div>
        </div>
        <div className="input_group">
           <button className="submit_btn">Login</button>
        </div>

        <p className='bottom_text'>Don't have an account yet? <Link className='register' to='/signup'>Register</Link></p>
      </form>

    </div>
  )
}

export default Login