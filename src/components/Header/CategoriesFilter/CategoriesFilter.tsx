import React from "react";
import styled from "styled-components";
import Card from "../../Card/Card";
import { CategoriesEnum } from "../../../interfaces/CategoriesEnum";
import Tag from "../../Tag/Tag";

type Props = {};

const CategoriesFilter = (props: Props) => {
  return (
    <Card>
      <StyledCategories>
        <ul>
          {Object.values(CategoriesEnum).map((category) => {
            return (
              <li key={category}>
                <Tag>{category}</Tag>
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
