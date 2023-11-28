import React from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import EmployeeService from "../services/EmployeeService";

const UpdateEmployee = () => {

    const { id } = useParams();
    const [employee, setEmployee] = useState({
        id: id,
        firstName: "",
        lastName: "",   
        emailId: ""
    }
    )

    const updateEmployee = (e) => {
        e.preventDefault();
        EmployeeService.updateEmployeeById(employee,id).then
        ((respone => {
            navigate("/employeeList")
        }))
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({...employee, [e.target.name] : value});
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const respone = await EmployeeService.getEmployeeById(id);
                setEmployee(respone.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [])
    

    const navigate = useNavigate();

  return (
    <div className="flex max-w-2xl mx-auto shadow border">
    <div className="px-6 py-6">
        <div className="font-thin text-1xl tracking-wider">
            Update Employee
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
        onClick={updateEmployee}
        className="rounded bg-violet-400 hover:bg-violet-600 mt-3 px-4 py-3">Update</button>
        <button 
        onClick={() => navigate("/employeeList")}
        className="rounded bg-red-500 hover:bg-red-600 ml-3 mt-3 px-4 py-3">Cancel</button>
    </div> 

</div>
</div>

  )
}

export default UpdateEmployee