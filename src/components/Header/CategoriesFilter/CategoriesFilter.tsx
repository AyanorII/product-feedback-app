import React from "react";
import styled from "styled-components";
import Button from "../../Button/Button";
import Card from "../../Card/Card";
import { CategoriesEnum } from "../../../interfaces/CategoriesEnum";

type Props = {};

const CategoriesFilter = (props: Props) => {
  return (
    <Card>
      <StyledCategories>
        <ul>
          {Object.values(CategoriesEnum).map((category) => {
            return (
              <li key={category}>
                <Button>{category}</Button>
              </li>
            );
          })}
        </ul>
      </StyledCategories>
    </Card>
  );
};

export default CategoriesFilter;

const StyledCategories = styled.div`
  background-color: ${(props) => props.theme.colors.light.light};

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
`;
