import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../Style/Sidebar.css';
import { TbSettings2, TbSquareLetterA } from 'react-icons/tb';
import { GoDotFill } from "react-icons/go";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeLinks, setActiveLinks] = useState({}); // Keep track of active links for each dropdown
  const [openDropdowns, setOpenDropdowns] = useState({});
  const location = useLocation();

  useEffect(() => {
    // Initialize active links for each dropdown
    const initialActiveLinks = {};
    initialActiveLinks[0] = 0; // Set the first link of the first dropdown as active by default
    setActiveLinks(initialActiveLinks);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

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



  // Data for dropdowns
  const dropdownData = [
    {
      label: 'Dashboard',
      icon: `bx bxs-dashboard `,
      links: [
        { name: 'Admin Dashboard', path: '/' },
        { name: 'Employee Dashboard', path: '/employee-dashboard-1' },
      ],
    },
    {
      label: 'Employee',
      icon: `bx bx-user`,
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
      icon: `bx bx-circle-three-quarter`,
      links: [
        { name: 'Admin Dashboard', path: '/admin-dashboard-1' },
        { name: 'Employee Dashboard', path: '/employee-dashboard-1' },
      ],
    },
    {
      label: 'Accounting',
      icon: `bx bx-briefcase`,
      links: [
        { name: 'Admin Dashboard', path: '/admin-dashboard-1' },
        { name: 'Employee Dashboard', path: '/employee-dashboard-1' },
      ],
    },
    {
      label: 'Payrolls',
      icon: `bx bx-wallet`,
      links: [
        { name: 'Admin Dashboard', path: '/admin-dashboard-1' },
        { name: 'Employee Dashboard', path: '/employee-dashboard-1' },
      ],
    },
    {
      label: 'Reports',
      icon: `bx bxs-report`,
      links: [
        { name: 'Expense Report', path: 'expense_report' },
        { name: 'Payments Report', path: 'payments_report' },
        { name: 'Employee Report', path: '/amployee_report' },
        { name: 'Payslip Report', path: '/payslip_report' },
        { name: 'Attendance Report', path: '/attendance_report' },
        { name: 'Leave Report', path: '/leave_report' },
        { name: 'Daily Report', path: '/daily_report' },
      ],
    },
    {
      label: 'Profile',
      icon: `bx bx-user-plus`,
      links: [
        { name: 'Employee Profile', path: '/employee-profile' },
        { name: 'Client Profile', path: '/client-profile' },
      ],
    },
    {
      label: 'Authentication',
      icon: `bx bx-key`,
      links: [
        { name: 'Login', path: '/login' },
        { name: 'Register', path: '/signup' },
        { name: 'Forgot Password', path: '/forgot_password' },
      ],
    },
    {
      label: 'Subscriptions',
      icon: `bx bx-time`,
      links: [
        { name: 'Subscriptions (Admin)', path: '/subscriptions' },
        { name: 'Subscriptions (Company)', path: '/subscription_compony' },
        { name: 'Subscribed Componies', path: '/subscribed_componies' },
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
        <div className="heading"> <p></p> Main</div>
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
          <div className="heading"> <p></p> Pages</div>
          <div className="pages">
          <Link className='page_link'><i class='bx bx-user-plus'></i> Users</Link>
            <Link className='page_link'><i class='bx bx-buildings'></i> Componies</Link>
            <Link className='page_link'><i class='bx bx-user-pin' ></i> Contacts</Link>
            <Link className='page_link'><i class='bx bx-x-circle'></i> Promotion</Link>
            <Link className='page_link'><i class='bx bx-x-circle'></i> Resignation</Link>
            <Link className='page_link'><i class='bx bx-x-circle'></i> Termination</Link>
            

          </div>
        </ul>
      </div>
    </>


  );
};

export default Sidebar;
