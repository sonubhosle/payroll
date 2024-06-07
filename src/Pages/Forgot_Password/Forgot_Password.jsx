import React from 'react'
import { Link } from 'react-router-dom'
import '../../Style/Auth.css'

const Forgot_Password = () => {


  const handleSubmit = (e) =>{
    e.preventDefault()
  }


  return (
    <div className='auth_section'>

      <form onSubmit={handleSubmit}>
      <h2>Forgot Password?</h2>
      <p>Enter your email to get a password reset link</p>
        <div className="input_group">
          <div className="label">Email Address</div>
          <input type="text" name="name" />
        </div>

        <div className="input_group">
           <button className="submit_btn">Reset Password</button>
        </div>

        <p className='bottom_text'>Remember your password? <Link className='register' to='/login'>Login</Link></p>
      </form>

    </div>
  )
}



export default Forgot_Password