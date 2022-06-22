import React from 'react'
import { useState } from 'react'
import { SDiv, STextArea, SFormFooter, SFormButton } from './Feed.style'
import { UserContext } from "../context/UserContext";
import { useContext } from 'react';

const CreatePost = ({active, handleModal}) => {
  const [token, setToken] = useContext(UserContext)
  const [content, setContent] = useState("")

  const handleCreatePost = async (e) => {
    e.preventDefault()
    const requestOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json",
      Authorization: "Bearer " + token}, ///this is new production branch
      body: JSON.stringify({content: content})
    }
  
  const response = await fetch('http://web3socialz.herokuapp.com/posts/', requestOptions)

    if (!response.ok){
      console.log('Error creating post')
    }
    else{
      console.log('successfully created post')
      handleModal()
      window.location.reload(false)
    }
  }
  return (
    <div className={`modal ${active && "is-active"}`}>
      <div className="modal-background" onClick={handleModal} ></div>
      <SDiv className="modal-card">
        {/* <header className='modal-card-head has-background-primary-light'>
          <h1 className='modal-card-title'>Create Post</h1>
        </header> */}
        <section className='model-card-body'>
          <form>
            <div className="field">
              {/* <SLabel className="label">Content</SLabel> */}
              <div className="control">
                <STextArea type="text" placeholder='Enter post content'
                  value={content} 
                  onChange={(e) => setContent(e.target.value)}
                  className="input"
                  required
                  />
              </div>
            </div>
          </form>
        </section>
        <SFormFooter className='modal-card-foot'>
          <SFormButton onClick={handleCreatePost} disabled={!content}>Post</SFormButton>
        </SFormFooter>
      </SDiv>
    </div>
  )
}

export default CreatePost