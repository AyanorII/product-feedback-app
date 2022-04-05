import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./NavButton";
import closeIcon from "../../../assets/shared/mobile/icon-close.svg";
import hamburgerIcon from "../../../assets/shared/mobile/icon-hamburger.svg";

describe("Button", () => {
  it("should render properly", () => {
    render(<Button isNavbarOpen={false} toggleNavbar={() => null} />);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("should be initially rendered closed", () => {
    render(<Button isNavbarOpen={false} toggleNavbar={() => null} />);
    const button = screen.getByRole("button");

    expect(button).toHaveStyle({
      backgroundImage: `url(${hamburgerIcon})`,
    });
  });

  it("should change icon when clicked", () => {
    render(<Button isNavbarOpen={true} toggleNavbar={() => null} />);
    expect(screen.getByRole("button")).toHaveStyle({
      backgroundImage: `url(${closeIcon})`,
    });
  });
});
