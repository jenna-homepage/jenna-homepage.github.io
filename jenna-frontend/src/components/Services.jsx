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
        Ready to own your future?  Ready to get into real estate investment with expert guidance? Get personalized mentorship from the comfort of your home.
        </StyledParagraph>
        <SectionSubHeading>Our Approach</SectionSubHeading>
        <StyledParagraph>
        Whether you’re balancing a busy life, dreaming of financial freedom, or planning your next adventure - now is the time to start your journey. Join our community of ambitious women and learn how to buy your first property investment with the support of experienced mentors. Your path to financial independence begins here - Don’t miss out!
        </StyledParagraph>
        <SectionSubHeading>Our Program</SectionSubHeading>
        <StyledParagraph>
        We offer a program allowing women to engage in our community in a way that works best for their lives and at this stage in their real estate journey.
        </StyledParagraph>
        <StyledParagraph><a href="https://www.redphoenixrising.net/">Click here to learn more.</a></StyledParagraph>
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
