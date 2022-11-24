import React, { useState } from "react";
import styledComponents from "styled-components";
import { keyframes } from "styled-components";

const rotate = keyframes`

    from{
        transform:rotate(360deg);
    }
    to{
      transform:rotate(0deg);
    }

`;

const TotopButton = styledComponents.img`
width:80px;
height:80px;
position:fixed;
bottom:0px;
right:25px;
z-index:99;
cursor:pointer;
animation:${rotate} 5s infinite linear;
@media   (max-width:777px){
	width:40px;
	height:40px;
	right:13px;
	bottom:15;
	}

`;
const TOPContainer = styledComponents.h1`
width:80px;
height:80px;
color:white;
position:fixed;
bottom:40px;
right:10px;
z-index:99;
cursor:pointer;

@media   (max-width:777px){
	width:40px;
height:40px;
right:7px;
bottom:50px;
}


`;

const Totop = ({ thesrc }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
		in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <TOPContainer
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none", zIndex: "999" }}
      >
        TOP
      </TOPContainer>
      <TotopButton
        src={thesrc}
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none", zIndex: "999" }}
      />
    </>
  );
};

export default Totop;
