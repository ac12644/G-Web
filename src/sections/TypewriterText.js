import React from "react";
import { Link } from "react-router-dom";
import styledComponents from "styled-components";
import Typewriter from "typewriter-effect";

const Tittle = styledComponents.h2`
    font-size : ${(props) => props.theme.fontxxl};
    text-transform:capitalize;
    width:100%;
    color: ${(props) => props.theme.text};
    align-self: flex-start;
    @media   (max-width:777px){
      display:flex;
      flex-direction:column;
      align-items:center;
    }
    span{
      text-transform : upercase;
      font-family: "VT323", monospace;
    }
    .text-1{
      color:blue;
    }
    .text-2{
      color:green;
    }
    .text-3{
      color:red;
    }
    @media   (max-width:777px){
      font-size:25px;
    }
`;

const Subtittle = styledComponents.h3`
font-size : ${(props) => props.theme.fontlg};
text-transform: capitalize;
color:${(props) => `rgba(${props.theme.textRgba}, 0.6)`};
padding-top:10px;
font-weight:600;
margin-bottom:1rem;
width :fit-content;
@media(min-width:778px){
  align-self:flex-start;
}
@media   (max-width:777px){
  margin:0 auto 1rem auto;
}
`;
const ButtonContainer = styledComponents.div`
width :fit-content;
align-self:flex-start;
@media   (max-width:777px){
  font-size:15px;
  display:flex;
margin:0 auto;
}
.buttonLink{
display:inline-block;
background-color:${(props) => props.theme.text};
color:${(props) => props.theme.body};
outline: none;
border: none;
margin-right:20px;
font-family: "VT323", monospace;
font-size:${(props) => props.theme.fontmd};
padding:0.9rem 2.3rem;
border-radius:50px;
cursor:pointer;

@media   (max-width:777px){
  font-size:15px;
  padding:0.45rem 1.65rem;
}

&:hover{
    transform:scale(0.9);
}

&::after{
    content:" ";
    position:absolute;
    z-index:-3;
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
}
}
`;

const MobileText = styledComponents.h3`
font-size : ${(props) => props.theme.fontlg};
   color: ${(props) => props.theme.text};
padding-top:10px;
font-weight:600;
margin-bottom:1rem;
width :fit-content;

@media(min-width:778px){
  align-self:flex-start;
  display: none;
}
@media   (max-width:777px){
  margin:0 auto 1rem auto;
}
`;

function TypewriterText() {
  return (
    <>
      <Tittle>
        Mint a G-Web and
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "<span className=text-1>compete in the metaverse 🚗</span>"
              )
              .pauseFor(2000)
              .deleteAll()
              .typeString(
                "<span className=text-2>start your own car club ⛽</span>"
              )
              .pauseFor(2000)
              .deleteAll()
              .typeString("<span className=text-2>meet new frens 👋</span>")
              .pauseFor(2000)
              .deleteAll()
              .typeString("<span className=text-3>be eco-friendly 🍃</span>")
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Tittle>
      <Subtittle>Feel the wheels on Metaverse</Subtittle>
      <ButtonContainer>
        <Link className="buttonLink" to="/About">
          Explore
        </Link>
        <Link className="buttonLink" to="/MintSection">
          Mint
        </Link>
      </ButtonContainer>
      <MobileText className="mobileText">
        login from desktop for full experience
      </MobileText>
    </>
  );
}

export default TypewriterText;
