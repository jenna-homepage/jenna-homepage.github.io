import React, { useRef, useState, useEffect, useCallback } from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 3vh;
  padding: 1em;
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 1em;
  overflow: hidden;
  transition: transform ease-out 0.3s;
`;

const Card = styled.div`
  color: white;
  width: 400px;
  height: 300px;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  background-color: black;
`;
// ${({ $image }) => `background-image: url(${$image});`}

const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
          >{`Card-${index}`}</Card>
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
      <CardsContainer>{slides && _renderCards()}</CardsContainer>
      <PaginationContainer>
        <LeftArrow onClick={() => console.log("clicked on left arrow")}>
          ❰
        </LeftArrow>
        <DotContainer>{slides && _renderPagination()}</DotContainer>
        <RightArrow onClick={() => console.log("clicked on right arrow")}>
          ❱
        </RightArrow>
      </PaginationContainer>
    </Container>
  );
};

export default Carousel;
