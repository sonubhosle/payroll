import React from 'react'
import '../../Style/Form.css'

const Add_Employee = () => {
  return (
    <div className="employee_form" >
    <form  >
        <div className="form_heading">Add Employee</div>
        <div className="input_group flex">
            <div className="input_box">
                <div className="name">First Name</div>
                <input type="text" name='firstName' />
            </div>
            <div className="input_box">
                <div className="name">Last Name</div>
                <input type="text" name='lastName' />
            </div>
        </div>
        <div className="input_group flex">
            <div className="input_box">
                <div className="name">Username</div>
                <input type="text" name='username' />
            </div>
            <div className="input_box">
                <div className="name">Email</div>
                <input type="email" name='email' />
            </div>
        </div>
        <div className="input_group flex">
            <div className="input_box">
                <div className="name">Password</div>
                <input type="password" name='password' />
            </div>
            <div className="input_box">
                <div className="name">Confirm Password</div>
                <input type="text" name='confirmPassword' />
            </div>
        </div>
        <div className="input_group flex">
            <div className="input_box">
                <div className="name">Employee Id</div>
                <input type="text" name='employeeId' />
            </div>
            <div className="input_box">
                <div className="name">Joining Date</div>
                <input type="date" name='joiningDate' />
            </div>
        </div>
        <div className="input_group flex">
            <div className="input_box">
                <div className="name">Phone</div>
                <input type="number" name='phone' />
            </div>
            <div className="input_box">
                <div className="name">Joining Date</div>
                <input type="date" name='joiningDate' />
            </div>
        </div>
        <div className="input_group flex">
            <div className="input_box">
                <div className="name">Phone</div>
                <input type="number" name='phone' />
            </div>
            <div className="input_box">
                <div className="name">Joining Date</div>
                <input type="date" name='joiningDate' />
            </div>
        </div>
        <div className="input_group flex">
            <div className="input_box">
                <div className="name">Phone</div>
                <input type="number" name='phone' />
            </div>
            <div className="input_box">
                <div className="name">Joining Date</div>
                <input type="date" name='joiningDate' />
            </div>
        </div>

        <div className="input_group flex items-center justify-center">
            <button type="submit" className="mt-5">Submit</button>
        </div>
    </form>
</div>
  )
}

export default Add_Employee