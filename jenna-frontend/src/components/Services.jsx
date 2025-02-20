import React from "react";
import {
  SectionTitle,
  SectionSubHeading,
  StyledParagraph,
  StyledHR,
} from "../utilities/styledfonts";
import styled from "styled-components";



const ContentContainer = styled.div`
  padding: 10px 20px;
`;

{/* <ServicesContainer $image={"./rprising.background.webp"}></ServicesContainer> */}
const ServicesContainer = styled.div`
${({ $image }) => $image && `background-image: url(${$image});`}
  background-size: cover;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  @media (max-width: 1080px) {
    flex-direction: column-reverse;
  }
  border-radius: 10px;
  outline: 1px solid #cfcfcf;
`;
const Overlay = styled.div`
border-radius: 10px;
  background-color: rgba(218,220,227,0.8);
`;

const TextContainer = styled.div``;
const ImageContainer = styled.div`
  padding: 2em 0em 2em 2em;
  min-width: 40%;
  

  @media (max-width: 1080px) {
    min-width: auto;
    padding: 1em;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  background-color: white;
`;

const Services = () => {
  return (
    <Overlay>
    <ServicesContainer>
      <TextContainer>
        <SectionTitle>Red Phoenix Rising</SectionTitle>
        <SectionSubHeading>
        Financial Services
        </SectionSubHeading>
        <div>
        Jenna Merrill CEO & Founder
        </div>
        <StyledHR />
        <StyledParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
        </StyledParagraph>
        <StyledParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
        </StyledParagraph>
      </TextContainer>
      <ImageContainer>
        <ProfileImage
          src="./rprising.background.webp"
          alt="Red Phoenix Rising Logo"
        />
      </ImageContainer>
    </ServicesContainer>
    </Overlay>
  );
};

export default Services;
