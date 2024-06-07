import React, { useState } from 'react'
import '../../Style/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='flex'>
      <div className="logo">
        <Link to='/'>Dreams Technologies</Link>
      </div>
      <div className="right">
      <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        <img src="" alt="" /> Admin
        <span className={`arrow ${isOpen ? 'open' : ''}`}><i class='bx bx-chevron-down'></i></span>
      </button>
      <ul className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
        <li className="dropdown-item">Option 1</li>
        <li className="dropdown-item">Option 2</li>
        <li className="dropdown-item">Option 3</li>
      </ul>
    </div>
      </div>
    </header>
  )
}

export default Header