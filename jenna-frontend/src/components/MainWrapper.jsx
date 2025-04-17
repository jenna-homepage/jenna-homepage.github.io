import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Bio from "./Bio";
import Services from "./Services";
import Abnb from "./Abnb";
import Listings from "./Listings";
import Realty from "./Realty";
import Carousel from "./Carousel";
import Footer from "./Footer";
// import ReactGA from "react-ga4";

// using https://www.npmjs.com/package/react-ga4
// const gaID = process.env.REACT_APP_REACTGA_KEY;
// ReactGA.initialize(gaID ? gaID : "");

const sectionsData = [
  {
    text: "About Me",
    navTo: "ABOUTME",
  },
  {
    text: "Red Phoenix Rising",
    navTo: "SERVICES",
  },
  {
    text: "Epique Realty",
    navTo: "REALTY",
  },
  {
    text: "Abnb",
    navTo: "ABNB",
  },
  // {
  //   text: "Listings",
  //   navTo: "LISTINGS",
  // },  
];

const realSlides = {
  headerText: "Testimonials",
  cardData: [
    {
      url: "./image-4.jpg",
      title: "Testimonial 1",
      altText: "Testimonial 1",
      bodyText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      darkmode: true,
    },
    {
      // url: "./image-2.jpg",
      title: "Testimonial 2",
      altText: "Testimonial 2",
      bodyText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      url: "./image-3.jpg",
      title: "Testimonial 3",
      altText: "Testimonial 3",
      bodyText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      darkmode: true,
    },
    {
      url: "./image-1.jpg",
      title: "Testimonial 4",
      altText: "Testimonial 4",
      bodyText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      darkmode: true,
    },
    {
      // url: "./image-5.jpg",
      title: "Testimonial 5",
      altText: "Testimonial 5",
      bodyText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      darkmode: true,
    },
  ]
};
const abnbSlides = {
  headerText: "Take a Look Around",
  cardData: [
    {
      url: "./image-4.jpg",
      title: "Abnb Pic 1",
      altText: "Abnb Pic 1",
      bodyText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      darkmode: true,
    },
    {
      // url: "./image-2.jpg",
      title: "Abnb Pic 2",
      altText: "Abnb Pic 2",
      bodyText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      url: "./image-3.jpg",
      title: "Abnb Pic 3",
      altText: "Abnb Pic 3",
      bodyText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      darkmode: true,
    },
    {
      url: "./image-1.jpg",
      title: "Abnb Pic 4",
      altText: "Abnb Pic 4",
      bodyText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      darkmode: true,
    },
    {
      // url: "./image-5.jpg",
      title: "Abnb Pic 5",
      altText: "Abnb Pic 5",
      bodyText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      darkmode: true,
    },
  ]
};

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

  // convert to react router
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
      case "REALTY":
        return <Realty />;
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

        <Carousel carouselData={currentView === "ABNB" ? abnbSlides : realSlides} />
        <Footer />
      </ContentContainer>
    </MainContainer>
  );
};

export default MainWrapper;
