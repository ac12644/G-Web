import React from "react";
import styledComponents from "styled-components";
import car1 from "../assets/Nfts/car11.png";
import car2 from "../assets/Nfts/car9.png";
import car3 from "../assets/Nfts/car10.png";
import Cards from "./Cards";
import showroomBackground from "../assets/Nfts/background.jpeg";

const Section = styledComponents.section`
height: 100vh;
width:100%;
padding:30px;
background-color: ${(props) => props.theme.body};
background: url(${showroomBackground});
background-repeat: no-repeat;
background-size: 100% 100%;
@media(max-width:777px){
  height: auto;
  padding: 20px;
}
`;
const Container = styledComponents.div`
width:95%;
min-height:30vh;
margin: 0 auto;
display:flex;
flex-wrap:wrap;
justify-content: space-evenly;
align-items:center;

.image{
  margin-left:10px;
  padding-left:20px;
}
@media(max-width:777px){
    padding: 10px;
}


`;

const Title = styledComponents.h1`
    font-size : ${(props) => props.theme.fontxxl};
    text-transform:capitalize;
    color: ${(props) => props.theme.text};
    background-color: #212529;
    padding: 5px 10px 5px 10px;
    margin:0 auto;
    margin-bottom: 20px;
    border-bottom:2px solid black;
    width:fit-content;
   
`;
const Heading = styledComponents.h1`
    font-size : ${(props) => props.theme.fontxxl};
    color: ${(props) => props.theme.text};
    margin-bottom: 5rem;
    padding: 5px 10px 5px 10px;
    display: flex;
    margin-left: 12%;
    width:fit-content;
    filter: brightness(300%);

   
`;

function Showroom() {
  return (
    <Section>
      <Title>Showroom</Title>
      <Heading>G-Web Models</Heading>
      <Container className="div1">
        <Cards
          className="image"
          theimage={car1}
          title="6x6"
          comingSoon="coming soon.."
          text="supply: 420"
        />
        <Cards
          className="image"
          theimage={car2}
          title="cabrio"
          comingSoon="coming soon.."
          text="supply: 800"
        />
        <Cards
          className="image"
          theimage={car3}
          title="4x4"
          text="supply: 1,200"
          button="mint"
          link="#"
        />
      </Container>
    </Section>
  );
}

export default Showroom;
