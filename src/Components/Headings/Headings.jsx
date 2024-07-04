import React from 'react'

const Headings = ({main_heading, sub_heading}) => {
  return (
    <div className='heading_section'>
      <h2 className=' font-semibold text-2xl space-x-1'>{main_heading}</h2>
      <p className='text-gray-600  font-bold  text-1xl '>{sub_heading}</p>
    </div>
  )
}

export default Headings