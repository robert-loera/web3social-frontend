// represents div that wraps around whole page
import styled from "styled-components"

export const StyledForm = styled.form`
  background-color: #141d26;
  font-family: 'Courier New', Courier, monospace;
  color: #03A062;
`

export const Styledh1 = styled.h1`
  color: #03A062;
  font-family: 'Courier New', Courier, monospace;
  padding-top: 19px;
  /* position: absolute; 
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
  width: 100%; */
`
export const StyledLabel = styled.label`
  color: #03A062;
  font-family: 'Courier New', Courier, monospace;
`

export const StyledInput = styled.input`
  background-color: black;
  font-family: 'Courier New', Courier, monospace;
  color: white;
  border: black;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: gray;
  }
  :-ms-input-placeholder {
     color: red;
  }
`

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #243447;
  padding: 1px;
  margin: 0;
  overflow: hidden;
`

export const StyledSidebar = styled.div`
  height: 100%;
  width: 18vw;
  position: absolute;
  left: 0;
  /* left: -9%; */
  top: 0;
  padding-top: 50px;
  /* padding-left: 3vw; */
  background-color: #141d26;
`
export const SHeader = styled.div`
  text-align: center;
  height: 10vw;
  position: relative;
  padding-right: 15px;
`

export const SLogoutButton = styled.button`
  position: relative;
  height: 25px;
  width: 11vw;
  border-radius: 100px;
  color: white;
  background-color: darkcyan;
  border: 0px;
  bottom: -19px;
  float: right;
`

export const StyledHeader = styled.h1`
  color: #03A062;
  font-family: 'Courier New', Courier, monospace;
  padding-top: 19px;
  position: absolute; 
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
  width: 100%;
`