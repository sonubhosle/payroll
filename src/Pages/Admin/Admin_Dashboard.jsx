import React from 'react'
import Overview from '../../Components/Admin/Overview/Overview'
import Headings from '../../Components/Headings/Headings'
import Statistics from '../../Components/Admin/Statistics/Statistics'

const Admin_Dashboard = () => {
  return (
    <div className='main'>
      <Headings main_heading={'Welcome Admin!'} sub_heading={'Dashboard'} />
       <Overview />
       <Statistics />
    </div>
  )
}

export default Admin_Dashboard