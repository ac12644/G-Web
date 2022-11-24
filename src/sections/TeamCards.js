import React from "react";
import styledComponents from "styled-components";
import github from "../assets/icons/github.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedin from "../assets/icons/linkedin.svg";
import insta from "../assets/icons/insta.svg";
import pin from "../assets/pin.png";

const CardSection = styledComponents.div`
width: 14rem;
padding: 10px;
margin-bottom: 20px;
box-shadow:5px 5px 15px  gray;
border-radius: 20px;
background-color: #212529;
color: ${(props) => props.theme.text};
text-align: center;
display: flex;
justify-content: flex-start;

@media  screen and (max-width:777px){
  flex-direction: column;
  margin-bottom:20px;
  }

.card-corner-pin {
   display: flex;
   justify-content: space-between;
   padding: 10px;
}
.card-corner-pin > img{
  width: 8px;
}
.card-img-top{
  width: 70%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}
.team-details>h5:first-of-type  {
   margin-bottom: -5px
}
.social-links{
  display: flex;
  justify-content: space-evenly;
  margin-left: 30px;
  margin-right: 30px;
}
.social-links-img{
  width: 28px;
  fill: white;
  background-color: white;
  padding: 5px;
  border-radius: 100px;
  cursor: pointer;
}
`;

function TeamCards({
  theimage,
  name,
  position,
  twitterLink,
  gitLink,
  linkedinLink,
  instaLink,
}) {
  return (
    <CardSection className="card">
      <div className="card-corner-pin">
        <img src={pin} alt="g-web" />
        <img src={pin} alt="g-web" />
      </div>
      <img className="card-img-top" src={theimage} alt={name} />
      <div className="team-details">
        <h5>{name}</h5>
        <p>{position}</p>
      </div>
      <div className="social-links">
        {twitterLink && (
          <a href={twitterLink}>
            <img src={twitter} className="social-links-img" alt={name}></img>
          </a>
        )}
        {gitLink && (
          <a href={gitLink}>
            <img src={github} className="social-links-img" alt={name}></img>
          </a>
        )}
        {linkedinLink && (
          <a href={linkedinLink}>
            <img src={linkedin} className="social-links-img" alt={name}></img>
          </a>
        )}
        {instaLink && (
          <a href={instaLink}>
            <img src={insta} className="social-links-img" alt={name}></img>
          </a>
        )}
      </div>
      <div className="card-corner-pin">
        <img src={pin} alt="g-web" />
        <img src={pin} alt="g-web" />
      </div>
    </CardSection>
  );
}
export default TeamCards;
