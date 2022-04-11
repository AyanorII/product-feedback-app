import React from "react";
import styled from "styled-components";

type Props = {
  children: string;
  variant?: "primary" | "secondary" | "tertiary";
  className?: string;
};

const Button = ({ children, className, variant }: Props) => {
  return <StyledButton className={className} variant={variant}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button<Props>`
  border-radius: 10px;
  text-align: center;
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: 18px;
  padding: 0.625rem 1rem;
  background-color: ${(props) => {
    switch (props.variant) {
      case "primary":
        return props.theme.colors.primary;
      case "secondary":
        return props.theme.colors.secondary.light;
      case "tertiary":
        return props.theme.colors.tertiary.light;
      default:
        return props.theme.colors.grey.dark;
    }
  }};
  color: ${(props) => props.theme.colors.light.dark};
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
