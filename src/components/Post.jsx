import React, { useContext, useEffect, useState } from 'react'
import { SArrowUp, SPostContainer, SHandle, SContent, SProfilePhoto } from "./Feed.style"
import { SFooter, SArrowDown, SComment, SButton } from './Feed.style'
import moment from 'moment'


const Post = () => {
  const [buttonColor, setButtonColor] = useState('orange')
  const [posts, setPosts] = useState([])

  const FetchPosts = async () => {
    const requestOptions = {
      method: "GET",
      headers: {"Content-Type": "application/json"}
    }

    const response = await fetch('http://127.0.0.1:8000/posts/', requestOptions)

    const data = await response.json()

    // if the response is not ok set the error message
    if (!response.ok){
      console.log('Error fetching posts')
    }
    else{
      console.log('successfully fetched posts')
      setPosts(data)
    }

  }
  
  useEffect(() => {
    FetchPosts()
  }, [])

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
          
          <SHandle key={post.Post.owner_username}><SProfilePhoto></SProfilePhoto>@{post.Post.owner_username}</SHandle>
          <div className="body">
            {posts ? (
              <>
                <div key={post.Post.id}>
                  <SContent key={post.Post.id}>{post.Post.content}</SContent>
                  <SFooter>
                  <SHandle key={post.Post.created_at}>{moment(post.Post.created_at).format("M/D/YY, h:mm a")}</SHandle>
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