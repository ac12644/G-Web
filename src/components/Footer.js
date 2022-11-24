import React from "react";
import Logo from "../sections/Logo";
import styledComponents from "styled-components";

const Section = styledComponents.footer`
height:35vh;
width:100%;
margin:0 auto;
display:flex;

position:relative;
background-color:${(props) => props.theme.body};
`;

const Box = styledComponents.div`
width:100%;
height:fit-content;
margin-bottom:30px;
display:flex;
flex-direction:column;
margin-top: 2%;
margin-right: 5%;
@media   (max-width:777px){
  margin: 10px;
}


`;
const MenuContainer = styledComponents.div`
display: flex;
justify-content: flex-start;
color:white;
margin-bottom: 2%;
margin-left: 0%;

`;

const MenuData = styledComponents.div`
display:flex;
margin: 10px;
margin-left: 5%;
justify-content: space-between;
color:white;

@media   (min-width:777px){

  flex-direction:row;
  align-items:space-between;
  a{
    text-decoration:none;

  }
  a:hover{
    color:darkblue;
  }
}



a{
  text-decoration:none;


}
a:hover{
  color:white;
}
`;

function Footer() {
  return (
    <Section>
      <Box>
        <MenuContainer>
          <Logo />
        </MenuContainer>
        <MenuData>
          <a href="/about">
            <h4>About</h4>
          </a>
          <a href="https://medium.com/@cryptohubble/the-dematerialization-of-the-car-concept-introducing-g-web-73ea78a0c16f">
            <h4>Medium</h4>
          </a>
          <a href="https://github.com/ac12644/G-Web">
            <h4>GitHub</h4>
          </a>
          <a href="https://twitter.com/gweb_xyz">
            <h4>Twitter</h4>
          </a>
          <a href="#">
            <h4>Etherscan</h4>
          </a>
        </MenuData>
      </Box>
    </Section>
  );
}

export default Footer;
