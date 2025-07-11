import React from "react";
import { UserButton, SignOutButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface AppHeaderProps {
  title: string;
  showDashboard?: boolean;
  dashboardHref?: string;
  showUser?: boolean;
  showLogout?: boolean;
  showHome?: boolean;
  homeHref?: string;
}

export function AppHeader({
  title,
  showDashboard,
  dashboardHref,
  showUser,
  showLogout,
  showHome,
  homeHref,
}: AppHeaderProps) {
  return (
    <header className="w-full flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-4 sm:py-6 border-b border-gray-200 gap-2 sm:gap-0">
      <div className="flex items-center gap-2">
        <Image src="/next.svg" alt="Next.js logo" width={40} height={40} />
        <span className="text-lg sm:text-xl font-bold tracking-tight text-gray-800">{title}</span>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        {showUser && <UserButton />}
        {showDashboard && dashboardHref && (
          <a href={dashboardHref}>
            <Button variant="secondary" size="sm" className="w-full sm:w-auto">
              Dashboard
            </Button>
          </a>
        )}
        {showHome && homeHref && (
          <a href={homeHref}>
            <Button variant="secondary" size="sm" className="w-full sm:w-auto">
              Beranda
            </Button>
          </a>
        )}
        {showLogout && (
          <SignOutButton>
            <Button
              size="sm"
              variant="destructive"
              className="w-full sm:w-auto flex items-center gap-2 font-bold shadow-md bg-gradient-to-r from-red-500 to-red-700 text-white hover:from-red-600 hover:to-red-800 transition-all duration-200"
              aria-label="Logout dari aplikasi"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15"
                />
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 12l3-3m0 0l-3-3m3 3H9" />
              </svg>
              Logout
            </Button>
          </SignOutButton>
        )}
      </div>
    </header>
  );
}
