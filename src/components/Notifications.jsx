import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { NotiFeed, SNotiContainer, SNotiBody, SLink, SDate } from './Notifications.style'
import { useState } from 'react'
import { UserContext } from "../context/UserContext";
import { useContext } from 'react';
import moment from 'moment'

function Notifications() {
  const [notis, setNotis] = useState([])
  const [token, setToken] = useContext(UserContext)

  const FetchNotifications = async () => {
    const requestOptions = {
      method: "GET",
      headers: {"Content-Type": "application/json",
      Authorization: "Bearer " + token},
      
    }

    const response = await fetch('http://web3socialz.herokuapp.com/notifications/', requestOptions)

    const data = await response.json()

    if (!response.ok){
      console.log('Error fetching notifications')
    }
    else{
      console.log('successfully fetched notifications')
      setNotis(data)
    }

  }

  useEffect(() => {
    FetchNotifications()
  },[])
  console.log(notis)
  
  return (
    <>
    <Sidebar/>
    {notis.length === 0
    ?
    <NotiFeed>
      <h1>No Notifications</h1>
    </NotiFeed>
    :
    <NotiFeed>
      {notis.map(noti => {
        return(
          <SNotiContainer>
            {(() => {
              if (noti.type === 'comment'){
                return(
                  <>
                <SNotiBody><SLink to={"/profile/"+noti.username}>@{noti.username}</SLink> commented on your post</SNotiBody>
                <SDate>{moment(noti.created_at).format("M/D/YY, h:mm a")}</SDate>
                </>
                )
              }
              else if (noti.type === "vote"){
                return(
                  <>
                <SNotiBody><SLink to={"/profile/"+noti.username}>@{noti.username}</SLink> voted on your post</SNotiBody>
                <SDate>{moment(noti.created_at).format("M/D/YY, h:mm a")}</SDate>
                </>
                )
              }
              else{
                return(
                  <>
                <SNotiBody><SLink to={"/profile/"+noti.username}>@{noti.username}</SLink> has given you rep</SNotiBody>
                <SDate>{moment(noti.created_at).format("M/D/YY, h:mm a")}</SDate>
                </>
                )
              }
            })()}
          </SNotiContainer>
        )
      })}
    </NotiFeed>
    } 
    </>
  )
}

export default Notifications