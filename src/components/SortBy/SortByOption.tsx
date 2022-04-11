import React from "react";
import styled from "styled-components";
import toCamelCase from "../../helpers/toCamelCase";

type Props = {
  children: string;
  name: string;
  value: string;
};

const SortByOption = ({ children, name, value }: Props) => {
  return (
    <StyledOption>
      <StyledLabel htmlFor={name}>{children}</StyledLabel>
      <StyledCheckbox name={name}value={value} />
    </StyledOption>
  );
};

export default SortByOption;

const StyledOption = styled.div`
  position: relative;
  width: 100%;
  padding-block: 1.25rem;
`;

const StyledLabel = styled.label`
  position: absolute;
  inset: 0;
`;

const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  position: absolute;
`;
