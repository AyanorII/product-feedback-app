import React from "react";
import styled from "styled-components";
import CategoriesFilter from "../CategoriesFilter/CategoriesFilter";
import RoadMapCard from "../RoadMapCard/RoadMapCard";

type Props = {
  isNavbarOpen: boolean;
};

const Nav = ({ isNavbarOpen }: Props) => {
  return (
    <StyledNav isNavbarOpen={isNavbarOpen}>
      <CategoriesFilter />
      <RoadMapCard />
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled.nav<Props>`
  position: absolute;
  transform: translateX(${(props) => (props.isNavbarOpen ? "0" : "400px")});
  width: 70%;
  right: 0;
  top: 73px;
  padding: 1.5rem;
  transition: all 0.35s ease-in-out;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.light.dark};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1.5rem;

  @media (min-width: 768px) {
    position: relative;
    transform: translateX(0)
  }
`;
