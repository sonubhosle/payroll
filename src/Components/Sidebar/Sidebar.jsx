import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../Style/Sidebar.css'
import { TbSettings2 } from 'react-icons/tb'

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }




  return (
    <>
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="logo_details">
          <div className="icon">
            <TbSettings2 className='cog' />
          </div>
          <div className="logo_name">Dashboard</div>
          <i onClick={toggleSidebar} className="bx bx-menu menu" id="btn"></i>
        </div>
        <ul className="nav-list">
          <li>
            <Link>
              <i className='bx bxs-dashboard'></i>
              <span className="link_name">Dashboard</span>
              <div className="link_name right-icon"><i className='bx bxs-chevron-right'></i></div>
            </Link>
            <span className="tooltip">Dashboard</span>
          </li>
          <li>
            <Link>
              <i className='bx bxs-store-alt'></i>
              <span className="link_name">Products</span>
              <div className="link_name right-icon"><i className='bx bxs-chevron-right'></i></div>

            </Link>
            <span className="tooltip">Product</span>
          </li>
          <li>
            <Link >
              <i className='bx bxs-user-rectangle'></i>
              <span className="link_name">Customers</span>
              <div className="link_name right-icon"><i className='bx bxs-chevron-right'></i></div>

            </Link>
            <span className="tooltip">Customers</span>
          </li>
          <li>
            <Link>
              <i className='bx bxs-wallet-alt'></i>
              <span className="link_name">Income</span>
              <div className="link_name right-icon"><i className='bx bxs-chevron-right'></i></div>

            </Link>
            <span className="tooltip">Income</span>
          </li>
          <li>
            <Link >
              <i className='bx bxs-offer'></i>
              <span className="link_name">Promote</span>
              <div className="link_name right-icon"><i className='bx bxs-chevron-right'></i></div>
            </Link>
            <span className="tooltip">Promote</span>
          </li>
          <li>
            <Link>
              <i className='bx bxs-help-circle'></i>
              <span className="link_name">Help</span>
              <div className="link_name right-icon"><i className='bx bxs-chevron-right'></i></div>

            </Link>
            <span className="tooltip">Help</span>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar