import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ClickAwayListerner from "react-click-away-listener";
import NavButton from "./NavButton/NavButton";
import FeedbackBoard from "./FeedbackBoard/FeedbackBoard";
import Nav from "./Nav/Nav";

type Header = {
  isNavbarOpen: boolean;
};

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = (): void => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  return (
    <ClickAwayListerner onClickAway={closeNavbar}>
      <StyledHeader isNavbarOpen={isNavbarOpen}>
        <FeedbackBoard />
        <Nav isNavbarOpen={isNavbarOpen} />
        <NavButton isNavbarOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
      </StyledHeader>
    </ClickAwayListerner>
  );
};

export default Header;

const StyledHeader = styled.header<Header>`
  position: relative;
  display: flex;
  width: 100%;
  box-shadow: ${props => props.isNavbarOpen ? "100vw 100px 150px 100vh rgba(0, 0, 0, 0.75)" : "none"};
  transition: box-shadow 0.35s ease-in-out;
`;
