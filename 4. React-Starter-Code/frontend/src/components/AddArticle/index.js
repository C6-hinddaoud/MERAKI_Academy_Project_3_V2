import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { tokenContext } from "../../App";
import { BoleanContext } from "../../App";
const AddArticle = () => {
  //const token = useContext(tokenContext);
  const BoleanCon = useContext(BoleanContext);
  const token=BoleanCon.token
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const AddNewArticle = () => {
    console.log("mygi", token);
    console.log("mmnmn", title);
    console.log("of", description);
    axios
      .post(
        `http://localhost:5000/articles`,
        {
          title,
          description,
          //author:token.userId
        },
        {
          headers:{
            authorization: "Bearer " + token
          }
        }
      )
      .then((response) => {
        console.log("hind");
        console.log(response);
        setMessage(response.data.message)
      })
      .catch((err) => {
        setMessage( err.response.data.message)
        console.log("pppppppp", token);
        console.log("mmnmn", title);
        console.log("rasha");
        console.log(err);
      });
  };

  
  return (
    <>
      <div>AddArticle</div>
      <div>
      <input onChange={(e)=>{setTitle(e.target.value)} }  type={"text"} placeholder={"text"}></input>

      <input onChange={(e)=>{setDescription(e.target.value)} }  type={"text"} placeholder={"description"}></input>
        <button onClick={AddNewArticle}> AddArtical</button>
       <div> <label>{message}</label></div>
      </div>
    </>
  );
};

export default AddArticle;
