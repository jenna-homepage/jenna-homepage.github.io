import React from "react";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #515151;
  color: #ffffff;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  width: inherit;
  min-width: 360px;
  max-width: 1400px;
`;

const StyledLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: #f1f0f0;
  margin: 0 auto;
`;

const TextContainer = styled.div`
  flex: 1;
  text-align: center;
  a: {
    color: #585858;
    text-decoration: none;
  }
  &:hover,
  &:focus {
    color: darkgray;
  }
  @media (max-width: 1080px) {
    font-size: 0.8em;
  }
`;

const InfoBox = styled.div`
  font-size: 0.5rem;
  text-align: left;
  padding: 0em 0.5em;
`;

const StyledSVG = styled.svg`
  viewbox: 0 0 24 24;
  fill: currentColor;
  width: 22px;
  height: 22px;
`;

const CopyText = styled.span`
  font-size: 0.8em;
  @media (max-width: 1080px) {
    font-size: 0.5em;
  }
  @media (max-width: 720px) {
    font-size: 0.3em;
  }
`;

const Footer = () => {
  return (
    <LayoutWrapper>
      <TextContainer>
        <InfoBox>
          <div>EMAIL: jenna@patmckennarealtors.com</div>
          <div>MOBILE: (267) 752-6563</div>
          <div>ADDRESS: 63 E Main St, Evesham, NJ 08053</div>
          <div>LICENSE #: 2322201</div>
        </InfoBox>
      </TextContainer>
      <TextContainer>
        <a href="mailto:xxx@gmail.com ">Email</a>
      </TextContainer>
      <TextContainer>
        <a href="https://www.linkedin.com">
          <StyledSVG
            xmlns="http://www.w3.org/2000/svg"
            data-supported-dps="24x24"
            focusable={false}
          >
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
          </StyledSVG>
          <span>Linkedin</span>
        </a>
      </TextContainer>
      <TextContainer>
        <CopyText>&copy; {new Date().getFullYear()} Jenna Merrill</CopyText>
      </TextContainer>
    </LayoutWrapper>
  );
};

export default Footer;
