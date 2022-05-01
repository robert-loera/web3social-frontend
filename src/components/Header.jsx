// this is to better display the title and logout button

import { useContext } from "react";
import { UserContext } from "../context/UserContext";

// takes in title
const Header = ({title}) => {
  // we need the token from userContext.jsx
  const [token, setToken] = useContext(UserContext)

  // create function to handle logout
  const handleLogout = () => {
    setToken(null)
  }
  // return html
  return (
    <div className="has-text-centered m-6">
      <h1 className="title">{title}</h1>
      {/* logout button only displayed when user is logged in */}
      {/* if token exist display the logout button*/}
      {token && (<button className="button" onClick={handleLogout}>Logout</button>)}
    </div>
  )
}

export default Header