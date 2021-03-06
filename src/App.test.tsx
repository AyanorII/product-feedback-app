import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { BrowserRouter as Router } from "react-router-dom";

describe("App", () => {
  it("renders without crashing", () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    );
  });
});
