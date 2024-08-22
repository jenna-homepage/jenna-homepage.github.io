import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  max-width: 1000px; // Adjust based on your design
  margin: auto;

  @media (min-width: 720px) {
    flex-direction: row;
  }
`;

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  @media (min-width: 720px) {
    flex-direction: row;
    overflow-x: hidden;
  }
`;

const Card = styled.div`
  flex: 0 0 100%;
  margin: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 720px) {
    flex: 0 0 33.33%;
    margin: 10px;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  @media (max-width: 719px) {
    display: none;
  }
`;

const LeftButton = styled(NavButton)`
  left: 0;
`;

const RightButton = styled(NavButton)`
  right: 0;
`;

// const Carousel = ({ cardsArr }) => {
// not rendering correctly
const Carousel = () => {
  const cardsArr = [
    { title: "Card one" },
    { title: "Card two" },
    { title: "Card three" },
    { title: "Card four" },
    { title: "Card five" },
  ];
  const [index, setIndex] = useState(0);
  const [isHorizontal, setIsHorizontal] = useState(window.innerWidth >= 720);

  useEffect(() => {
    const handleResize = () => {
      setIsHorizontal(window.innerWidth >= 720);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleNext = () => {
    if (index < cardsArr.length - 3) {
      setIndex(index + 1);
    }
  };

  return (
    <CarouselContainer>
      {isHorizontal && <LeftButton onClick={handlePrev}>◀</LeftButton>}
      <CarouselWrapper
        style={
          isHorizontal
            ? { transform: `translateX(-${(index * 100) / 3}%)` }
            : {}
        }
      >
        {cardsArr &&
          cardsArr.map((item, i) => (
            <Card key={`carousel-item-${i}`}>{item.title}</Card>
          ))}
      </CarouselWrapper>
      {isHorizontal && <RightButton onClick={handleNext}>▶</RightButton>}
    </CarouselContainer>
  );
};

export default Carousel;
