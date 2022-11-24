import React from "react";
import styledComponents from "styled-components";
import styled from "styled-components";
import teamBackground from "../assets/Nfts/roadmapimage.jpeg";
const Section = styledComponents.section`
  width:100vw;
  background: url(${teamBackground});
  background-color: ${(props) => props.theme.body};
  background-repeat: no-repeat;
  background-size: 100% 100%;
  justify-content:center;
  align-items:center;
  @media  screen and (max-width:777px){
    padding-top:60px;
    }
`;
const Box = styled.div`
  max-width: 60%;
  height: fit-content;
  padding: 5rem;
  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;

  .mediumLink {
    font-weight: bold;
    text-decoration: underline;
  }

  @media (max-width: 777px) {
    max-width: 100%;
    padding: 2rem;
  }
`;
function About() {
  return (
    <Section>
      <Box>
        <h1>Nice PFP! But...where’s your metaverse car?</h1>
        <br />
        <h4>3,2,1...GO!</h4>
        <br />
        <h4>
          A collection ideated from the deepest dark side of the ether. Realised
          to contort the paradigm of NFT collections, to contribute the
          development and the growth of the NFT space.
        </h4>
        <br />

        <h4>Introducing G-Web: the metaverse's first car with 0xEmission.</h4>
        <br />
        <h4>
          Our intent is to provide a pixelated unique car for holders, granting
          them experiences in various layers of the metaverse. As our first
          goal, we plan to open our headquarters into Worldwide Webb's pixelated
          metaverse, by acquiring a large apartment. Check the article on{" "}
          <a
            href="https://medium.com/@cryptohubble/the-dematerialization-of-the-car-
          concept-introducing-g-web-73ea78a0c16f"
            className="mediumLink"
          >
            Medium
          </a>
        </h4>
      </Box>
      {/*  <Team />
      <br />
      <FAQ />
      */}
    </Section>
  );
}

export default About;
