import styled from "styled-components"
import * as FaIcons from "react-icons/fa";

export const SUsername = styled.h1`
  color: darkcyan;
  font-size: 25px;
`

export const SRep = styled.h1`
  color: white;
  font-size: 17px;
  width: 55vw;
  left: 20vw;
`
export const SPfp = styled.h1`
  margin-left: 125px;
  margin-right: 15px;
  border: 3px solid gray;
  position: relative;
  /* border-radius: 50%; */
  width: 120px;
  height: 120px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url('https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png');
`

export const SDiv = styled.div`
  position: absolute;
  display: flex;
  /* border: 1px solid red; */
`

export const SError = styled.h1`
  color: white;
  font-size: 27px;
  padding-top: 10px;
`

export const SProfileFeed = styled.div`
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
  margin-top: 145px;
  ::-webkit-scrollbar{
    display: none;
  }
`