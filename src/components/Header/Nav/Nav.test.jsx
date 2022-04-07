import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import "jest-styled-components";
import { theme } from "../../../styles/theme";
import Nav from "./Nav";
import { BrowserRouter as Router } from "react-router-dom";

describe("Nav", () => {
  it("should be rendered as 'nav' element ", () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <Nav isNavbarOpen={false} />
        </Router>
      </ThemeProvider>
    );
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("should not be visible on mobile", () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <Nav isNavbarOpen={false} />
        </Router>
      </ThemeProvider>
    );
    const nav = screen.getByRole("navigation");
    expect(nav).toHaveStyle({ position: "absolute" });
    expect(nav).toHaveStyle({ transform: `translateX(400px)` });
  });

  it("should be visible when navbar is open", () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <Nav isNavbarOpen={true} />
        </Router>
      </ThemeProvider>
    );
    const nav = screen.getByRole("navigation");
    expect(nav).toHaveStyle({ position: "absolute" });
    expect(nav).toHaveStyle({ transform: "translateX(0)" });
  });

  it("should be visible on tablet and above", () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <Nav isNavbarOpen={false} />
        </Router>
      </ThemeProvider>
    );
    const nav = screen.getByRole("navigation");
    expect(nav).toHaveStyleRule("position", "relative", {
      media: "(min-width: 768px)",
    });
    expect(nav).toHaveStyleRule("transform", "translateX(0)", {
      media: "(min-width: 768px)",
    });
  });
});
