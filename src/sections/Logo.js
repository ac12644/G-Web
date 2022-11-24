import React from "react";
import styled from "styled-components";

const LogoText = styled.h1`
  margin-left: 5%;
  font-family: "VT323", monospace;
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.text};
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  @media (max-width: 777px) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;
const StyledLink = styled.a`
  text-decoration: none;
`;

function Logo() {
  return (
    <LogoText>
      <StyledLink href="/">G-Web</StyledLink>
    </LogoText>
  );
}

export default Logo;
