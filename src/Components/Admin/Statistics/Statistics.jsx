import React from 'react'
import './Style.css'
import { stat } from './sta'
import { absent } from './absent'
const Statistics = () => {
    return (
        <div className='statistics_section'>
            <div className="statistics"
            >
                <h2>Statistics</h2>
                {stat.map((item,index) =>{
                return(
                    <div className="box-stat">
                    <div className="up_text">
                        <div className="title">{item.title}</div>
                        <div className="stat">{item.sub_count}/{item.count}</div>
                    </div>
                    <div className="bar"></div>
                </div>
                )
             })}
               
            </div>
            <div className="employee_absenty">
                <h2>Today Absent <p>5</p></h2>
              {
                absent.map((item,index)=>{
                    return(
                        <div className="box-emp">
                        <div className="user_profile"> 
                        <img src={item.user_image} alt="" />
                        <p>{item.user_name}</p>
                        </div>
                        <div className="details">
                            <div className="date">
                                <p>{item.leave_date}</p>
                                <div className="leave">Leave Date</div>
    
                            </div>
                            <div className="status">{item.status}</div>
                        </div>
                    </div>
    
                    )
                })
              }
            </div>
        </div>
    )
}

export default Statistics