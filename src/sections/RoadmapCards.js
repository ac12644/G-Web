import React from "react";
import styledComponents from "styled-components";
import cardBackground from "../assets/Nfts/cardBackground.png";
const CardSection = styledComponents.div`
width: 15rem;
max-width:20rem;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
text-align:center;
margin-right:20px;
margin-top:20px;
box-shadow:5px 5px 15px  gray;
border:2px solid lightgray;
margin-bottom:50px;
background-color:none !important;

.body{
  width:90%;
  margin:0 auto;
  z-index:999;
  align-items:left;
  text-align:left;

  p{
    margin:0px;
    padding:0px;
  }
  
}

.title{
  z-index:4;
text-align:center;
}

:nth-child(1){
  margin-left:60px;
}

@media  screen and (max-width:1150px){
width:10rem;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
text-align:center;
margin-right:20px;
margin-top:20px;
box-shadow:5px 5px 15px  gray;
border:2px solid lightgray;
margin-bottom:50px;
background-color:none !important;

}

.card-title{
  text-align:center;
}
`;
const Spam = styledComponents.div`
width:fit-content;
margin: auto;
border-radius:50px 50px 50px 50px;
padding:5px;
z-index:4;


`;
const BackgroungImage = styledComponents.img`
position:absolute;
width:15.5rem;
height:18rem;
margin:0 auto;
top:-10px;
z-index:3;
`;

function Badge({ status }) {
  if (status == 1) {
    return (
      <Spam
        className="span1"
        style={{ backgroundColor: "#50C878", color: "white" }}
      >
        Completed
      </Spam>
    );
  } else if (status == 2) {
    return (
      <Spam
        className="span1"
        style={{ backgroundColor: "#FF9633", color: "white" }}
      >
        Ongoing
      </Spam>
    );
  } else {
    return (
      <Spam
        className="span1"
        style={{ backgroundColor: "#B3B2B2", color: "white" }}
      >
        Not Started
      </Spam>
    );
  }
}

function RoadmapCards({ theimage, text, tittle, roadstatus, deadline }) {
  return (
    <CardSection className="card" style={{ backgroundColor: "transparent" }}>
      <BackgroungImage className="" src={cardBackground} />
      <div className="body">
        <h4 className="title">{tittle}</h4>
        <p style={{ color: "lightGray", fontWeight: "400" }}>
          Deadline: {deadline}
        </p>
        <div className="bodydiv">
          <p className="text">{text}</p>
          <Badge status={roadstatus} />
        </div>
      </div>
    </CardSection>
  );
}
export default RoadmapCards;

//dont forget that you have the image as a background and not as an image
