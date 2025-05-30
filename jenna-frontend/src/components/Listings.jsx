import React from "react";
import {
  SectionTitle,
  SectionSubHeading,
  StyledParagraph,
  StyledHR,
} from "../utilities/styledfonts";
import styled from "styled-components";

const ListingsContainer = styled.div`
  ${({ $image }) => $image && `background-image: url(${$image});`}
  background-size: cover;
  display: flex;
  justify-content: space-between;
  min-height: 300px;

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

const ContentContainer = styled.div`
  padding: 10px 20px;
`;

const Listings = (props) => {
  return (
    <ListingsContainer $image={"./expbackground.webp"}>
      <Overlay>
        <ContentContainer>
          <SectionTitle>Listings</SectionTitle>
          <SectionSubHeading>Listings sub-heading</SectionSubHeading>
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
        </ContentContainer>
      </Overlay>
    </ListingsContainer>
  );
};

export default Listings;
