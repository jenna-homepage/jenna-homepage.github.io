import React, { useRef, useState, useCallback } from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 3vh;
  display: flex;
  transition: transform ease-out 0.3s;
`;

const CardsContainer = styled.div`
  overflow: hidden;
  height: 100%;
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  borderradius: 10px;
  backgroundsize: cover;
  backgroundposition: center;
`;

const PaginationContainer = styled.div`
display: "flex",
  justifyContent: "center",`;
const DotWrapper = styled.div` margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",`;

const RightArrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 32px;
  fontsize: 45px;
  color: #fff;
  zindex: 1;
  cursor: pointer;
`;

const LeftArrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 32px;
  fontsize: 45px;
  color: #fff;
  zindex: 1;
  cursor: pointer;
`;

const Carousel = () => {
  // temp props
  const parentWidth = 500;
  const slides = [
    { url: "http://localhost:3000/image-1.jpg", title: "beach" },
    { url: "http://localhost:3000/image-2.jpg", title: "boat" },
    { url: "http://localhost:3000/image-3.jpg", title: "forest" },
    { url: "http://localhost:3000/image-4.jpg", title: "city" },
    { url: "http://localhost:3000/image-5.jpg", title: "italy" },
  ];

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

  const _renderCards = () => {
    return (
      slides &&
      slides.map((_, index) => {
        return <Card key={`Card-${index}`}>{`Card-${index}`}</Card>;
      })
    );
  };

  const _renderPagination = () => {
    return (
      slides &&
      slides.map((_, index) => {
        return <DotWrapper key={`PaginationDot-${index}`}>●</DotWrapper>;
      })
    );
  };
  return (
    <Container>
      <div>
        <LeftArrow>❰</LeftArrow>
        <RightArrow>❱</RightArrow>
      </div>
      <CardsContainer>{slides && _renderCards()}</CardsContainer>
      <PaginationContainer>{slides && _renderPagination()}</PaginationContainer>
    </Container>
  );
};

export default Carousel;
