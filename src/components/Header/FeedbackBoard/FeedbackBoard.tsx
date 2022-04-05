import React from "react";
import styled from "styled-components";
import mobileBg from "../../../assets/suggestions/mobile/background-header.png";
import tabletBg from "../../../assets/suggestions/tablet/background-header.png";
import desktopBg from "../../../assets/suggestions/desktop/background-header.png";

type Props = {};

const FeedbackBoard = (props: Props) => {
  return (
    <StyledBoard>
      <h1>Frontend Mentor</h1>
      <h2>Feedback Board</h2>
    </StyledBoard>
  );
};

export default FeedbackBoard;

const StyledBoard = styled.div`
  background-image: url(${mobileBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: inherit;
  color: ${props => props.theme.colors.light.medium};
  padding: 1rem 6.4%;

  h1 {
    font-size: 0.9375rem;
  }

  h2 {
    font-size: 0.8125rem;
    font-weight: 500;
  }

  @media (min-width: 768px) {
    width: auto;
    background-image: url(${tabletBg});
    border-radius: 8px;
  }

  @media (min-width: 1024px) {
    background-image: url(${desktopBg});
  }
`;
