import React from "react";
import styled from "styled-components";
import closeIcon from "../../../assets/shared/mobile/icon-close.svg";
import hamburgerIcon from "../../../assets/shared/mobile/icon-hamburger.svg";

type Props = {
  isNavbarOpen: boolean;
  toggleNavbar: () => void;
};

const NavButton = ({ isNavbarOpen, toggleNavbar }: Props) => {
  return (
    <StyledButton isNavbarOpen={isNavbarOpen} toggleNavbar={toggleNavbar} onClick={toggleNavbar} />
  );
};

export default NavButton;

const StyledButton = styled.button<Props>`
  width: 1rem;
  height: 1rem;
  position: absolute;
  right: 6.4%;
  background-image: ${(props) =>
    props.isNavbarOpen ? `url(${closeIcon})` : `url(${hamburgerIcon})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 10;
  top: 50%;
  transform: translateY(-50%);
`;
