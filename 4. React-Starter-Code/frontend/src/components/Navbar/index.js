import { Link, useNavigate } from "react-router-dom";
import Register from "../Register";
import { useState, useContext } from "react";
import { BoleanContext } from "../../App";
import "./style.css";

const Navbar = () => {
  const navigate = useNavigate();
  const isTuree = useContext(BoleanContext);
  const isTure = isTuree.isLoggedIn;
  const settrue = isTuree.setIsLoggedIn;
  const settoken=isTuree.setToken
  //isLoggedIn,setIsLoggedIn
  return !isTure ? (
    <div className="navDiv">
      {/* <Link to={"/Register"}>regerser</Link> */}
      <div
        className="regNav"
        onClick={() => {
          navigate("/Register");
        }}
      >
        {" "}
        Register
      </div>
      <div
        className="logNav"
        onClick={() => {
          navigate("/Login");
        }}
      >
        Login
      </div>
      <div
        className="bakNav"
        onClick={() => {
          navigate(-1);
        }}
      >
        GO Back
      </div>
    </div>
  ) : (
    <div className="dasDiv navDiv">
      <div
        className="DashNav"
        onClick={() => {
          navigate("/Dashboard");
        }}
      >
        {" "}
        Dashboard
      </div>
      <div
        className="logNav"
        onClick={() => {
          navigate("/AddArticle");
        }}
      >
        AddArticle
      </div>
      <div
        className="bakNav"
        onClick={() => {
          navigate(-1);
        }}
      >
        GO Back
      </div>
      <div
        className="logoutDiv"
        onClick={() => {
          navigate("/login");
          settrue(false);
          settoken(null)
        }}
      >
        Log out
      </div>
    </div>
  );
};
export default Navbar;
