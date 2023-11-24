import { useState , useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import EmployeeService from "../services/EmployeeService";
import React from "react";
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
  

  return (
    <>
    <div className="container mx-auto my-4 pt-4 pl-6">
      <div className="h-12">
          <button 
          onClick={() => navigate("/add")}
          className="rounded bg-green-600 px-3 py-2">Add employee</button>
      </div>

      <div className="flex shadow border-b">
          <table className="min-w-full">
              <thead className="bg-amber-100">
                  <tr>
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
                  <tr>
                    <td className="text-left px-5 py-3">
                      <div className="text-sm">
                      {employee.firstName}
                      </div>
                    </td>
                    <td className="text-left px-5 py-3">
                      <div className="text-sm ">
                      {employee.lastName}
                      </div>
                    </td>
                    <td className="text-left px-5 py-3">
                      <div className="text-sm">
                      {employee.emailId}
                      </div>
                    </td>
                    <td className="text-sm">
                      <a href="/a" className="px-3 py-2 mr-3 bg-blue-500 text-white rounded">Edit</a>
                      <a href="/e" className="px-3 py-2 bg-red-500 text-white rounded">Delete</a>
                    </td>
                  </tr>
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