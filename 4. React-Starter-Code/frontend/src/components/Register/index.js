import React from "react";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./style.css";


const Register = () => {
const [firstName, setfirstName] = useState("");
const [lastName, setlastName] = useState("");
const [age, setage] = useState("");
const [country, setCountry] = useState("");
const [email, setEmail] = useState("");
const [password, setpassword] = useState("");
const [ADMIN, setADMIN] = useState("6328d052565694a02a797353");
const [USER, setUSER] = useState("632b477c77a3ea1a3b138f36");
const [message, setMessage] = useState("");
const addUser = () => {
  axios
    .post("http://localhost:5000/Users", {
      firstName:firstName,
      lastName,
      age,
      country,
      email,
      password,
      role: USER,
    })
    .then((response) => {
      console.log(response);
      setMessage(response.data.message)
    })
    .catch((err) => {
      console.log(err);
      setMessage(err.response.data.message)
    });
};


  return (
    <div className="regDiv">
      <h1> Register </h1>
      <input
        onChange={(e) => {
          setfirstName(e.target.value);
        }}
        type="text"
        placeholder={"Firat Name"}
      ></input>
      <input
        onChange={(e) => {
          setlastName(e.target.value);
        }}
        type="text"
        placeholder={"last Name"}
      ></input>
      <input
        onChange={(e) => {
          setage(e.target.value);
        }}
        type="number"
        placeholder={" Age"}
      ></input>
      <input
        onChange={(e) => {
          setCountry(e.target.value);
        }}
        type="text"
        placeholder={" country"}
      ></input>


<input onChange={(e)=>{setEmail(e.target.value)} }  type={"text"} placeholder={"Email"}></input>

      <input onChange={(e)=>{setpassword(e.target.value)} }  type={"password"} placeholder={" Password"}></input>
      <button onClick={addUser}> Register</button>
<div  className="reqMessage">
      <label>{message}</label>
      </div>
    </div>
  );
};
export default Register;
