import styled from "styled-components"
import { Link } from "react-router-dom"

export const NotiFeed = styled.div`
  position: relative;
  /* border: 1px solid red; */
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
`

export const SNotiContainer = styled.div`
  background-color: #141d26;
  width: 60vw;
  margin-left: 0px;
  padding-left: 10px;
  font-size: 1.9vw;
  /* display: flex; */
  padding-right: 8px;
  height: 14%;
  border-radius: 10px;
`

export const SNotiBody = styled.h1`
  color: white;
  font-size: 17px;
  font-family: 'Courier New', Courier, monospace;
  margin-top: 10px;
  margin-bottom: 3px;
  line-height: 21px;
  padding-top: 14px;
  text-align: center;
`

export const SLink = styled(Link)`
  color: darkcyan;
  &:hover{
    color: darkcyan;
  }
`

export const SDate = styled.h1`
  color: white;
  font-size: 16px;
  padding-left: 6px;
  padding-top: 12px;
  font-family: 'Courier New', Courier, monospace;
  margin-bottom: 5px;
  display: flex;

`