import React, { useRef, useState, useEffect, useCallback } from "react";
import { SectionHeading } from "../utilities/styledfonts";
import styled from "styled-components";

const Container = styled.div`
  min-height: 3vh;
  padding: 1vh 5vw 4vh 4vw;
  overflow: hidden;
  background: rgb(0 0 0 / 3%);
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 3em;
  transition: transform ease-out 0.3s;
  @media (min-width: 721px) {
    ${({ $totalSlides }) => `width: ${$totalSlides * 60}vw;`}
    ${({ $currentIndex }) => `transform: translateX(-${$currentIndex * 60}vw);`}
  }
  @media (min-width: 1080px) {
    ${({ $totalSlides }) => `width: ${$totalSlides * 50}vw;`}
    ${({ $currentIndex }) => `transform: translateX(-${$currentIndex * 50}vw);`}
  }
  @media (max-width: 720px) {
    gap: 1em;
    flex-direction: column;
    align-items: center;
  }
  padding: 0.5em 0;
`;

const Card = styled.div`
  color: black;
  width: 80vw;
  min-height: 300px;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  background-color: grey;
  ${({ $image }) => $image && `background-image: url(${$image});`}
  @media (min-width: 1080px) {
    width: 50vw;
  }
  @media (max-width: 720px) {
    width: 75vw;
    min-height: 250px;
  }
`;

const TextContainer = styled.div`
  margin: 1em;
`;
const CardTitle = styled.h4`
  display: block;
  font-size: 1.2em;
  font-weight: bold;
  ${({ $darkmode }) => $darkmode && `color: #f1f1f1;`}
`;

const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 720px) {
    visibility: hidden;
  }
`;

const DotContainer = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
`;
const DotWrapper = styled.div`
  position: relative;
  top: 20%;
  cursor: pointer;
  font-size: 30px;
  &:hover,
  &:focus {
    color: darkgray;
  }
  ${({ $index, $currentIndex }) =>
    $index === $currentIndex && `color: darkgray;`}
`;

const RightArrow = styled.div`
  position: relative;
  top: 50%;
  right: 32px;
  font-size: 45px;
  zindex: 1;
  cursor: pointer;
  &:hover,
  &:focus {
    color: darkgray;
  }
`;

const LeftArrow = styled.div`
  position: relative;
  top: 50%;
  left: 32px;
  font-size: 45px;
  zindex: 1;
  cursor: pointer;
  &:hover,
  &:focus {
    color: darkgray;
  }
`;

const BodyText = styled.p`
  ${({ $darkmode }) => $darkmode && `color: white;`}
`;

const Carousel = () => {
  // temp props
  const parentWidth = 500;
  const slides = [
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
  ];
  const autoScroll = false;
  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    if (!autoScroll) return;
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 2000);

    return () => clearTimeout(timerRef.current);
  }, [goToNext]);

  const _renderCards = () => {
    return (
      slides &&
      slides.map((slide, index) => {
        const { title, url, darkmode, bodyText } = slide;
        return (
          <Card
            onClick={() => console.log("clicked on card", index)}
            key={`Card-${index}`}
            $image={url}
          >
            <TextContainer>
              <CardTitle $darkmode={darkmode}>{`${title}`}</CardTitle>
              <BodyText $darkmode={darkmode}>{bodyText}</BodyText>
            </TextContainer>
          </Card>
        );
      })
    );
  };

  const _renderPagination = () => {
    return (
      slides &&
      slides.map((_, index) => {
        return (
          <DotWrapper
            key={`PaginationDot-${index}`}
            $index={index}
            $currentIndex={currentIndex}
            onClick={() => goToSlide(index)}
          >
            ●
          </DotWrapper>
        );
      })
    );
  };
  return (
    <Container>
      <SectionHeading>Testimonials</SectionHeading>

      <CardsContainer $totalSlides={slides.length} $currentIndex={currentIndex}>
        {slides && _renderCards()}
      </CardsContainer>
      <PaginationContainer>
        <LeftArrow onClick={() => goToPrevious()}>❰</LeftArrow>
        <DotContainer>{slides && _renderPagination()}</DotContainer>
        <RightArrow onClick={() => goToNext()}>❱</RightArrow>
      </PaginationContainer>
    </Container>
  );
};

export default Carousel;
