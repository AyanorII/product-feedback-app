import React from "react";
import styled from "styled-components";

type Props = {
  children: string;
};

const Button = ({ children }: Props) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  border-radius: 10px;
  text-align: center;
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: 18px;
  padding: 0.375rem 1rem;
  background-color: ${(props) => props.theme.colors.light.dark};
  color: ${(props) => props.theme.colors.tertiary.dark};
  transition: 0.35s ease-in-out;

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
