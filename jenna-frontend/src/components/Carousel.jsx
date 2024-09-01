import React, { useRef, useState, useEffect, useCallback } from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 3vh;
  padding: 1em;
  overflow: hidden;
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
`;
// ${({ $currentIndex }) => `transform: -${$currentIndex * 60}vw';`}
// width: 300vw;

const Card = styled.div`
  color: black;
  width: 80vw;
  height: 300px;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  background-color: grey;
  ${({ $image }) => `background-image: url(${$image});`}
  @media (min-width: 1080px) {
    width: 50vw;
  }
  @media (max-width: 720px) {
    width: 75vw;
    height: 250px;
  }
`;

const TextContainer = styled.div`
  margin: 1em;
`;
const CardTitle = styled.h4`
  display: block;
  font-size: 1.5em;
  font-weight: bold;
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
`;

const RightArrow = styled.div`
  position: relative;
  top: 50%;
  right: 32px;
  font-size: 45px;
  zindex: 1;
  cursor: pointer;
`;

const LeftArrow = styled.div`
  position: relative;
  top: 50%;
  left: 32px;
  font-size: 45px;
  zindex: 1;
  cursor: pointer;
`;

const Carousel = () => {
  // temp props
  const parentWidth = 500;
  const slides = [
    {
      url: "./image-1.jpg",
      title: "beach",
      altText: "beach",
    },
    {
      url: "./image-2.jpg",
      title: "boat",
      altText: "boat",
    },
    {
      url: "./image-3.jpg",
      title: "forest",
      altText: "forest",
    },
    {
      url: "./image-4.jpg",
      title: "city",
      altText: "city",
    },
    {
      url: "./image-5.jpg",
      title: "italy",
      altText: "italy",
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
        const { title, url } = slide;
        return (
          <Card
            onClick={() => console.log("clicked on card", index)}
            key={`Card-${index}`}
            $image={url}
          >
            <TextContainer>
              <CardTitle>{`Card-${index}: ${title}`}</CardTitle>
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
            onClick={() => console.log("clicked on index", index)}
          >
            ●
          </DotWrapper>
        );
      })
    );
  };
  return (
    <Container>
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
