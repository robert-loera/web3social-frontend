// File for creating the form and handle the mission

import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import ErrorMessage from "./ErrorMessage";




// create component
const Login = () => {
  // need these 5 for a user to login
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
    // still need to use the setToken from register file to set token if login successfull (able to only get setToken w out the token variable as well)
  // w/ this useContext(UserContext) we get the values passed from the provider which is the setToken variable
  const [, setToken] = useContext(UserContext)

  // helper function to submit the data from our form to API
  const submitLogin = async () => {
    console.log('inside submit login function')
    const requestOptions = {
      method: "POST",
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      body: JSON.stringify(`grant_type=&username=${email}&password=${password}&scope=&client_id=&client_secret=`)
    }

    // now make the request
    const response = await fetch("http://127.0.0.1:8000/login", requestOptions)

    const data = await response.json()

    console.log('hello')

    // if the response is not ok set the error message
    if (!response.ok){
      console.log('user login error')
      setErrorMessage(data.detail)
    }
    else{
      setToken(data.access_token)
      console.log('Login successful')
    }
  }

  // function to handle the submit
  const handleSubmit = (e) => {
    // this just prevents html to do its own default actions on the form
    e.preventDefault()
    // check to make sure passwords r equal and correct length
    if (password.length >= 8) {
      // run the login  function above
      submitLogin()
    }
    else {
      setErrorMessage("Password length invalid")
    }
  }



  return (
    // the styling for our form
    <div className="column">
      {/* when the form is submit run the function */}
      <form className="box" onSubmit={handleSubmit}>
        <h1 className="title has-text-centered">Login</h1>
        <div className="field">
          <label className="label">Email Address</label>
          <div className="control">
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              // when the input changes run this e=event
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              required/>
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              // when the input changes run this e=event
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              required/>
          </div>
        </div>
        {/* error message from other file passing our own param*/}
        <ErrorMessage message={errorMessage}/>
        <br />
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <div>
            <button className="button is-primary" type="submit">Login</button>
          </div>
          <div>
            <p>Don't have an account?
               <span >
                {/*put router link here*/}
                <a href="/Register"> Sign up</a>
              </span> </p>
          </div>
        </div>
      </form>
    </div>

  )
}

// export so we can call in app
export default Login