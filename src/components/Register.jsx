// File for creating the form and handle the mission

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import ErrorMessage from "./ErrorMessage";
import { StyledForm, Styledh1, StyledLabel, StyledInput } from "./Container.style";



// create component
const Register = (className) => {
  // need these 5 for a user to login
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmationPassword, setConfirmationPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
    // still need to use the setToken from register file to set token if login successfull (able to only get setToken w out the token variable as well)
  // w/ this useContext(UserContext) we get the values passed from the provider which is the setToken variable
  const [, setToken] = useContext(UserContext)

  // helper function to submit the data from our form to API
  const submitRegistration = async () => {
    console.log('inside submit function')
    const requestOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({email: email, username: username, password: password })
    }

    // now make the request
    const response = await fetch("https://web3socialz.herokuapp.com/users/", requestOptions)

    const data = await response.json()

    console.log('hello')

    // if the response is not ok set the error message
    if (!response.ok){
      console.log('user create error')
      setErrorMessage(data.detail)
    }
    else{
      console.log('User created properly')
    }
  }

// login helper function
const Login = async () => {
  // we wait for the create user function to be run before we login
  await submitRegistration()
  console.log('inside login function')
  console.log(email + password)
  const requestOptions = {
    method: "POST",
    headers: {"Content-Type": "application/x-www-form-urlencoded"},
    body: JSON.stringify(`grant_type=&username=${email}&password=${password}&scope=&client_id=&client_secret=`)
  }

  // now make the request to the login route
  const response = await fetch("https://web3socialz.herokuapp.com/login", requestOptions)
  const data = await response.json()

  if (!response.ok){
    console.log('login unsuccessful')
    setErrorMessage(data.detail)
  }
  else{
    setToken(data.access_token)
    console.log('user signed in')
  }
}

  // function to handle the submit
  const handleSubmit = (e) => {
    // this just prevents html to do its own default actions on the form
    e.preventDefault()
    // check to make sure passwords r equal and correct length
    if (password === confirmationPassword && password.length >= 8) {
      // run the login  function above
      Login()
    }
    else {
      setErrorMessage("Invalid password match or password length")
    }
  }



  return (
    // the styling for our form
    <div className="column">
      {/* when the form is submit run the function */}
      <StyledForm className="box" onSubmit={handleSubmit}>
        <Styledh1 className="title has-text-centered">Register</Styledh1>
        <div className="field">
          <StyledLabel className="label">Email Address</StyledLabel>
          <div className="control">
            <StyledInput
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
          <StyledLabel className="label">Username</StyledLabel>
          <div className="control">
            <StyledInput
              type="username"
              placeholder="Enter username"
              value={username}
              // when the input changes run this e=event
              onChange={(e) => setUsername(e.target.value)}
              className="input"
              required/>
          </div>
        </div>
        <div className="field">
          <StyledLabel className="label">Password</StyledLabel>
          <div className="control">
            <StyledInput
              type="password"
              placeholder="Enter password"
              value={password}
              // when the input changes run this e=event
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              required/>
          </div>
        </div>
        <div className="field">
          <StyledLabel className="label">Confirm Password</StyledLabel>
          <div className="control">
            <StyledInput
              type="password"
              placeholder="Enter password"
              value={confirmationPassword}
              // when the input changes run this e=event
              onChange={(e) => setConfirmationPassword(e.target.value)}
              className="input"
              required/>
          </div>
        </div>
        {/* error message from other file passing our own param*/}
        <ErrorMessage message={errorMessage}/>
        <br />
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <div>
            <button className="button is-primary" type="submit">Register</button>
          </div>
          <div>
            <p>Already have an account?
               <span >
                {/*put router link here*/}
                <Link to="/login"> Login</Link>
              </span> </p>
          </div>
        </div>
      </StyledForm>
    </div>

  )
}

// export so we can call in app
export default Register