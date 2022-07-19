
import { useState } from "react";
import axios from "axios";
import './loading-axios-get.css'

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {

      setIsLoading(true);
    axios.get('/get-data')
          .then((response) => {
            setIsLoading(false);
            console.log("the response is: " +response.data);
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
    <div className="loader"/>
  )
}

export default App;
