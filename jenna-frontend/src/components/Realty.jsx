import React from "react";
import {
  SectionTitle,
  SectionSubHeading,
  StyledParagraph,
  StyledHR,
} from "../utilities/styledfonts";
import styled from "styled-components";

const RealtyContainer = styled.div`
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

const Realty = (props) => {
  return (
    <RealtyContainer $image={"./realtybackground.webp"}>
      <Overlay>
        <ContentContainer>
          <SectionTitle>About Jenna Merrill</SectionTitle>
          <SectionSubHeading>Realtor | Epique Realty | Specializing in Buyer & Seller Representation</SectionSubHeading>
          <StyledHR />
          <StyledParagraph>
                  Jenna Merrill is a dedicated real estate professional with Epique Realty, committed to guiding her clients through every step of the buying or selling process with clarity, confidence, and care. With years of experience in the industry and a passion for helping others, Jenna has built a reputation for being approachable, knowledgeable, and truly invested in the people she serves.
                  </StyledParagraph>
                  <StyledParagraph>
                  What sets Jenna apart is her personal understanding of the challenges families face during big life transitions. As a mom who moved her family while pregnant with her second child, Jenna knows just how overwhelming-and exciting-a move can be. That experience deeply shaped her approach to real estate. Today, she specializes in helping young families find their dream homes, whether they’re growing, relocating, or putting down roots for the first time.
                  </StyledParagraph>
                  <StyledParagraph>
                  Jenna brings a thoughtful, family-first perspective to every transaction. She takes the time to understand your needs, your lifestyle, and your long-term goals. Her clients appreciate her attention to detail, strong communication, and ability to make the real estate journey feel less stressful and more empowering.
                  </StyledParagraph>
                  <StyledParagraph>
                  Whether you're buying your first home, upsizing to make room for a growing family, or preparing to sell your current house, Jenna is here to help you move forward with confidence-and maybe even a little joy along the way.
                  </StyledParagraph>
                  <StyledParagraph>
                    <b>
                  Let’s find your place.</b>
                  </StyledParagraph>
        </ContentContainer>
      </Overlay>
    </RealtyContainer>
  );
};

export default Realty;
