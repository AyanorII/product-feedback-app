import React from "react";
import { screen, render } from "@testing-library/react";
import SortByOptionButton from "./SortByButton";
import {ThemeProvider} from "styled-components"
import {theme} from "../../../styles/theme"

describe("SortByOptionButton", () => {

  it("should initialize with 'Most Upvotes' as text", () => {
    render(
      <ThemeProvider theme={theme}>
        <SortByOptionButton />
      </ThemeProvider>
    );
    const button = screen.getByRole("button", { name: "Sort by : Most Upvotes" });
    expect(button).toBeInTheDocument();
  });
});
