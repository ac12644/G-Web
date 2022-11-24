import React from "react";
import styled from "styled-components";

const Btn = styled.button`
display:inline-block;
background-color:${(props) => props.theme.text};
color:${(props) => props.theme.body};
outline: none;
border: none;
font-family: "VT323", monospace;
font-size:${(props) => props.theme.fontmd};
padding:0.9rem 2.3rem;
border-radius:50px;
cursor:pointer;

@media   (min-width:777px){
  font-size:15px;
  padding:0.45rem 1.65rem;
}

&:hover{
    transform:scale(0.9);
}

&::after{
    content:" ";
    position:absolute;
    top:50%;
    left:50%;
    width:100%;
    height:100%;
    border-radius:50px;
    transform:translate(-50%,-50%) scale(0);
    border: 2px solid ${(props) => props.theme.text};
    transition:width 0.3s ease;

  }

&:hover::after{
    transform:translate(-50%,-50%) scale(1.1);
    padding:0.09rem 0.03rem;
`;

function Button({ text, link }) {
  return (
    <Btn href={link} aria-label={text}>
      {text}
    </Btn>
  );
}

export default Button;
