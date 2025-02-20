import React from "react";
import {
  SectionTitle,
  SectionSubHeading,
  StyledParagraph,
  StyledHR,
} from "../utilities/styledfonts";
import styled from "styled-components";

const AbnbContainer = styled.div`
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
`;

const Abnb = () => {
  return (
    <Overlay>
    <AbnbContainer>
      <TextContainer>
        <SectionTitle>Abnb Title</SectionTitle>
        <SectionSubHeading>
          Abnb Subtitle
        </SectionSubHeading>
        <StyledHR />
        <StyledParagraph>
        I’m a local real estate agent that loves to travel and create fun spaces. My husband is a software engineer and is pretty laid back. We’re very open to meeting new families or individuals to share our life hacks and stories. We’ve got two little ones 2 and 4 and love to share our place and hear about your adventures. Hope to meet you soon!
        </StyledParagraph>
        <StyledParagraph>
        [ embedded link goes here ]
        </StyledParagraph>
      </TextContainer>
      <ImageContainer>
        <ProfileImage
          src="./jenna.abnb.profile.tile.webp"
          alt="Jenna Merrill Abnb Tile"
        />
      </ImageContainer>
    </AbnbContainer>
    </Overlay>
  );
};

export default Abnb;
