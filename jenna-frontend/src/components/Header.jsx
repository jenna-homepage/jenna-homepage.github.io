import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #515151;
  color: #ffff;
  padding: 10px 20px;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;
const LeftHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const RightHeaderContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

const DotIcon = styled.span`
  width: 1.2em; /* Adjust the size of the dot */
  height: 1.2em; /* Adjust the size of the dot */
  background-color: blue;
  border-radius: 90%;
  display: inline-block;
  position: relative;
  transform: translate(0%, 20%);
`;

const IconContainer = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;

const NameContainer = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.5em 1em;
  @media (max-width: 1080px) {
    font-size: 1em;
  }
  @media (max-width: 720px) {
    font-size: 0.6em;
  }
`;

const RightLinkContainer = styled.div`
  margin-right: 20px;

  @media (max-width: 1080px) {
    font-size: 0.8em;
  }
  @media (max-width: 720px) {
    font-size: 0.5em;
  }
`;

const ButtonWrapper = styled.span``;
const StyledButton = styled.button`
  background: none;
  border: none;
  color: #ffff;
  ${({ $activeView, $currentButton }) =>
    $activeView === $currentButton && `color: darkgray;`}
  padding: 0.5em 1em;
  cursor: pointer;

  &:hover,
  &:focus {
    color: darkgray;
  }
`;

const Header = (props) => {
  const { updateView, currentView, sectionsData } = props;
  const _renderButtons = () => {
    return (
      sectionsData &&
      sectionsData.map((buttonData) => {
        const { text, navTo } = buttonData;
        return (
          <ButtonWrapper key={"headerButton" + text.replace(/ /g, "")}>
            <StyledButton
              $activeView={currentView}
              $currentButton={navTo}
              type={"button"}
              onClick={() => updateView(navTo)}
            >
              {" "}
              {text}{" "}
            </StyledButton>
          </ButtonWrapper>
        );
      })
    );
  };
  return (
    <HeaderContainer>
      <LeftHeaderContainer>
        <NameContainer>Jenna Merrill</NameContainer>
      </LeftHeaderContainer>
      <RightHeaderContainer>
        <RightLinkContainer>
          {sectionsData && _renderButtons()}
        </RightLinkContainer>
      </RightHeaderContainer>
    </HeaderContainer>
  );
};

export default Header;
