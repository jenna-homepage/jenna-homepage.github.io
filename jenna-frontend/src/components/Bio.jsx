import React from "react";
import styled from "styled-components";
import {
  SectionTitle,
  SectionSubHeading,
  StyledParagraph,
  StyledHR,
} from "../utilities/styledfonts";

const BioContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  @media (max-width: 1080px) {
    flex-direction: column-reverse;
  }
  border-radius: 10px;
  outline: 1px solid #cfcfcf;
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

const Bio = () => {
  return (
    <BioContainer>
      <TextContainer>
        <SectionTitle>About Jenna</SectionTitle>
        <SectionSubHeading>
          Real estate agent with Epique Realty, LLC
        </SectionSubHeading>
        <StyledHR />
        <StyledParagraph>
          Having lived and worked in Beijing, Philadelphia, and now settled in
          South Jersey, Jenna knows how difficult it can be to relocate to a new
          place. A University of Pittsburgh graduate, with a background in
          project management, education, and healthcare, Jenna uses all her
          knowledge from each field to guide her clients through the home buying
          and selling processes. She communicates, negotiates, and does whatever
          is needed to get the deal to the closing table.
        </StyledParagraph>
        <StyledParagraph>
          Whether you speak English or Chinese, Jenna will help navigate you
          through this ever-evolving housing market, making the process as
          smooth and stress-free as possible.
        </StyledParagraph>
      </TextContainer>
      <ImageContainer>
        <ProfileImage
          src="./jenna-profile-large.webp"
          alt="Jenna Merrill Profile Picture"
        />
      </ImageContainer>
    </BioContainer>
  );
};

export default Bio;
