import React from "react";
import { render, screen } from "@testing-library/react";
import DashboardPage from "../app/dashboard/page";
import { vi } from "vitest";

// Gunakan variable global untuk kontrol SignedIn/SignedOut
let signedIn = true;

vi.mock("@clerk/nextjs", () => ({
  SignedIn: ({ children }: React.PropsWithChildren) => (signedIn ? <>{children}</> : null),
  SignedOut: ({ children }: React.PropsWithChildren) => (!signedIn ? <>{children}</> : null),
  UserButton: () => <div data-testid="user-button">UserButton</div>,
  SignOutButton: ({ children }: React.PropsWithChildren) => {
    const childElement = React.Children.only(children) as React.ReactElement;
    return React.cloneElement(childElement, { "data-testid": "signout-button" });
  },
  SignInButton: ({ children }: React.PropsWithChildren) => (
    <div data-testid="signin-button">{children}</div>
  ),
}));

describe("DashboardPage", () => {
  afterEach(() => {
    signedIn = true;
  });

  it("renders dashboard content when signed in", () => {
    signedIn = true;
    render(<DashboardPage />);
    expect(screen.getByText(/Selamat Datang di Dashboard/i)).toBeInTheDocument();
    expect(screen.getByTestId("user-button")).toBeInTheDocument();
    expect(screen.getByText(/Logout/i)).toBeInTheDocument();
    expect(screen.getByText(/Ke Beranda/i)).toBeInTheDocument();
  });

  it("renders login prompt when signed out", () => {
    signedIn = false;
    render(<DashboardPage />);
    expect(screen.getByText(/Selamat Datang di Dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Login dengan Akun/i)).toBeInTheDocument();
    expect(screen.getByTestId("signin-button")).toBeInTheDocument();
  });
});
