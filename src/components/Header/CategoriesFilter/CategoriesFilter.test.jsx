import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import CategoriesFilter, { CategoriesEnum } from "./CategoriesFilter";

describe("CategoriesFilter", () => {
  it("should render the right number of categories", () => {
    render(
      <ThemeProvider theme={theme}>
        <CategoriesFilter />
      </ThemeProvider>
    );

    const categories = screen.getAllByRole("button");
    expect(categories.length).toEqual(Object.values(CategoriesEnum).length);
  });
});
