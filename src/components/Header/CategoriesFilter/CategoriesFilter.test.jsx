import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import CategoriesFilter from "./CategoriesFilter";
import {CategoriesEnum} from "../../../interfaces/CategoriesEnum"

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
