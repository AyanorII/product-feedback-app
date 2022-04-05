import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import Card from "./Card";

describe("Card", () => {
  it("should have padding of 1.5rem", () => {
    render(
      <ThemeProvider theme={theme}>
        <Card>card</Card>
      </ThemeProvider>
    );
    const card = screen.getByText("card");

    expect(card).toHaveStyle({ padding: "1.5rem" });
  });
});
