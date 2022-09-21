import "./App.css";
import Register from "./components/Register/index";
import { useState,useEffect,useContext, createContext} from "react";
import { NavLink, Route,Routes } from "react-router-dom";
import Login from "./components/Login";
import axios from "axios";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import AddArticle from "./components/AddArticle"
// export const tokenContext=createContext();
// export const setBoleanContext=createContext();

// export const settokenContext=createContext();
export const BoleanContext=createContext()
const App = () => {


const [isLoggedIn,setIsLoggedIn]=useState(false)
const [articaData,setarticaData]=useState([])
console.log("iss",isLoggedIn)
const[token,setToken]= useState("")
  return (
    <BoleanContext.Provider value={{isLoggedIn,setIsLoggedIn,token,setToken,articaData,setarticaData}}>
    {/* <setBoleanContext.Provider value={setIsLoggedIn}>
      
    <settokenContext.Provider value={setToken}>
   <tokenContext.Provider value={token} >
   */}
    <div className="App">
<div>
<Navbar/>
      <Routes>
      

      <Route path='/Register' element={<Register/>}/> 
      <Route path='/login' element={<Login/>}/> 
      <Route path='*' element={<p>not found 404</p>}/> 

      <Route path='/dashboard' element={<Dashboard/>}/> 
      <Route path='/AddArticle' element={<AddArticle/>}/> 
      <Route path='*' element={<p>not found 404</p>}/> 
     </Routes>

</div>
      <div>
     
      {/* <Navbar/>
      <Routes>
      

      <Route path='/dashboard' element={<Dashboard/>}/> 
      <Route path='/AddArticle' element={<AddArticle/>}/> 
      <Route path='*' element={<p>not found 404</p>}/> 
     </Routes> */}
     </div>
    </div>
  
     {/* </tokenContext.Provider>
     </settokenContext.Provider> */}
     {/* </setBoleanContext.Provider> */}
     </BoleanContext.Provider>
  );
};

export default App;
