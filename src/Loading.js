import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function Loading() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {

      setIsLoading(true);
    axios.get('/get-data')
          .then((response) => {
            setIsLoading(false);
            console.log("the response is: " +response);
          })
          .catch((error) => {
            console.log("something is wrong : " + error)
          })
          .then(() => {
            console.log(" the call is completed!")
          });

  };
  return (
    <div>
    <button onClick={handleClick}>Get data</button>
    {
      isLoading && <Loader/>
    }
    </div>
  )
}

const Loader = () => {
  return (
    <h3> I am loading.....</h3>
  )
}

export default Loading;
