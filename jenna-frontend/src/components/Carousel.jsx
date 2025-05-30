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
    ${({ $totalCards }) => `width: ${$totalCards * 60}vw;`}
    ${({ $currentIndex }) => `transform: translateX(-${$currentIndex * 60}vw);`}
  }
  @media (min-width: 1080px) {
    ${({ $totalCards }) => `width: ${$totalCards * 50}vw;`}
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
  ${({ $bgImage }) => $bgImage && `background-image: url(${$bgImage});`}
  @media (min-width: 1080px) {
    width: 50vw;
  }
  @media (max-width: 720px) {
    width: 75vw;
    min-height: 250px;
  }
`;

const ContentContainer = styled.div`
  margin: 1em;
`;
const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 720px) {
    flex-direction: column;
  }
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

const CardImage = styled.img`
  max-width: 45%;
  padding-left: 1em;
  height: auto;
  @media (max-width: 720px) {
    padding-left: 0px;
  }
  `;

const Carousel = (props) => {
  // temp props
  const parentWidth = 500;
  const {headerText, cardData} = props.carouselData;
  //   {
  //     url: "./image-4.jpg",
  //     title: "Testimonial 1",
  //     altText: "Testimonial 1",
  //     bodyText:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  //     darkmode: true,
  //   },
  //   {
  //     // url: "./image-2.jpg",
  //     title: "Testimonial 2",
  //     altText: "Testimonial 2",
  //     bodyText:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  //   },
  //   {
  //     url: "./image-3.jpg",
  //     title: "Testimonial 3",
  //     altText: "Testimonial 3",
  //     bodyText:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  //     darkmode: true,
  //   },
  //   {
  //     url: "./image-1.jpg",
  //     title: "Testimonial 4",
  //     altText: "Testimonial 4",
  //     bodyText:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  //     darkmode: true,
  //   },
  //   {
  //     // url: "./image-5.jpg",
  //     title: "Testimonial 5",
  //     altText: "Testimonial 5",
  //     bodyText:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  //     darkmode: true,
  //   },
  // ];
  const autoScroll = false;
  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstCard = currentIndex === 0;
    const newIndex = isFirstCard ? cardData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = useCallback(() => {
    const isLastCard = currentIndex === cardData.length - 1;
    const newIndex = isLastCard ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, cardData]);
  const goToCard = (cardIndex) => {
    setCurrentIndex(cardIndex);
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
      cardData &&
      cardData.map((slide, index) => {
        const { title, url, darkmode, bodyText, altText, image } = slide;
        return (
          <Card
            onClick={() => console.log("clicked on card", index)}
            key={`Card-${index}`}
            $bgImage={url}
          >
            <ContentContainer>
              <CardTitle $darkmode={darkmode}>{title && `${title}`}</CardTitle>
              <LayoutContainer>
                {bodyText && <BodyText $darkmode={darkmode}>{bodyText}</BodyText>}
                {image && altText && <CardImage src={image} alt={altText} />}

              </LayoutContainer>
            </ContentContainer>
          </Card>
        );
      })
    );
  };

  const _renderPagination = () => {
    return (
      cardData &&
      cardData.map((_, index) => {
        return (
          <DotWrapper
            key={`PaginationDot-${index}`}
            $index={index}
            $currentIndex={currentIndex}
            onClick={() => goToCard(index)}
          >
            ●
          </DotWrapper>
        );
      })
    );
  };
  return (
    <Container>
      {headerText && <SectionHeading> {headerText}</SectionHeading>}

      <CardsContainer $totalCards={cardData.length} $currentIndex={currentIndex}>
        {cardData && _renderCards()}
      </CardsContainer>
      <PaginationContainer>
        <LeftArrow onClick={() => goToPrevious()}>❰</LeftArrow>
        <DotContainer>{cardData && _renderPagination()}</DotContainer>
        <RightArrow onClick={() => goToNext()}>❱</RightArrow>
      </PaginationContainer>
    </Container>
  );
};

export default Carousel;
