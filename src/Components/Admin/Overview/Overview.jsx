import React from 'react'
import './Style.css'
import { FaBoxesStacked } from "react-icons/fa6";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaTasks, FaUser } from "react-icons/fa";

const overview_data = [
    {
        "icon": <FaBoxesStacked />,
        "number": 112,
        "name": "Projects"
    },
    {
        "icon": <HiOutlineUserGroup />,
        "number": 44,
        "name": "Clients"
    },
    {
        "icon": <FaTasks />,
        "number": 37,
        "name": "Tasks"
    },
    {
        "icon": <FaUser />,
        "number": 218,
        "name": "Employees"
    },
]

const Overview = () => {
    return (
        <div className='overview_grid'>
            {
                overview_data.map((item, index) => {
                    return (
                        <div className="card flex ">
                                <div className="icon flex">{item.icon}</div>
                                <div className="details flex ">
                                    <div className="number">{item.number}</div>
                                    <div className="name">{item.name}</div>
                                </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Overview