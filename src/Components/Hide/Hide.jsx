
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Hide = ({children}) => {
   
    const location = useLocation();
    const [showNavbar, setShownavbar] = useState(false);

    useEffect(() => {
        if(location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/forgot_password'  ) {
            setShownavbar(false);
        }else{
            setShownavbar(true);
        }

    }, [location])
    


  return (
    <div>{showNavbar && children}</div>
  )
}

export default Hide