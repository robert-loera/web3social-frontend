import 'react-pro-sidebar/dist/css/styles.css';
import { StyledSidebar } from './Container.style';
import { StyledLink, SUnfinishedLink } from './Sidebar.style';
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
        mode: 'no-cors',
        method: "GET",
        headers: {"Content-Type": "application/json",
                'Authorization': "Bearer " + token},

      }
      // make the request to the API
      const response = await fetch("https://web3socialz.herokuapp.com/usersme", requestOptions)

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
      <StyledLink to="/notifications" top='30%'>Notifications</StyledLink>
      <StyledLink to="/home" top='22%'>Home</StyledLink>
      <SUnfinishedLink to="#" top='38%'>Messages</SUnfinishedLink>
      <SUnfinishedLink to="#" top='46%'>Watchlist</SUnfinishedLink>
      <SUnfinishedLink to="#" top='54%'>My Projects</SUnfinishedLink>
      <SIcon size={100} />
      <SProfile to={"/profile/"+username }><span id='profile'></span> </SProfile>
    </StyledSidebar>
  )
}

export default Sidebar