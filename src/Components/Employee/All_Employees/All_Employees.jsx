import React, { useState } from 'react'
import Headings from '../../../Components/Headings/Headings'
import './Style.css'
import { BsPencil } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaTimes,FaPlus } from "react-icons/fa";
import { emp_data } from '../../../Data/Emp_Data';

const All_Employees = () => {

  const [openPopupIndex, setOpenPopupIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(8);


  const togglePopup = (index) => {
    setOpenPopupIndex(openPopupIndex === index ? null : index);
  };

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 8);
  };



  return (
    <div className='main'>
      <div className="emp_heading flex items-center">
      <Headings main_heading={'Employee'} sub_heading={'Dashboard / Employee'} />
      <button className='toggle_form_btn'><FaPlus size={15} /> Add Employee</button>

      </div>
      <div className="filtering ">
        <div className="input_box">
          <input type="text" />
          <p>Employee Id</p>
        </div>
        <div className="input_box">
          <input type="text" />
          <p>Employee Name</p>
        </div>
        <div className="input_box">
          <p className='top-10'>Designation</p>
          <select id="designation" name="designation">
            <option>Select Designation</option>
           {
            emp_data.map((designation) =>  <option value={designation.designation}>{designation.designation}</option>)
           }
          </select>
        </div>
        <div className="input_box">
          <div className="btn_search">Search</div>
        </div>
      </div>
      <div className="employees">
        {emp_data.slice(0, visibleCount).map((emp, index) => (
          <div className="emp_card" key={index}>
            <button className="toggle" onClick={() => togglePopup(index)}>
              {openPopupIndex === index ? <FaTimes /> : <BsThreeDotsVertical />}
            </button>
            <img src="https://smarthr.dreamstechnologies.com/react/template/static/media/avatar-02.62b90545c23b82880b99.jpg" alt='' />
            <div className="emp_name">{emp.firstName} {emp.lastName}</div>
            <div className="emp_role">{emp.designation}</div>
            {openPopupIndex === index && (
              <div className="popup-inner">
                <div className="btns"><BsPencil /> Edit</div>
                <div className="btns"><RiDeleteBinLine /> Delete</div>
              </div>
            )}
          </div>
        ))}
      </div>
      {visibleCount < emp_data.length && (
        <div className="load_more">
          <button className='more-btn' onClick={loadMore}>Load More</button>
        </div>
      )}
    </div>
  )
}

export default All_Employees