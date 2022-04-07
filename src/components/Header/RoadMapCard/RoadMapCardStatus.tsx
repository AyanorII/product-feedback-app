import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductInterface from "../../../interfaces/ProductInterface";

type Status = "Planned" | "In-Progress" | "Completed";

export interface StatusInterface {
  status: Status;
  color: string;
}

export const statusList: StatusInterface[] = [
  { status: "Planned", color: "#F49F85" },
  { status: "In-Progress", color: "#AD1FEA" },
  { status: "Completed", color: "#62BCFA" },
];

interface StatusCount {
  planned: number;
  inProgress: number;
  completed: number;
}

export const toCamelCase = (str: string): string => {
  const strArr = str.split("-");
  const camelCaseStr = strArr.map((item, index) => {
    if (index === 0) {
      return item.toLowerCase();
    }
    return item[0].toUpperCase() + item.slice(1);
  });
  return camelCaseStr.join("");
};

const RoadMapCardStatus = () => {
  const [statusItemsCount, setStatusItemsCount] = useState({
    planned: 0,
    inProgress: 0,
    completed: 0,
  });

  useEffect(() => {
    const uri = "http://localhost:9000/api/products";

    fetch(uri)
      .then((data) => data.json())
      .then((products: ProductInterface[]) => {
        products.forEach((product) => {
          switch (product.status) {
            case "suggestion":
              setStatusItemsCount({
                ...statusItemsCount,
                planned: statusItemsCount.planned++,
              });
              break;
            case "planned":
              setStatusItemsCount({
                ...statusItemsCount,
                inProgress: statusItemsCount.inProgress++,
              });
              break;
            case "live":
              setStatusItemsCount({
                ...statusItemsCount,
                completed: statusItemsCount.completed++,
              });
              break;
          }
        });
      });
  }, []);

  return (
    <StyledList>
      {statusList.map((item) => {
        const { status, color } = item;
        const count =
          statusItemsCount[toCamelCase(status) as keyof StatusCount];

        return (
          <StyledListItem key={status} color={color}>
            {status}
            <span data-testid="count">{count}</span>
          </StyledListItem>
        );
      })}
    </StyledList>
  );
};

export default RoadMapCardStatus;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;

const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    display: inline-block;
    margin-right: 1rem;
  }
`;
