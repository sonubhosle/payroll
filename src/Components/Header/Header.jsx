import React, { useState } from 'react'
import '../../Style/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=' flex '>
      <div className="logo">
        <Link to='/'>Dreams Technologies</Link>
      </div>
      <div className="right">
      <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        <img src="https://www.shareicon.net/data/2016/09/15/829452_user_512x512.png" alt="" /> Admin
        <span className={`arrow ${isOpen ? 'open' : ''}`}><i class='bx bx-chevron-down'></i></span>
      </button>
      <ul className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
        <li className="dropdown-item"><i class='bx bx-user' ></i>Profile</li>
        <li className="dropdown-item"><i class='bx bx-cog'></i> Settings</li>
        <li className="dropdown-item"><i class='bx bx-log-in-circle' ></i>Logout</li>
      </ul>
    </div>
      </div>
    </header>
  )
}

export default Header