import React from "react";
import Header from "./Header";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { BrowserRouter as Router } from "react-router-dom";

describe("Header", () => {
  it("should render properly", () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
        </Router>
      </ThemeProvider>
    );
  });
});
