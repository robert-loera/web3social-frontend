import React from 'react'
import { useParams } from 'react-router-dom'
import { SUsername, SRep, SPfp, SDiv, SError, SProfileFeed } from './Profile.style'
import { SHandle, SProfilePhoto, SPostContainer, SContent} from './Feed.style'
import Sidebar from './Sidebar'
import { useEffect, useState } from 'react'
import moment from 'moment'
import { SArrowUp } from "./Feed.style"
import { SFooter, SArrowDown, SComment, SButton } from './Feed.style'

const Profile = () =>  {
  let { username } = useParams()
  const [dateCreated, setDateCreated] = useState(null)
  const [totalPosts, setTotalPosts] = useState(null)
  const [rep, setRep] = useState(null)
  const [uid, setUid] = useState(null)
  const [posts, setPosts] = useState([])
  const [buttonColor, setButtonColor] = useState('orange')

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
        setUid(data.id)
        console.log('successfully fetched user info')
      }
    }

    const fetchRep = async () => {
      const requestOptions = {
        method: "GET",
        headers : {"Content-Type": "application/json"}
      }

      const response = await fetch("http://127.0.0.1:8000/reputation/"+username, requestOptions)
      const data = await response.json()

      // if the response is not ok set the error message
      if (!response.ok){
        console.log('Error fetching user info')
      }
      else{
        setRep(data.total_rep)
        console.log('successfully fetched user info')
      }
    }
    const fetchPosts = async () => {
      const requestOptions = {
        method: "GET",
        headers: {"Content-Type": "application/json"}
      }

      const response = await fetch("http://127.0.0.1:8000/postsof/"+username, requestOptions)
      const data = await response.json()

      if (!response.ok){
        console.log('Error getting the users posts')
      }
      else{
        setPosts(data)
        console.log('successfully fetched users posts')
      }

    }
    fetchUserInfo()
    fetchPosts()
    fetchRep()
  },[])
  // console.log(posts[0].Post.content)

  const buttonClicked = (num) => {
    console.log(num)
  }

    const changeColor = () => {
    if (buttonColor === 'orange'){
      setButtonColor('green')
    }
    else{setButtonColor('orange')}
  }

  return (
    <>
    <Sidebar></Sidebar>
    <SDiv>
      {/* <h1>{posts[0].Post.content}</h1> */}
      <div>
        <SPfp></SPfp>
      </div>
      {totalPosts === null 
      ?
      <div>
      <SUsername>@{username}</SUsername> 
      <SError>User does not exist</SError>
      </div>
      :
      <>
      <div>
        <SUsername>@{username}</SUsername>
        <SRep>Posts: {totalPosts}</SRep>
        <SRep>Rep: {rep}</SRep>
        <SRep>Join Date: {moment(dateCreated).format("MMM Do YY")}</SRep>
      </div>

      </>
      }
      
    </SDiv>
      <SProfileFeed>
        <SRep>Recent Posts</SRep>
        {posts.map(post => {
          return (
            <SPostContainer>
              <div className="username">
                <SHandle key={post.Post.owner_username}><SProfilePhoto></SProfilePhoto>@{post.Post.owner_username}</SHandle>
                <div className="body">
                  <SContent key={post.Post.id}>{post.Post.content}</SContent>
                  <SFooter>
                    <SHandle key={post.Post.created_at}>
                      {moment(post.Post.created_at).format("MMM Do YY")}
                    </SHandle>
                    <SArrowUp></SArrowUp>
                  <SButton key={post.Post.image} onClick={() => buttonClicked(post.Post.id)}> 
                    <SArrowDown onClick={() => changeColor()}
                    style={{color: buttonColor}}/>
                  </SButton>
                  <SComment></SComment>
                  </SFooter>
                  
                </div>
              </div>
            </SPostContainer>
          )
        })}
      </SProfileFeed>
    </>
  )
}

export default Profile