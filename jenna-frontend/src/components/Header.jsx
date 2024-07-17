import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #515151;
  color: #ffff;
  padding: 10px 20px;
`;
const LeftHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const RightHeaderContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

const DotIcon = styled.span`
  width: 1.2em; /* Adjust the size of the dot */
  height: 1.2em; /* Adjust the size of the dot */
  background-color: blue;
  border-radius: 90%;
  display: inline-block;
  position: relative;
  transform: translate(0%, 20%);
`;

const IconContainer = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;

const NameContainer = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  @media (max-width: 1080px) {
    font-size: 1em;
  }
  @media (max-width: 720px) {
    font-size: 0.6em;
  }
`;

const RightLinkContainer = styled.div`
  margin-right: 20px;
  @media (max-width: 1080px) {
    font-size: 0.8em;
  }
  @media (max-width: 720px) {
    font-size: 0.5em;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LeftHeaderContainer>
        <NameContainer>Jenna Merrill</NameContainer>
      </LeftHeaderContainer>
      <RightHeaderContainer>
        <RightLinkContainer>
          <span> About Me </span>
          <span> Testimonials </span>
          <span> Listings </span>
          <span> EXP Realty </span>
        </RightLinkContainer>
      </RightHeaderContainer>
    </HeaderContainer>
  );
};

export default Header;
