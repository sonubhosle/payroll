import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Style/Auth.css';
import { FaEyeSlash, FaEye } from "react-icons/fa";


const Signup = () => {
  
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleRepeatPasswordVisibility = () => {
    setShowRepeatPassword(!showRepeatPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='auth_section'>
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <p>Access to our dashboard</p>
        <div className="input_group">
          <div className="label">Email Address</div>
          <input type="text" name="name" />
        </div>
        <div className="input_group">
          <div className="label">Password  </div>
          <input type={showPassword ? "text" : "password"} name='password' />
          <div  className="password-toggle" onClick={togglePasswordVisibility}>
            {showPassword ? <FaEye /> :  <FaEyeSlash /> }
          </div>
        </div>
        <div className="input_group">
          <div className="label">Repeat Password </div>
          <input type={showRepeatPassword ? "text" : "password"} name='password'  />
          <div  className="password-toggle" onClick={toggleRepeatPasswordVisibility}>
            {showRepeatPassword ? <FaEye /> :  <FaEyeSlash /> }
          </div>
        </div>
        <div className="input_group">
          <button className="submit_btn">Register</button>
        </div>
        <p className='bottom_text'>Already have an account? <Link className='register' to='/login'>Login</Link></p>
      </form>
    </div>
  );
};

export default Signup;
