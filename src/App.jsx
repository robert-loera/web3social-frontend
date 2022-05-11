import { useContext, useEffect, useState } from "react";
import Register from "./components/Register";
import Header from "./components/Header";
import Login from "./components/Login";
import { UserContext } from "./context/UserContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppContainer } from "./components/Container.style";
import Sidebar from "./components/Sidebar";

const App = () => {
  // create message we will be getting from root endpoint
  const [message, setMessage] = useState("")
  // import token from UserContext
  const [token] = useContext(UserContext)
  
  // function to make request to API
  const getWelcomeMessage = async () => {
    // create request options
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    }
    // make the actual request
    const response = await fetch("http://127.0.0.1:8000/", requestOptions)
    const data = await response.json()

    if (!response.ok) {
      console.log("something went wrong")
    }
    else{
      // assign the message from api to message
      setMessage(data.message)
    }
  }

  useEffect(() => {
    getWelcomeMessage()
  }, [])

  
  return (
    <AppContainer>
      <Router>
        <Header title={message}></Header>
        <div className="columns" >
          <div className="column"></div>
          <div className="column m-5 is-two-thirds">
            {/* if the token does not exist return the register*/}
            {
              !token ? (
                <div className="columns">
                  <Routes>
                    <Route exact path="/" element={<Register />} />
                    <Route exact path="/login" element={<Login />} />
                  </Routes>
                </div>
              // if the token exists return placeholder called table
              ) : (
                <Sidebar/>
              )
            }
          </div>
          <div className="column"></div>
        </div>
      </Router>
    </AppContainer>
  );
}

export default App;
