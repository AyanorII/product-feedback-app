import React from "react";
import { screen, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import RoadMapCardStatus, { statusList } from "./RoadMapCardStatus";
import { BrowserRouter as Router } from "react-router-dom";
import toCamelCase from "../../../helpers/toCamelCase"

describe("RoadMapCard", () => {
  it("should render the correct statuses", () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <RoadMapCardStatus />
        </Router>
      </ThemeProvider>
    );

    const listItems = screen.getAllByRole("listitem");
    const status = listItems.map((item) =>
      item.innerHTML.replace(/<span.*>[\d]<\/?span>/g, "")
    );

    expect(status.sort()).toEqual(statusList.map((item) => item.status).sort());
  });

  it("should render the correct number of each status's product", () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <RoadMapCardStatus />
        </Router>
      </ThemeProvider>
    );

    const counts = screen.getAllByTestId("count");

    expect(counts.length).toBe(3);
    expect(counts.every((count) => count.innerHTML === "0")).toBe(true);
  });
});

describe("toCamelCase", () => {
  it("should return the string with camel case", () => {
    expect(toCamelCase("In-Progress")).toEqual("inProgress");
  });
});
