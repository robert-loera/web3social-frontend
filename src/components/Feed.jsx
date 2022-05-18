import { SFeed } from "./Feed.style"
import Post from "./Post"
import Sidebar from "./Sidebar"

const Feed = () => {
  
  return (
    <>
    <Sidebar/>
    <SFeed>
      <Post/>
    </SFeed>
    </>
  )
}

export default Feed