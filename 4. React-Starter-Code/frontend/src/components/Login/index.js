import React from "react";
import { useState, useEffect, useCallback, useContext } from "react";
import { BoleanContext, tokenContext } from "../../App";
import { setBoleanContext } from "../../App";
import Dashboard from "../Dashboard";
import { settokenContext } from "../../App";
//import { BoleanContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import "./style.css";

const Login = () => {
  const navigate = useNavigate();

  // const SetToken = useContext(settokenContext);
  // const token = useContext(tokenContext);
  // const setBoleanCon = useContext(setBoleanContext);
  const BoleanCon = useContext(BoleanContext);
  const token = BoleanCon.token;
  const SetToken = BoleanCon.setToken;
  const SetBoleanCon = BoleanCon.setIsLoggedIn;
  const tru = BoleanCon.BoleanCon;
  //console.log("settt", useContext(tokenContext));
  //console.log("settt", useContext(tokenContext)).token

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [message, setMessage] = useState("");
  const loginFun = () => {
    axios
      .post("http://localhost:5000/login/", {
        email,
        password,
        // role: ADMIN,
      })
      .then((response) => {
        
        setMessage(response.data.message);
        SetToken(response.data.token);
        SetBoleanCon(true);
        

        {
          navigate("/Dashboard");
        }
      })
      .catch((err) => {
        setMessage(err.response.data.message);
        SetBoleanCon(false);
        // console.log(err);
      });
  };

  return (
    <div className="logDiv">
      <h1> Login </h1>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type={"text"}
        placeholder={"Email"}
      ></input>

      <input
        onChange={
          (e) => {
            setpassword(e.target.value);
          }

          //navigate("/dashpord")
        }
        type={"password"}
        placeholder={"Password"}
      ></input>
      <button className="btnlogin" onClick={loginFun}>
        {" "}
        login
      </button>
      {tru ? (
        <div>
          <h3 className="msqlogon">{message}</h3>
        </div>
      ) : (
        <h3 className="msqfalse">{message}</h3>
      )}
    </div>
  );
};
export default Login;
