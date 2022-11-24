import React from "react";
import styledComponents from "styled-components";
//import CoverVideo from "./CoverVideo";
import TypewriterText from "./TypewriterText";

import homeImage from "../assets/home.jpeg";

const Section = styledComponents.section`
min-height: fit-content;
position:relative;
margin:0 auto;
background-color: ${(props) => props.theme.body};
background: url(${homeImage});
@media   (max-width:777px){
  height: 100vh;
}
`;
const Container = styledComponents.div`

width:95%;
min-height:fit-content;
margin: 0 auto;
display:flex;
align-items:center;
flex-wrap:wrap;
padding-top:80px;

`;

const Box = styledComponents.div`
width:50%;
height:75vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-left: 5%;

@media   (max-width:777px){
  width:90%;
  margin: 0 auto;
  height:85vh;
  padding-bottom:20px;
}

`;

function Home() {
  return (
    <>
      <Section>
        <Container>
          <Box>
            <TypewriterText className="text" />
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default Home;
