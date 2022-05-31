import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { NotiFeed, SNotiContainer, SNotiBody } from './Notifications.style'
import { useState } from 'react'
import { UserContext } from "../context/UserContext";
import { useContext } from 'react';

function Notifications() {
  const [notis, setNotis] = useState([])
  const [token, setToken] = useContext(UserContext)

  const FetchNotifications = async () => {
    const requestOptions = {
      method: "GET",
      headers: {"Content-Type": "application/json",
      Authorization: "Bearer " + token},
      
    }

    const response = await fetch('http://127.0.0.1:8000/notifications/', requestOptions)

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
                <SNotiBody>@{noti.username} commented on your post</SNotiBody>
                )
              }
              else if (noti.type === "vote"){
                return(
                <SNotiBody>@{noti.username} voted on your post</SNotiBody>
                )
              }
              else{
                return(
                <SNotiBody>@{noti.username} has given you rep</SNotiBody>
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