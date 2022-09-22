import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Link, useActionData, useNavigate } from "react-router-dom";
import Register from "../Register";
import { BoleanContext } from "../../App";
import "./style.css";

const Dashboard = () => {
  const BoleanCon = useContext(BoleanContext);

  const token = BoleanCon.token;
  const articaData = BoleanCon.articaData;
  const setarticaData = BoleanCon.setarticaData;
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

const getallartical=()=>{
    axios
    .get("http://localhost:5000/articles", {
      headers: {
        authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      console.log("hind");
      setarticaData(response.data.articles);
      console.log("am", response.data);
      setUserId(response.data.userId);
      console.log(userId);
      setMessage(response.data.message);
    })
    .catch((err) => {
      setMessage(err.response.data.message);
      console.log("pppppppp", token);

      console.log("rasha");
      console.log(err);
    });
}


  const Delete = (id) => {
    console.log("lkij");
    axios
      .delete(`http://localhost:5000/articles/${id}`)
      .then((response) => {
        console.log("bbhbhbhb");
        console.log("cc", response.data);
        console.log("ll", response.data);
        getallartical()
      })
      .catch((err) => {
        // console.log(id)
        console.log("ahmad");
        throw err;
      });
  };

  const upDate = (id) => {
    console.log("mo");
    axios
      .put(`http://localhost:5000/articles/${id}`, { title, description })
      .then((response) => {
        getallartical()
      })
      .catch((err) => {
        // console.log(id)
        console.log("ahmad");
        throw err;
      });
  };



  useEffect(() => {
    getallartical()
    // axios
    //   .get("http://localhost:5000/articles", {
    //     headers: {
    //       authorization: "Bearer " + token,
    //     },
    //   })
    //   .then((response) => {
    //     console.log("hind");
    //     setarticaData(response.data.articles);
    //     console.log("am", response.data);
    //     setUserId(response.data.userId);
    //     console.log(userId);
    //     setMessage(response.data.message);
    //   })
    //   .catch((err) => {
    //     setMessage(err.response.data.message);
    //     console.log("pppppppp", token);

    //     console.log("rasha");
    //     console.log(err);
    //   });
  }, []);   //upDate//Delete

  const navigate = useNavigate();
  const [comment, setComment] = useState("");
//http://localhost:5000/22/comments/
  const addComment = (id) => {
    console.log("tok", token);
    console.log("id", id);
    axios
      .post(
        `http://localhost:5000/articles/${id}/comments/`,
        {
          comment,
        },
        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        console.log("hind");
        getallartical()
        setMessage(response.data.message);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
        console.log("pppppppp", token);

        console.log("rasha");
        console.log(err);
      });
  };

  return (
    <div className="main div">
      <div>
        {articaData == undefined ? (
          <h1>no artical</h1>
        ) : (
          <div>
            {articaData.map((elem, i) => {
              return (
                <div className="artDiv">
                  <div>
                    <h3>Title:{elem.title}</h3>
                    <p> Description:{elem.description}</p>
                   
{
    elem.comments.map((element)=>{

        return( <p>Comment:{element.comment}</p>)
    })
}






                    {elem.author == userId && (
                      
                      <div className="articalDev">
                        <div>
                        <button className="buttondash"
                          onClick={() => {
                            Delete(elem._id);
                          }}
                        >
                         
                          Delete
                        </button >
                        </div>
                        <div>
                        <button className="buttondash"
                          onClick={() => {
                            upDate(elem._id);
                          }}
                        >
                          
                          update
                        </button>
                        </div>
                        <div>
                        <input
                          onChange={(e) => {
                            setTitle(e.target.value);
                          }}
                          type={"text"}
                          placeholder={"Artical"}
                        ></input>
                        </div>
<div>
                        <textarea
                          onChange={(e) => {
                            setDescription(e.target.value);
                          }}
                          type={"textarea"} 
                          placeholder={"description"}
                          ></textarea>
                          </div>
                      </div>



                    )}

                    
                    {/* <p>{elem._id}</p> */}
                   
                    <div>
                    <input
                      onChange={(e) => {
                        setComment(e.target.value);
                      }}
                      type={"text"}
                      placeholder={"comment"}
                    ></input>

                    <button className="buttondash"
                      onClick={() => {
                        addComment(elem._id);
                      }}
                    >
                      
                      Comment
                    </button>
                  </div>
                     
                  </div>

                 
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default Dashboard;
