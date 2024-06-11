import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../Style/Sidebar.css';
import { TbSettings2, TbSquareLetterA } from 'react-icons/tb';
import { GoDotFill } from "react-icons/go";
import { dropdownData } from './dropdown_data';

const Sidebar = ({isSidebarOpen,toggleSidebar}) => {
  const [activeLinks, setActiveLinks] = useState({}); // Keep track of active links for each dropdown
  const [openDropdowns, setOpenDropdowns] = useState({});

  useEffect(() => {
    // Initialize active links for each dropdown
    const initialActiveLinks = {};
    initialActiveLinks[0] = 0; // Set the first link of the first dropdown as active by default
    setActiveLinks(initialActiveLinks);
  }, []);



  const toggleDropdown = (index) => {
    setOpenDropdowns((prevState) => {
      const updatedDropdowns = { [index]: !prevState[index] };

      // Close all other dropdowns
      Object.keys(prevState).forEach((key) => {
        if (key !== index.toString()) {
          updatedDropdowns[key] = false;
        }
      });

      return updatedDropdowns;
    });
  };

  const handleSetActiveLink = (dropdownIndex, linkIndex) => {
    setActiveLinks((prevState) => {
      const updatedActiveLinks = { ...prevState };

      // If the clicked link is already active, deactivate it
      if (updatedActiveLinks[dropdownIndex] === linkIndex) {
        updatedActiveLinks[dropdownIndex] = null;
      } else {
        updatedActiveLinks[dropdownIndex] = linkIndex;
      }

      return updatedActiveLinks;
    });
  };



  return (
    <>
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="logo_details">
          <div className="icon">
            <TbSettings2 onClick={toggleSidebar} className="cog" />
          </div>
          <div className="logo_name">Dashboard</div>
          <i onClick={toggleSidebar} className="bx bx-menu menu" id="btn"></i>
        </div>
        <ul className="nav-list">
        <div className="heading"> <p></p> <span>Main</span></div>
          {dropdownData.map((dropdown, index) => (
            <div className="dashboard_dropdown" key={index}>
              <button onClick={() => toggleDropdown(index)} className="dropdown-toggle">
                <p className='name'> <i className={dropdown.icon}></i> <div className="label">{dropdown.label}</div></p>
                <span className={`arrow ${openDropdowns[index] ? 'open' : ''}`}><i className="bx bx-chevron-down"></i></span>
              </button>
              <div className={`dashboard-menu ${openDropdowns[index] ? 'open' : ''}`}>
                {dropdown.links.map((link, linkIndex) => (
                  <Link
                    to={link.path}
                    key={linkIndex}
                    className={`sidebar-link ${activeLinks[index] === linkIndex ? 'active-link' : ''}`}
                    onClick={() => handleSetActiveLink(index, linkIndex)}
                  >
                    <GoDotFill /> {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="heading"> <p></p> <span>Pages</span></div>
          <div className="pages">
          <Link className='page_link'><i class='bx bx-user-plus'></i> Users</Link>
            <Link className='page_link'><i class='bx bx-buildings'></i> Componies</Link>
            <Link className='page_link'><i class='bx bx-user-pin' ></i> Contacts</Link>
            <Link className='page_link'><i class='bx bx-trending-up'></i> Promotion</Link>
            <Link className='page_link'><i class='bx bx-check-square'></i> Resignation</Link>
            <Link className='page_link'><i class='bx bx-x-circle'></i> Termination</Link>
            

          </div>
        </ul>
      </div>
    </>


  );
};

export default Sidebar;
