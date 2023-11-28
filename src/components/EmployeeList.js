import { useState , useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import EmployeeService from "../services/EmployeeService";
import React from "react";
import Employee from "./Employee";
const EmployeeList = () => {

  const navigate = useNavigate(); 

  const [loading, setloading] = useState(true);
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        const respone = await EmployeeService.getEmployees();
        setEmployee(respone.data);
      } catch (err) {
        console.log(err);
      }
      setloading(false);
    };

    fetchData();

  }, [])
  
  const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteEmployee(id)
    .then(res => {
      if(employee) {
        setEmployee((prevElement) => {
          return prevElement.filter((employee) => employee.id !== id);
        })
      }
    })
  };

  return (
    <>
    <div className="container mx-auto my-4 pt-4 pl-6">
      <div className="h-12">
          <button 
          onClick={() => navigate("/add")}
          className="rounded bg-green-600 px-3 py-2 hover:bg-teal-500">Add employee</button>
      </div>

      <div className="flex shadow border-b">
          <table className="min-w-full">
              <thead className="bg-amber-100">
                  <tr>
                      <th className="text-gray-500 font-normal text-left py-3 px-6">
                      Id</th>
                      <th className="text-gray-500 font-normal text-left py-3 px-6">
                      First Name</th>
                      <th className="text-gray-500 font-normal text-left py-3 px-6">Last Name</th>
                      <th className="text-gray-500 font-normal text-left py-3 px-6">Email ID</th>
                      <th className="text-gray-500 font-normal text-left py-3 px-6">Action </th>
                  </tr> 
              </thead>
              {!loading && (
              <tbody className="bg-white">
                {employee.map((employee) => (
                  <Employee employee={employee} deleteEmployee={deleteEmployee} key={employee.id}></Employee>
                  //Load data from child employee
                  ))}

              </tbody>
            )}

          </table>
      </div>

    </div>
    

    

    </>
  )
}

export default EmployeeList