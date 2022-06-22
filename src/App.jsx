import { useContext, useEffect, useState } from "react";
import Register from "./components/Register";
import Header from "./components/Header";
import Login from "./components/Login";
import CreatePost from "./components/CreatePost";
import { UserContext } from "./context/UserContext";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { AppContainer } from "./components/Container.style";
import Sidebar from "./components/Sidebar";
import Messages from "./components/Messages";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import Notifications from "./components/Notifications";

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
    const response = await fetch("https://web3socialz.herokuapp.com/", requestOptions)
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
              // if the token exists return home page
              ) : (
                <>
                {/* <Feed/> */}
                <Routes>
                  <Route exact path="/home" element={<Feed/>}/>
                  <Route exact path="/profile/:username" element={<Profile/>}/>
                  <Route exact path="/notifications" element={<Notifications/>}/>
                  <Route exact path="/create/post" element={<CreatePost/>}/>
                  <Route exact path="/messages" element={<Messages/>}/>
                </Routes>
                </>
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
