import styled from "styled-components"
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";


export const StyledLink = styled(Link)`
  position: absolute;
  left: 0;
  top: ${(props) => props.top};
  transform: translateY(-50%);
  height: 4vh;
  width: 100%;
  padding-left: 2.3vw;
  text-align: justify;
  color: #03A062;
  font-size: 2.35vw;
  &:hover{
    color: pink;
  }
`
export const SProfile = styled(Link)`
  color: white;
  position: absolute;
  width: 100%;
  text-align: justify;
  padding-left: 2.3vw;
  font-size: 2.35vw;
  top: 11%;
  &:hover{
    color: pink;
  }
`

export const SIcon = styled(FaIcons.FaEthereum)`
  width: 100%;
  height: 13vw;
  position: absolute;
  bottom: 10%;
  color: darkcyan;
`
