import axios from "axios"
import { useEffect, useState,useContext } from "react"
import { Link,useActionData,useNavigate} from "react-router-dom"
import Register from "../Register"
import { BoleanContext } from "../../App"
import './style.css'

const Dashboard=()=>{
    const BoleanCon = useContext(BoleanContext);
    
    const token=BoleanCon.token
    const articaData=BoleanCon.articaData
    const setarticaData=BoleanCon.setarticaData
    const [message, setMessage] = useState("");
    const[userId,setUserId]=useState("");
useEffect(()=>{

axios.get("http://localhost:5000/articles",{
    headers:{
        authorization: "Bearer " + token
      }  
})
.then((response) => {
    console.log("hind");
    setarticaData(response.data.articles);
    console.log("am",response.data)
    setUserId( response.data.userId )
    console.log(userId)
    setMessage(response.data.message)
  })
  .catch((err) => {
    setMessage( err.response.data.message)
    console.log("pppppppp", token);
   
    console.log("rasha");
    console.log(err);
  });



},[])



const navigate=useNavigate()
const[comment,setComment]=useState("")

const addComment=()=>{
axios.post(`"http://localhost:5000/632a467e5378a8b47a592414/comments`,{
    comment,
  
} ,{headers:{
    authorization: "Bearer " + token
  } } 
)
.then((response) => {
console.log("hind");
setarticaData(response.data.articles);
console.log("am",response.data)
setUserId( response.data.userId )
console.log(userId)
setMessage(response.data.message)
})
.catch((err) => {
setMessage( err.response.data.message)
console.log("pppppppp", token);

console.log("rasha");
console.log(err);
});



}
    return(

        
<div className="navDiv">
    <div>

    <div>

    { articaData.map((elem,i)=>{
      return( 
      <div className="artDiv">
      <div >
 <h3>title:{ elem.title}</h3>   
<p> description:{elem.description  }</p>
<button onClick={addComment}> Delete</button>
<button onClick={addComment}> update</button>
<p>{elem._id}</p>
{elem.comments.map((element)=>{
   return {element}
})}
      </div>
      
      
      <div>
      <input onChange={(e)=>{setComment(e.target.value)} }  type={"text"} placeholder={"comment"}></input>

      
<button onClick={addComment}> Comment</button>
      </div>
      </div>
      )
      

})}

    </div>


    </div>


</div>

    )
}
export default Dashboard