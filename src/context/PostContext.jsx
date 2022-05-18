import { createContext, useEffect, useState } from "react"

export const PostsContext = createContext()

export const PostProvider = (props) => {
  const [posts, setPosts] = useState([])

    useEffect(() => {
    const FetchPosts = async () => {
      const requestOptions = {
        method: "GET",
        headers: {"Content-Type": "application/json"}
      }

      const response = await fetch('http://127.0.0.1:8000/posts/', requestOptions)

      const data = await response.json()

            // if the response is not ok set the error message
      if (!response.ok){
        console.log('Error fetching posts inside context')
      }
      else{
        setPosts(data)
        console.log('successfully fetched posts inside context')
      }
      // console.log(posts)

    }
    FetchPosts()
  }, [])

  return(
        // token and setToken can now be accessed by all children
    <PostsContext.Provider value={[posts, setPosts]}>
      {/* use props.children when dont know children ahead of time */}
      {/* props is passed in the function call */}
      {props.children}
    </PostsContext.Provider>
  )

}