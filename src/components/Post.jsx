import React, { useContext, useEffect, useState } from 'react'
import { SArrowUp, SPostContainer, SHandle, SContent, SProfilePhoto } from "./Feed.style"
import { SFooter, SArrowDown, SComment, SButton } from './Feed.style'
import moment from 'moment'
import { SLink } from './Notifications.style'


const Post = () => {
  const [buttonColor, setButtonColor] = useState('gray')
  const [posts, setPosts] = useState([])

  const FetchPosts = async () => {
    const requestOptions = {
      method: "GET",
      headers: {"Content-Type": "application/json"}
    }

    const response = await fetch('https://web3socialz.herokuapp.com/posts/?limit=25', requestOptions)

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

  const changeColor = (id) => {
    if (buttonColor === 'gray'){
      setButtonColor('red')
    }
    else{setButtonColor('gray')}
  }


  return (

    <>
    {posts.map(post => {
      return (
      <SPostContainer className="post">
        <div className="username">
          
          <SHandle key={post.Post.owner_username}><SProfilePhoto></SProfilePhoto><SLink to={"/profile/"+post.Post.owner_username}>@{post.Post.owner_username}</SLink></SHandle>
          <div className="body">
            {posts ? (
              <>
                <div key={post.Post.id}>
                  <SContent key={post.Post.id}>{post.Post.content}</SContent>
                  <SFooter>
                  <SHandle key={post.Post.created_at}>{moment(post.Post.created_at).format("M/D/YY, h:mm a")}</SHandle>
                  <SArrowUp></SArrowUp>
                  <SButton value={post.Post.id} key={post.Post.image} onClick={() => buttonClicked(post.Post.id)}> 
                    <SArrowDown key={post.Post.id} onClick={() => changeColor(post.Post.id)}
                    style={{color: buttonColor}}/>
                  </SButton>
                  {/* <SComment></SComment> */}
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
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </>
    )
}

export default Post