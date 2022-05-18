import React, { useContext, useEffect, useState } from 'react'
import { SArrowUp, SPostContainer, SHandle, SContent, SProfilePhoto } from "./Feed.style"
import { SFooter, SArrowDown, SComment, SButton } from './Feed.style'
import moment from 'moment'
import { UserContext } from '../context/UserContext'
import * as FaIcons from "react-icons/fa";


const Post = () => {
  const [username, setUsername] = useState("")
  const [time, setTime] = useState("")
  const [content, setContent] = useState("")
  const [votes, setVotes] = useState("")
  const [buttonColor, setButtonColor] = useState('orange')
  const [token] = useContext(UserContext)

  const [posts, setPosts] = useState([])

  const FetchPosts = async () => {
    const requestOptions = {
      method: "GET",
      headers: {"Content-Type": "application/json"}
    }

    const response = await fetch('http://127.0.0.1:8000/posts/', requestOptions)

    const data = await response.json()
    const list = [1, 2, 3, 4]
    console.log('type of list' + typeof(list))
    console.log('type of data' + typeof(data))
    console.log('type of posts' + typeof(posts))
    console.log('data content =>' + data)
    console.log('posts content =>' + posts)


    // if the response is not ok set the error message
    if (!response.ok){
      console.log('Error fetching posts')
    }
    else{
      console.log('successfully fetched posts')
      setPosts(data)
    }
    // document.getElementById('body').innerHTML = data[1].Post.content

  }
  
  useEffect(() => {
    FetchPosts()
  }, [])
  // console.log('posts outside of the function' + posts[1].Post.content)
  // const display = posts[2].Post.content

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
    {posts.map(post => {
      return (
      <SPostContainer className="post">
        <div className="username">
          
          <SHandle key={post.Post.owner.username}><SProfilePhoto></SProfilePhoto>@{post.Post.owner.username}</SHandle>
          <div className="body">
            {posts ? (
              <>
                <div key={post.Post.id}>
                  <SContent key={post.Post.id}>{post.Post.content}</SContent>
                  <SFooter>
                  <SHandle key={post.Post.created_at}>{moment(post.Post.created_at).format("MMM Do YY")}</SHandle>
                  <SArrowUp></SArrowUp>
                  <SButton key={post.Post.image} onClick={() => buttonClicked(post.Post.id)}> 
                    <SArrowDown onClick={() => changeColor()}
                    style={{color: buttonColor}}/>
                  </SButton>
                  <SComment></SComment>
                  </SFooter>
                </div>
              </>
            ) : (
              <h1>posts dne</h1>
            )
            }
          </div>
        </div>
      </SPostContainer>)})}
    </>
    )
}

export default Post