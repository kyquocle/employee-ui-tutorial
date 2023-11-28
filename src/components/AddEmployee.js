import React, { useState } from 'react'
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {

    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        id: "",
        firstName: "",
        lastName: "",   
        emailId: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({...employee, [e.target.name] : value});
    }

    const saveEmployee = (e) => {
        e.preventDefault();
        EmployeeService.saveEmployee(employee)
        .then((respone) => {
            console.log(respone);
            navigate("/employeeList")
        })
        .catch((err) => {
            console.log(err);
        })
        
    }

    const reset = (e) => {
        e.preventDefault();
        setEmployee({
        id: "",
        firstName: "",
        lastName: "",   
        emailId: ""
    })
    }

  return (
    <>
    
    <div className="flex max-w-2xl mx-auto shadow border">
        <div className="px-6 py-6">
            <div className="font-thin text-1xl tracking-wider">
                Add New Employee
            </div>
        
        <div className="items-center justify-center h-14 w-full my-2" >
            <label className="block text-zinc-700 font-mono">First Name</label>
            <input 
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={(e) => handleChange(e)}
            className="h-8 w-80 border mt-2 px-2 py-3"></input>
        </div> 

        <div className="items-center justify-center h-14 w-full my-2" >
            <label className="block text-zinc-700 font-mono">Last Name</label>
            <input 
            type="text" 
            name="lastName"
            value={employee.lastName}
            onChange={(e) => handleChange(e)}

            className="h-8 w-80 border mt-2 px-2 py-3"></input>
        </div> 

        <div className="items-center justify-center h-14 w-full my-2" >
            <label className="block text-zinc-700 font-normal">Email</label>
            <input 
            type= "email"
            name= "emailId"
            value={employee.emailId}
            onChange={(e) => handleChange(e)}

            className="h-8 w-80 border mt-2 px-2 py-3"></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-2" >
            <button 
            onClick={saveEmployee}
            className="rounded bg-violet-400 hover:bg-violet-600 mt-3 px-4 py-3">Enter</button>
            <button 
            onClick={reset}
            className="rounded bg-red-500 hover:bg-red-600 ml-3 mt-3 px-4 py-3">Clear</button>
        </div> 

        

    </div>
    
    </div>
    <button 
    onClick={() => navigate("/employeeList")}
     className="bg-orange-300 px-3 py-3 ">View Employees</button>
    </>
  )
}

export default AddEmployee