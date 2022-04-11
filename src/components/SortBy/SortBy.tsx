import React, { useState } from "react";
import SortByButton from "./SortByButton";
import SortByOptionList, { SortByInterface } from "./SortByOptionList"
import styled from 'styled-components';

type Props = {};

const SortBy = (props: Props) => {
  const [sortBy, setSortBy] = useState<SortByInterface>({
    mostUpvotes: false,
    leastUpvotes: false,
    mostComments: false,
    leastComments: false,
  });

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <Wrapper>
      <SortByButton
        isDropdownVisible={isDropdownVisible}
        toggleDropdown={toggleDropdown}
      />
      <SortByOptionList isDropdownVisible={isDropdownVisible}/>
    </Wrapper>
  );
};

export default SortBy;

const Wrapper = styled.div`
  position: relative
`;
