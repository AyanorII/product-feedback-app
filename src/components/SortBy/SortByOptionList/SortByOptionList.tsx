import React from "react";
import styled from "styled-components";
import Card from "../../Card/Card";
import SortByOption from "../SortByOption";
import toCamelCase from "../../../helpers/toCamelCase";

type Props = {
  isDropdownVisible: boolean;
};
export interface SortByInterface {
  mostUpvotes: boolean;
  leastUpvotes: boolean;
  mostComments: boolean;
  leastComments: boolean;
}

export const filters = [
  "Most Upvotes",
  "Least Upvotes",
  "Most Comments",
  "Least Comments",
];

const SortByOptionList = ({ isDropdownVisible }: Props) => {
  return (
    <StyledCard isDropdownVisible={isDropdownVisible}>
      <StyledList isDropdownVisible={isDropdownVisible}>
        {filters.map((filter) => (
          <SortByOption key={filter} name={toCamelCase(filter)} value={toCamelCase(filter)}>
            {filter}
          </SortByOption>
        ))}
      </StyledList>
    </StyledCard>
  );
};

export default SortByOptionList;

const StyledCard = styled(Card)<Props>`
  position: absolute;
  min-width: 180px;
  top: 2rem;
  height: ${(props) => (props.isDropdownVisible ? "220px" : "0px")};
  padding: ${props => props.isDropdownVisible ? "2rem" : "0"};
  overflow: hidden;
  transition: all 0.25s;
  opacity: ${props => props.isDropdownVisible ? 1 : 0};
  `;

const StyledList = styled.ul<Props>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: ${(props) => (props.isDropdownVisible ? "150px" : "0px")};
  transition: all 0.25s;
`;
