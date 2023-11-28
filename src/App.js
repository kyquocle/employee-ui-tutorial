// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import AddEmployee from './components/AddEmployee';
import Navbar from './components/Navbar';
import EmployeeList from "./components/EmployeeList";
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>

      <Routes>

        <Route path="/employeeList" element={<EmployeeList/>}></Route>
        <Route index element={<EmployeeList/>}></Route>
        <Route path="/add" element={<AddEmployee/>}></Route>
        <Route path="/updateEmployee/:id" element={<UpdateEmployee/>}></Route>


      </Routes>
      
    </BrowserRouter>
      
    </>
    
  )
}

export default App;
