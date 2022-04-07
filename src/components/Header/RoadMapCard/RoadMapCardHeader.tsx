import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
type Props = {};

const RoadMapCardHeader = (props: Props) => {
  return (
    <Wrapper>
      <h3>Roadmap</h3>
      <StyledLink to="/roadmap">View</StyledLink>
    </Wrapper>
  );
};

export default RoadMapCardHeader;

const StyledLink = styled(Link)`
  text-decoration: underline;
  font-size: 0.8125rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  h3 {
    font-size: 1.125rem;
  }
`;
