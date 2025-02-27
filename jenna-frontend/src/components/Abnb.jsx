import React from "react";
import AbnbLink from "./AbnbLink";
import {
  SectionTitle,
  SectionSubHeading,
  StyledParagraph,
  StyledHR,
} from "../utilities/styledfonts";
import styled from "styled-components";


// const abnbLink = `<iframe class="airbnb-embed-frame" data-id="1252944713686371251" data-view="home" data-hide-price="true" style="width: 450px; height: 300px; margin: auto;"><a href="https://www.airbnb.com/rooms/1252944713686371251?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget">View On Airbnb</a><a href="https://www.airbnb.com/rooms/1252944713686371251?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget" rel="nofollow">Home in Maple Shade · ★4.78 · 1 bedroom · 1 bed · 1 private bath</a><script async="" src="https://www.airbnb.com/embeddable/airbnb_jssdk"></script></iframe>`;
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
        <SectionTitle>Airbnb in Maple Shade, New Jersey</SectionTitle>
        <StyledHR />
        <SectionSubHeading>
        Meet Your Host!
        </SectionSubHeading>
        <StyledParagraph>
        I’m Jenna, a local real estate agent that loves to travel and create fun spaces for others during their travels. My husband is a software engineer and is pretty laid back. We’re very open to meeting new families or individuals to share our favorite local restaurants, life hacks, and stories. We’ve got two little ones 2 and 4 and love to share our place and hear about your adventures.

        </StyledParagraph>
        <SectionSubHeading>
        Where You'll Stay:
        </SectionSubHeading>
        <StyledParagraph>
        Park your car, and check yourself in with the keypad, because this weekend you'll be staying in a sleek, modern room with a queen sized bed and private bathroom, just minutes from Main Street. This room has a workspace with a desk, a closet with shelving and drawers for your things, and a TV with a Netflix account for when you want to relax. You will also have access to shared laundry facilities, a downstairs living and dining area, and an outdoor space with a playhouse and swings. Upon request we can provide a full sized air mattress, or amenities like a pack and play or highchair to make visits with small children effortless. 
        </StyledParagraph>
        <StyledParagraph>Hope to meet you soon!</StyledParagraph>
        <AbnbLink />

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
