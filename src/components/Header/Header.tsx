import React, { useState } from "react";
import styled from "styled-components";
import NavButton from "./NavButton/NavButton";
import FeedbackBoard from "./FeedbackBoard/FeedbackBoard";
import Nav from "./Nav/Nav";

type Props = {};

const Header = (props: Props) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = (): void => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <StyledHeader>
      <FeedbackBoard />
      <Nav isNavbarOpen={isNavbarOpen}/>
      <NavButton isNavbarOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  width: 100%;
`;
