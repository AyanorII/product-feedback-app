import React from "react";
import SortByOptionList, { filters } from "./SortByOptionList";
import { screen, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";

describe("SortByOptionList", () => {
  it("should not be shown when initialize", () => {
    render(
      <ThemeProvider theme={theme}>
        <SortByOptionList isDropdownVisible={false} />
      </ThemeProvider>
    );

    const list = screen.getByRole("list");
    expect(list).not.toBeVisible();
  });

  it("should be shown when dropdown is visible", () => {
    render(
      <ThemeProvider theme={theme}>
        <SortByOptionList isDropdownVisible={true} />
      </ThemeProvider>
    );

    const list = screen.getByRole("list");
    expect(list).toBeVisible();
  })

  it("should have the exact number of choices", () => {
    render(
      <ThemeProvider theme={theme}>
        <SortByOptionList isDropdownVisible={false} />
      </ThemeProvider>
    );

    const listItemsLength = screen.getAllByRole("listitem").length;
    const interfaceLength = filters.length;
    expect(listItemsLength).toBe(interfaceLength);
  });
});
