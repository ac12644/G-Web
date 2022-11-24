import React from "react";
import styledComponents from "styled-components";
import { keyframes } from "styled-components";
import car1 from "../assets/Nfts/moving.png";
import garage from "../assets/Nfts/garage.png";
const Movex = keyframes`

    from{
        left:-110%;
    }
    to{
      left:100%
    }

`;

const MovingImage1 = styledComponents.div`
position:fixed;
z-index:99;
bottom:-15px;
animation: ${Movex} 20s linear infinite;
width:150px;
height:auto;
transform:scaleX(-1);
@media   (max-width:777px){
  
}

`;
const MovingImage2 = styledComponents.div`
position:fixed;
bottom:-15px;
animation: ${Movex} 20s linear infinite reverse;
z-index:99;

@media screen and  (max-width:777px){
}

`;
const Garage = styledComponents.div`
position:fixed;
bottom:0px;
left:0px;
z-index:99;

img{
  width:150px;
  height:auto;
}
`;

function MovingCar() {
  return (
    <>
      <MovingImage1>
        <img src={car1} alt="g-web" />
      </MovingImage1>
      <MovingImage2>
        <img src={car1} alt="g-web" />
      </MovingImage2>
      <Garage>
        <img src={garage} alt="g-web" />{" "}
      </Garage>
    </>
  );
}

export default MovingCar;
