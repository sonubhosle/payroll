import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../Style/Auth.css';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useAuth } from '../../Components/Auth/Auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    login(); // Log in the user
    navigate('/'); // Redirect to the home page
  };

  return (
    <div className='auth_section'>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <p>Access to our dashboard</p>
        {error && <p className="error">{error}</p>}
        <div className="input_group">
          <div className="label">Email Address</div>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input_group">
          <div className="label">Password  <Link to={'/forgot_password'}>Forgot Password?</Link></div>
          <input
            type={showPassword ? "text" : "password"}
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="password-toggle" onClick={togglePasswordVisibility}>
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </div>
        </div>
        <div className="input_group">
          <button type='submit' className="submit_btn">Login</button>
        </div>
        <p className='bottom_text'>Don't have an account yet? <Link className='register' to='/signup'>Register</Link></p>
      </form>
    </div>
  );
};

export default Login;
