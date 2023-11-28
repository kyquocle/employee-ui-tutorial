import React from 'react'
import { useNavigate } from "react-router-dom"

const Employee = ({employee,deleteEmployee}) => {
  const navigate = useNavigate();

  const editEmployee = (e,id) => {
    e.preventDefault();
    navigate(`/updateEmployee/${id}`);
  }

  return (
    <>
    <tr key={employee.id}>
                    <td className="text-left px-5 py-3">
                      <div className="text-sm">
                      {employee.id}
                      </div>
                    </td>
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
                      <button
                      onClick={(e, id) => editEmployee(e, employee.id)}

                      className="px-3 py-2 mr-3 bg-blue-500 text-white rounded hover:bg-purple-800">Update</button>
                      <button
                      onClick={(e, id) => deleteEmployee(e, employee.id)}
                      className="px-3 py-2 bg-red-500 text-white rounded hover:bg-purple-900">Delete</button>
                    </td>
                  </tr>
   </>
  )
}

export default Employee