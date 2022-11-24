import React from "react";
import styledComponents from "styled-components";
import RoadmapCards from "./RoadmapCards";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import image1 from "../assets/Nfts/image1.jpeg";
import background from "../assets/Nfts/background.jpeg";

const Section = styledComponents.section`
min-height: 120vh};
position:relative;
background-image:url(${background});
background-size:cover;
@media   (max-width:777px){
  padding-top:60px;
}
`;
const Tittle = styledComponents.h1`
    font-size : ${(props) => props.theme.fontxxl};
    text-transform:capitalize;
    color: ${(props) => props.theme.text};
    margin:1rem auto;
    border-bottom:2px solid black;
    width:fit-content;
   
`;
const Container = styledComponents.div`

width:95%;
min-height:fit-content;
margin-bottom:10px;
display:flex;
justify-content: space-between;
position:absolute;
bottom:350px;
margin:0 auto;
margin-left:20px;

.slider{
  width:100%;
}

.carousel{
  width:70%;
  height:auto;
  border-radius:50px;

  padding:20px;

  @media(max-width:777px){
      width:100%;
      
  }

}

.imagecontainer{
  max-width:500px;
  display:flex;
  flex-direction:row;
}
 
.carousel.carousel-slider {
  overflow: inherit;
  border:none;
  box-shadow:0px 0px 15px 5px gray;

  padding:0px;
}

.carousel .control-next.control-arrow, .carousel .control-next.control-arrow:hover{
  background-color: transparent;
  right: -100px;
}

.carousel .control-prev.control-arrow, .carousel .control-prev.control-arrow:hover {
  background-color: transparent;
  left: -100px;
}

.carousel .control-arrow, .carousel.carousel-slider .control-arrow{
  opacity: 1;
}

.carousel .control-next.control-arrow:before {
  content: '';
  border: solid #05386B;
  border-width: 0 8px 8px 0;
  display: inline-block;
  padding: 14px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.carousel .control-prev.control-arrow:before {
  content: '';
  border: solid #05386B;
  border-width: 0 8px 8px 0;
  display: inline-block;
  padding: 14px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}


@media screen and  (max-width:1150px){


width:95%;
margin: 0 auto;
display:flex;
flex-direction:row;
align-items:space-between;


}
`;

const Box = styledComponents.div`
width:50%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

const Img = styledComponents.img`
position:absolute;
margin:0;
top:0;
left:0;
width:100%;
height:140vh;
`;

function Roadmap() {
  return (
    <Section>
      <Container>
        <RoadmapCards
          image=""
          text="hello bitches"
          tittle="20% "
          roadstatus="1"
          deadline="Long Term"
        />

        <RoadmapCards
          image=""
          text="hello bitches"
          tittle="Hello"
          roadstatus="1"
        />

        <RoadmapCards
          image=""
          text="hello bitches"
          tittle="Hello"
          roadstatus="2"
        />

        <RoadmapCards
          image=""
          text="hello bitches"
          tittle="Hello"
          roadstatus="2"
        />
        <RoadmapCards
          image=""
          text="hello bitches"
          tittle="Hello"
          roadstatus="2"
        />
      </Container>

      <Container></Container>
    </Section>
  );
}

export default Roadmap;
