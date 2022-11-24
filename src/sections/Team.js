import React from "react";
import styledComponents from "styled-components";
import TeamCards from "./TeamCards";
import varano from "../assets/team/varano.jpeg";
import trambusto from "../assets/team/trambusto.jpeg";
import mattia from "../assets/team/mattia.jpeg";
import teamBackground from "../assets/Nfts/background.jpeg";

const Section = styledComponents.div`
width: 100vw;
height: 100vh;
@media   (max-width:777px){
  height: auto;
}

.div2 {
  padding: 30px;
}
.div1{
  display:flex;
  flex-direction:column;
  justify-content: space-evenly;

}

.thediv{
margin-left: 12%; 
margin-right: 12%;
height:fit-content;
display:flex;
flex-wrap:wrap;
justify-content: space-evenly;
align-items:center;
}

.thediv2{

margin-top:50px;
height:fit-content;
display:flex;
flex-wrap:wrap;
justify-content: space-evenly;
align-items:center;
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

function Team() {
  return (
    <Section>
      <div className="div1">
        <div className="div2">
          <Title>Team</Title>
        </div>
        <div className="thediv">
          <TeamCards
            className="image"
            theimage="https://pbs.twimg.com/profile_images/1575105735159054337/ou2kNuKP_400x400.jpg"
            name="@Thom_Hubble"
            position="Web3 Project Director"
            twitterLink="https://twitter.com/Thom_Hubble"
            linkedinLink="https://www.linkedin.com/in/tommaso-scarpellini-78b8161a8/"
          />
          <TeamCards
            className="image"
            theimage="https://pbs.twimg.com/profile_images/1520010901394538497/AxRKQPrK_400x400.jpg"
            name="@ArildXhindoli"
            position="Marketing manager"
            twitterLink="https://twitter.com/ArildXhindoli1"
            linkedinLink="https://www.linkedin.com/in/arild-xhindoli-383787155/"
            instaLink="https://www.instagram.com/arildxhindoli/"
          />
          <TeamCards
            className="image"
            theimage="https://avatars.githubusercontent.com/u/32266102?v=4"
            name="@OmarSaid"
            position="Script & Automation Developer"
            gitLink="https://github.com/OmarSaidIbrahim/OmarSaidIbrahim"
            linkedinLink="https://www.linkedin.com/in/omarsaidita/"
          />

          <TeamCards
            className="image"
            theimage={trambusto}
            name="@Trambusto"
            position="Digital Artist & 3D Specialist"
            linkedinLink="https://www.linkedin.com/in/emanuele-falco-02ab9a1b7/"
            instaLink="https://www.instagram.com/trambusto/"
          />
          <TeamCards
            className="image"
            theimage={mattia}
            name="@MattiaAringhieri"
            position="Digital Artist"
            instaLink="https://www.instagram.com/el__matto_/"
          />
          <TeamCards
            className="image"
            theimage={varano}
            name="@Varano.eth"
            position="Advisor"
            twitterLink="https://twitter.com/varano_eth"
          />
          <TeamCards
            className="image"
            theimage="https://pbs.twimg.com/profile_images/1570962855767179265/jK5HW2lM_400x400.jpg"
            name="@Tulumfightclub.eth"
            position="Advisor"
            twitterLink="https://twitter.com/GerminarioNft"
          />
          <TeamCards
            className="image"
            theimage="https://media-exp1.licdn.com/dms/image/C5603AQEu_s8ogQC9qg/profile-displayphoto-shrink_400_400/0/1591545276008?e=1670457600&v=beta&t=VNTQouqVQv35rHz1A_g9I5Jn08osi9wbz98u4Yyxups"
            name="@ac12644"
            position="Web3 Dev"
            gitLink="https://github.com/ac12644"
            linkedinLink="https://www.linkedin.com/in/ac12644/"
            twitterLink="https://twitter.com/ac12644"
          />
        </div>
      </div>
    </Section>
  );
}

export default Team;
