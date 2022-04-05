import React from "react";
import { render, screen } from "@testing-library/react";
import FeedbackBoard from "./FeedbackBoard";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";

describe("FeedbackBoard", () => {
  it("should render properly", () => {
    render(
      <ThemeProvider theme={theme}>
        <FeedbackBoard />
      </ThemeProvider>
    );

    const heading = screen.getByRole("heading", { name: "Frontend Mentor" });
    const subHeading = screen.getByRole("heading", { name: "Feedback Board" });

    expect(heading).toBeInTheDocument();
    expect(subHeading).toBeInTheDocument();
  });
});
