import styled from "styled-components"

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
  /* padding-top: 10px; */
  text-align: center;
`