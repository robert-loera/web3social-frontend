import { SFeed, SAddIcon, SCreatePostButton } from "./Feed.style"
import Post from "./Post"
import Sidebar from "./Sidebar"
import CreatePost from "./CreatePost"
import { useState } from "react"

const Feed = () => {
  const [active, setActive] = useState(false)

  const handleModal = () => {
    setActive(!active)
    console.log('clicked')
  }
  
  return (
    <>
    <Sidebar/>
    <SFeed>
      <Post/>
    </SFeed>
    <CreatePost 
      active={active}
      handleModal={handleModal}
    />
    <SCreatePostButton onClick={() => setActive(true)}><SAddIcon /></SCreatePostButton>
    </>
  )
}

export default Feed