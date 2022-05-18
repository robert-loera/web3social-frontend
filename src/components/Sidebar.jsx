import 'react-pro-sidebar/dist/css/styles.css';
import { StyledSidebar } from './Container.style';
import { StyledLink } from './Sidebar.style';
import { SIcon } from './Sidebar.style';
import { UserContext } from "../context/UserContext";
import { useContext, useEffect, useState } from 'react';
import { SProfile } from './Sidebar.style';


const Sidebar = () => {
    const [token,] = useContext(UserContext)
    const [username, setUsername] = useState("")

  // get username to show in the sidebar
  useEffect(() => {
    const FetchUsername = async () => {
      const requestOptions = {
        method: "GET",
        headers: {"Content-Type": "application/json",
                  Authorization: "Bearer " + token},

      }
      // make the request to the API
      const response = await fetch("http://127.0.0.1:8000/usersme", requestOptions)

      const data = await response.json()

      // if the response is not ok set the error message
      if (!response.ok){
        console.log('Error fetching username')
      }
      else{
        setUsername(data.username)
        console.log('successfully fetched username')
      }
      document.getElementById("profile").innerHTML = username
    }
    FetchUsername()
  }, )


  return (
    <StyledSidebar>
      <StyledLink to="#" top='22%'>Notifications</StyledLink>
      <StyledLink to="#" top='30%'>Explore</StyledLink>
      <StyledLink to="#" top='38%'>Messages</StyledLink>
      <StyledLink to="#" top='46%'>Watchlist</StyledLink>
      <StyledLink to="#" top='54%'>My Projects</StyledLink>
      <SIcon size={100} />
      <SProfile to={"/profile/"+username }><span id='profile'></span> </SProfile>
    </StyledSidebar>
  )
}

export default Sidebar