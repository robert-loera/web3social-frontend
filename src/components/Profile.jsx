import React from 'react'
import { useParams } from 'react-router-dom'
import { SUsername, SDate } from './Profile.style'
import Sidebar from './Sidebar'
import { useEffect, useState } from 'react'
import moment from 'moment'

const Profile = () =>  {
  let { username } = useParams()
  const [dateCreated, setDateCreated] = useState(null)
  const [totalPosts, setTotalPosts] = useState(null)

  useEffect(() => {
    const fetchUserInfo = async () => {
      const requestOptions = {
        method: "GET",
        headers : {"Content-Type": "application/json"}
      }

      const response = await fetch("http://127.0.0.1:8000/users/"+username, requestOptions)
      const data = await response.json()

      // if the response is not ok set the error message
      if (!response.ok){
        console.log('Error fetching user info')
      }
      else{
        setDateCreated(data.created_at)
        setTotalPosts(data.total_posts)
        console.log('successfully fetched user info')
      }
    }
    fetchUserInfo()
  })

  return (
    <>
    <Sidebar></Sidebar>
    <SUsername>@{username}</SUsername>
    <SDate>Member since: {moment(dateCreated).format("MMM Do YY")}</SDate>
    <SUsername>Posts: {totalPosts}</SUsername>
    </>
  )
}

export default Profile