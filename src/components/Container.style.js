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
`

export const Form = styled.div`
  background-color: #414a4c;
`