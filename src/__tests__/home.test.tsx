import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";
import { vi } from "vitest";

vi.mock("@clerk/nextjs", () => ({
  SignedIn: () => null,
  SignedOut: ({ children }: React.PropsWithChildren) => <>{children}</>,
  SignInButton: ({ children }: React.PropsWithChildren) => (
    <div data-testid="signin-button">{children}</div>
  ),
  UserButton: () => <div data-testid="user-button">UserButton</div>,
}));

describe("Home", () => {
  it("renders headline and code block", () => {
    render(<Home />);
    expect(screen.getByText(/Selamat Datang di SaaS Skeleton/i)).toBeInTheDocument();
  });

  it("shows login button when signed out", () => {
    render(<Home />);
    expect(screen.getByTestId("signin-button")).toBeInTheDocument();
  });
});
