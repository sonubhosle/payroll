import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Forgot_Password from './Pages/Forgot_Password/Forgot_Password';
import { AuthProvider, useAuth } from './Components/Auth/Auth';
import Protected_Routes from './Components/Protected_Routes/Protected_Routes';
import Header from './Components/Header/Header'
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
          <Route path='/' element={<Home />} />
          {/* Add more protected routes here if needed */}
        </Route>
      </Routes>
     </main>
     </div>
    </>
  );
};

export default App;
