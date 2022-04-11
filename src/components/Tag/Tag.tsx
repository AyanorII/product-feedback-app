import React from 'react'
import styled from 'styled-components';
import Button from "../Button/Button";

type Props = {
  children: string;
}

const Tag = ({children}: Props) => {
  return (
    <StyledTag>{children}</StyledTag>
  )
}

export default Tag

const StyledTag = styled(Button)`
  padding: 0.375rem 1rem;
  background-color: ${(props) => props.theme.colors.light.dark};
  color: ${(props) => props.theme.colors.secondary.dark};

  &.active {
    background-color: ${(props) => props.theme.colors.tertiary.dark};
  }

  @media (min-width: 1024px) {
    &:hover {
      background-color: ${(props) => props.theme.colors.tertiary.dark};
      color: ${(props) => props.theme.colors.light.medium};
    }
  }
`;
