import React from "react";
import styled from "styled-components";

type Props = {
  isDropdownVisible: boolean;
  toggleDropdown: () => void;
};

const SortByButton = ({ isDropdownVisible, toggleDropdown }: Props) => {
  return (
    <StyledButton
      isDropdownVisible={isDropdownVisible}
      onClick={toggleDropdown}
    >
      Sort by : <StyledSpan data-testid="filter">Most Upvotes</StyledSpan>
      <Arrow
        src={require("../../../assets/shared/icon-arrow-down.svg")}
        isDropdownVisible={isDropdownVisible}
      />
    </StyledButton>
  );
};

export default SortByButton;

const StyledButton = styled.button<Pick<Props, "isDropdownVisible">>`
  color: ${(props) => props.theme.colors.light.medium};
`;

const StyledSpan = styled.span`
  position: relative;
  font-weight: 700;
  padding-right: 1rem;
`;

const Arrow = styled.img<Pick<Props, "isDropdownVisible">>`
  width: 10px;
  height: 10px;
  filter: invert(97%) sepia(100%) saturate(1%) hue-rotate(338deg)
    brightness(103%) contrast(100%);
  transform: ${(props) =>
    props.isDropdownVisible ? "rotate(180deg)" : "rotate(0)"};
  transition: all 0.25s;
`;
