import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Bio from "./Bio";
import Services from "./Services";
import Abnb from "./Abnb";
import Listings from "./Listings";
import Exp from "./Exp";
import Carousel from "./Carousel";
import Footer from "./Footer";
// import ReactGA from "react-ga4";

// using https://www.npmjs.com/package/react-ga4
// const gaID = process.env.REACT_APP_REACTGA_KEY;
// ReactGA.initialize(gaID ? gaID : "");

const MainContainer = styled.div`
  position: relative;
  font-family: WF Visual Sans Text, Arial, sans-serif;
`;

// background: url("./background.webp");
const BackgroundLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 360px;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0.1;
`;
const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  width: 80vw;
  max-width: 1400px;
  min-width: 360px;
  background-color: #e2e8f7;
`;

const BodyWrapper = styled.div`
  padding: 4vh 5vw 4vh 4vw;
  min-height: 600px;
  @media (max-width: 1080px) {
    padding: 1em 2em 1em 1em;
  }
`;

const StyledLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: #cfcfcf;
  margin: 0 auto;
`;

const MainWrapper = () => {
  const [currentView, setCurrentView] = useState("ABOUTME");
  console.log("currentView", currentView);

  const sectionsData = [
    {
      text: "About Me",
      navTo: "ABOUTME",
    },
    {
      text: "Services",
      navTo: "SERVICES",
    },
    {
      text: "Abnb",
      navTo: "ABNB",
    },
    {
      text: "Listings",
      navTo: "LISTINGS",
    },
    {
      text: "EXP Realty",
      navTo: "EXPREALTY",
    },
  ];

  const _renderView = () => {
    switch (currentView) {
      case "SERVICES":
        return <Services />;
        break;
      case "ABNB":
        return <Abnb />;
        break;
      case "LISTINGS":
        return <Listings />;
        break;
      case "EXPREALTY":
        return <Exp />;
        break;
      default:
        return <Bio />;
    }
  };
  return (
    <MainContainer>
      <BackgroundLayer />

      <ContentContainer>
        <Header
          currentView={currentView}
          updateView={setCurrentView}
          sectionsData={sectionsData}
        />
        <StyledLine />
        <BodyWrapper>{_renderView()}</BodyWrapper>
        <StyledLine />

        <Carousel />
        <Footer />
      </ContentContainer>
    </MainContainer>
  );
};

export default MainWrapper;
