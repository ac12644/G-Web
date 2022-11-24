import React from "react";
import styledComponents from "styled-components";
import pin from "../assets/pin.png";
import Button from "./Button";
const CardSection = styledComponents.div`

display: flex;
width: 16rem;
height: 22rem;
padding: 30px;
box-shadow:5px 5px 15px  gray;
border-radius: 20px;
background-color: #17131C;
color: ${(props) => props.theme.text};
flex-direction:column;
justify-content: center;
text-align: center;

.card-img-top {
  height: 168px;
  padding: 8px;
}
.card-corner-pin {
   display: flex;
   justify-content: space-between;
}
.card-corner-pin > img{
  width: 8px;
}
.card-body{
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
}
.card-title{
  margin-bottom:10%;
}
.card-text{
  padding-bottom:10px;
}
@media(max-width:777px){
    margin-bottom: 10px;
}

`;

function Cards({ theimage, text, title, comingSoon, link, button }) {
  return (
    <CardSection className="card">
      <div className="card-corner-pin">
        <img src={pin} alt="g-web" />
        <img src={pin} alt="g-web" />
      </div>
      <img className="card-img-top" src={theimage} alt={title} />
      <div className="card-body">
        <h1 className="card-title">{title}</h1>

        <h3 className="card-text">{text}</h3>
        <h4 className="card-text">{comingSoon}</h4>
        {button && <Button link={link} text={button} />}
      </div>
      <div className="card-corner-pin">
        <img src={pin} alt="g-web" />
        <img src={pin} alt="g-web" />
      </div>
    </CardSection>
  );
}
export default Cards;
