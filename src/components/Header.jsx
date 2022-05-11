// this is to better display the title and logout button

import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { StyledHeader } from "./Container.style";
import { SLogoutButton } from "./Container.style";
import { SHeader } from "./Container.style";


// takes in title
const Header = ({title}) => {
  // we need the token from userContext.jsx
  const [token, setToken] = useContext(UserContext)
  console.log(token)


  // create function to handle logout
  const handleLogout = () => {
    setToken(null)
  }
  // return html
  return (
    <SHeader>
      <StyledHeader className="title">{title}</StyledHeader>
      {/* logout button only displayed when user is logged in */}
      {/* if token exist display the logout button*/}
      {token && (<SLogoutButton className="button" onClick={handleLogout}>Logout</SLogoutButton>)}
    </SHeader>
  )
}

export default Header