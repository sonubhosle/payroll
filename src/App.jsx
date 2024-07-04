import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Forgot_Password from './Pages/Forgot_Password/Forgot_Password';
import { AuthProvider, useAuth } from './Components/Auth/Auth';
import Protected_Routes from './Components/Protected_Routes/Protected_Routes';
import Header from './Components/Header/Header'
import Admin_Dashboard from './Pages/Admin/Admin_Dashboard';
import Employee_Dashboard from './Pages/Employee/Employee_Dashboard';
import All_Employees from './Components/Employee/All_Employees/All_Employees';
import Add_Employee from './Pages/Employee/Add_Employee.jsx'
const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <MainApp />
      </BrowserRouter>
    </AuthProvider>
  );
};

const MainApp = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const hideSidebarRoutes = ['/login', '/signup', '/forgot_password'];
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
   
      {isAuthenticated && !hideSidebarRoutes.includes(location.pathname) &&  <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
      <div className={`main-content ${isSidebarOpen ? 'open' : 'closed'}`}>
      {isAuthenticated && !hideSidebarRoutes.includes(location.pathname) && <Header />}

     <main>
      
     <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgot_password' element={<Forgot_Password />} />
        <Route path='/' element={<Protected_Routes />}>
          <Route path='/' element={<Admin_Dashboard />} />
          <Route path='/employee-dashboard' element={<Employee_Dashboard />} />
          <Route path='/employees'  element={<All_Employees />}/>
          {/* <Route path='/leaves-admin'  element={<Leaves_Admin />}/>
          <Route path='/leaves-employee'  element={<Leaves_Employees />}/>
          <Route path='/leave-settings'  element={<Leaves_Settings />}/>
          <Route path='/attendance-admin'  element={<Attendance_Admin />}/>
          <Route path='/attendance-employee'  element={<Attendance_Employee />}/>
          <Route path='/departments'  element={<Departments />}/>
          <Route path='/designations'  element={<Designations />}/>
          <Route path='/timesheet'  element={<Timesheet />}/>
          <Route path='/shift-schedule'  element={<Shift_Schedule />}/>
          <Route path='/overtime'  element={<Overtime />}/>
          <Route path='/holidays'  element={<Holidays />}/> */}
          <Route path='/add_employee'  element={<Add_Employee />}/>
        </Route>
      </Routes>
     </main>
     </div>
    </>
  );
};

export default App;
