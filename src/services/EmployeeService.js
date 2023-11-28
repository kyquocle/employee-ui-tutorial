import axios from "axios";

const EMPLOYEE_API_URL = "http://localhost:8080/api/v1/employees";


class EmployeeService {

    saveEmployee(employee) {
        return axios.post(EMPLOYEE_API_URL, employee);
    } 

    getEmployees() {
        return axios.get(EMPLOYEE_API_URL);
    }

    deleteEmployee(id) {
        return axios.delete(EMPLOYEE_API_URL + "/" + id);
    }

    getEmployeeById(id) {
        return axios.get(EMPLOYEE_API_URL + "/" + id);
    }

    updateEmployeeById(employee, id) {
        return axios.put(EMPLOYEE_API_URL + "/" + id, employee);
    }
}

export default new EmployeeService();