import React from 'react'
import styled from 'styled-components';
import Button from '../Button/Button';
import SortBy from '../SortBy/SortBy';

type Props = {}

const Top = (props: Props) => {
  return (
    <StyledTop>
      <SortBy />
      <Button variant="primary">+ Add Feedback</Button>
    </StyledTop>
  )
}

export default Top

const StyledTop = styled.div`
  background-color: ${props => props.theme.colors.grey.medium};
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;
