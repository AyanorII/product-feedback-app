import React from 'react'
import styled from 'styled-components';

type Props = {
  children: JSX.Element
}

const Card = ({children}: Props) => {
  return (
    <StyledCard>{children}</StyledCard>
  )
}

export default Card

const StyledCard = styled.div`
  padding: 1.5rem;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.light.light};
`;
