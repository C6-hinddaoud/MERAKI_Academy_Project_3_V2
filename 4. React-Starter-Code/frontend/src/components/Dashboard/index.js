import axios from "axios"
import { useState } from "react"
import { Link,useNavigate} from "react-router-dom"
import Register from "../Register"

import './style.css'

const Dashboard=()=>{
const navigate=useNavigate()
const[comment,setComment]=useState("")

const addComment=()=>{
axios.post(`/${1}/comments`,{
    comment,
  commenter:1
}).then(()=>{})
.catch((err)=>{
    throw err;
})



}
    return(

        
<div className="navDiv">
    <div>

      


<input onChange={(e)=>{setComment(e.target.value)} }  type={"text"} placeholder={"comment"}></input>

      
      <button onClick={addComment}> Comment</button>
    </div>


</div>

    )
}
export default Dashboard