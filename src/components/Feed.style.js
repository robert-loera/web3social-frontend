import styled from "styled-components"
import * as FaIcons from "react-icons/fa";

export const SFeed = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 29px;
  height: 100vh;
  overflow-y: scroll;
  margin: auto;
  width: 65vw;
  padding: 10px;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar{
    display: none;
  }
`

export const SPostContainer = styled.div`
  /* background-color: darkcyan; */
  background-color: #141d26;
  width: 60vw;
  border-radius: 10px;
  margin-left: 0px;
  padding-left: 10px;
  font-size: 1.9vw;
  display: flex;
  padding-right: 8px;
`

export const SHandle = styled.p`
  color: white;
  font-size: 17px;
  padding-left: 6px;
  padding-top: 4px;
  font-family: 'Courier New', Courier, monospace;
  margin-bottom: 5px;
  display: flex;
`

export const SContent = styled.p`
  color: white;
  font-size: 17px;
  padding-left: 16px;
  font-family: 'Courier New', Courier, monospace;
  margin-top: 1px;
  margin-bottom: 3px;
  line-height: 21px;
`

export const SProfilePhoto = styled(FaIcons.FaAtom)`
  margin-top: -5px;
  margin-right: 5px;
  height: 35px;
  color: darkcyan;
`

export const SArrowUp = styled(FaIcons.FaArrowUp)`
  position: absolute;
  height: 35px;
  width: 15px;
  color: gray;
  /* border: 1px solid red; */
  right: 17vw;
`
export const SFooter = styled.div`
  display: flex;
  height: 40px;
  /* border: 1px solid red; */
`

export const SArrowDown = styled(FaIcons.FaArrowDown)`
  position: absolute;
  height: 35px;
  width: 15px;
  color: gray;
  /* border: 1px solid red; */
  right: 22vw;
  cursor: pointer;
  :visited{
    background-color: red;
  }
`

export const SComment = styled(FaIcons.FaComments)`
  color: gray;
  position: absolute;
  height: 35px;
  width: 19px;
  right: 26.5vw;
`

export const SButton = styled.button`
  color: red;
  width: 0px;
  height: 0px;
  background-color: #141d26;
  border: none;
`

export const SAddIcon = styled(FaIcons.FaPlus)`
  position: absolute;
  right: 38px;
  bottom: 52px;
  width: 33px;
  height: 40px;
  color: darkcyan;
  /* border: 1px solid red; */
`

export const SDiv = styled.div`
  width: 43vw;
  max-width: 43vw;
  margin: auto;
`

export const SCreatePostButton = styled.button`
  cursor: pointer;
`
export const STextArea = styled.textarea`
  color: black;
  height: 200px;
  background-color: #CECCCC;
  border: 0px;
  resize: none;
`

export const SFormFooter = styled.footer`
  background-color: #CECCCC;
`

export const SFormButton = styled.button`
  background-color: #03A062;
  color: white;
  width: 100%;
  height: 150%;
  border-radius: 10px;
  &:disabled{
    background-color: gray;
  }
  &:hover{
    cursor: pointer;
  }
`