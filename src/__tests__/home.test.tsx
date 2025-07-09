import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home", () => {
  it("renders headline and code block", () => {
    render(<Home />);
    expect(screen.getByText(/Get started by editing/i)).toBeInTheDocument();
    expect(screen.getByText("src/app/page.tsx")).toBeInTheDocument();
  });
});
