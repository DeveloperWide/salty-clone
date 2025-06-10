import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


function App(){
  let [message , setMessage] = useState("");
  useEffect(() =>{
    axios.get("/api/home").then((res) => {
      console.log(res.data.message)
      setTimeout(() => {
        setMessage(res.data.message);
      }, 2000)
    }).catch((err) => {
      console.log(err)
    })
  })
  return (
    <div>
      <h2>{message.trim() !== "" ? message : "Hello Everyone"}</h2>
    </div>
  )
}

export default App;