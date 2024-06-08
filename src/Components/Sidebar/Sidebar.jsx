import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Style/Sidebar.css';
import { TbSettings2, TbSquareLetterA } from 'react-icons/tb';

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDropdown = (index) => {
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  // Data for dropdowns
  const dropdownData = [
    {
      label: 'Dashboard',
      links: [
        { name: 'Admin Dashboard', path: '/admin-dashboard-1' },
        { name: 'Employee Dashboard', path: '/employee-dashboard-1' },
      ],
    },
    {
      label: 'Employee',
      links: [
        { name: 'All Employees', path: '/all-employee' },
        { name: 'Holidays', path: '/holiday' },
        { name: 'Leaves(Admin)', path: '/leaves-admin' },
        { name: 'Leaves(Employee)', path: '/leaves-employee' },
        { name: 'Leave Settings', path: '/leave-settings' },
        { name: 'Attendance (Admin)', path: '/attendance-admin' },
        { name: 'Attendance (Employee)', path: '/attendance-employee' },
        { name: 'Departments', path: '/departments' },
        { name: 'Designations', path: '/designations' },
        { name: 'Timesheet', path: '/timesheet' },
        { name: 'Designations', path: '/designations' },
        { name: 'Shift & Schedule', path: '/shift-schedule' },
        { name: 'Overtime', path: '/overtime' },
      ],
    },
    {
      label: 'Sales',
      links: [
        { name: 'Admin Dashboard', path: '/admin-dashboard-1' },
        { name: 'Employee Dashboard', path: '/employee-dashboard-1' },
      ],
    },
    {
      label: 'Accounting',
      links: [
        { name: 'Admin Dashboard', path: '/admin-dashboard-1' },
        { name: 'Employee Dashboard', path: '/employee-dashboard-1' },
      ],
    },
    {
      label: 'Payrolls',
      links: [
        { name: 'Admin Dashboard', path: '/admin-dashboard-1' },
        { name: 'Employee Dashboard', path: '/employee-dashboard-1' },
      ],
    },
    // Add more dropdowns as needed
  ];

  return (
    <>
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="logo_details">
          <div className="icon">
            <TbSettings2 className="cog" />
          </div>
          <div className="logo_name">Dashboard</div>
          <i onClick={toggleSidebar} className="bx bx-menu menu" id="btn"></i>
        </div>
        <ul className="nav-list">
          {dropdownData.map((dropdown, index) => (
           <>
            <div className="dashboard_dropdown" key={index}>
              <button onClick={() => toggleDropdown(index)} className="dropdown-toggle">
                <p className='name'><TbSquareLetterA size={20} /> {dropdown.label}</p>
                <span className={`arrow ${openDropdowns[index] ? 'open' : ''}`}><i className="bx bx-chevron-down"></i></span>
              </button>
              <div className={`dashboard-menu ${openDropdowns[index] ? 'open' : ''}`}>
                {dropdown.links.map((link, linkIndex) => (
                  <Link to={link.path} key={linkIndex}><p></p> {link.name}</Link>
                ))}
              </div>
            </div>
           </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
