import React from "react";
import { UserButton, SignOutButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { LogoutIcon } from "@/components/icons";
import { BUTTON_TEXT, ARIA_LABELS } from "@/lib/constants";
import { getButtonStyles } from "@/lib/styles";
import { AppHeaderConfig } from "@/lib/types";
import Image from "next/image";

export function AppHeader({ title, navigation, user }: AppHeaderConfig) {
  return (
    <header className="w-full flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-4 sm:py-6 border-b border-gray-200 gap-2 sm:gap-0">
      <div className="flex items-center gap-2">
        <Image src="/next.svg" alt="Next.js logo" width={40} height={40} />
        <span className="text-lg sm:text-xl font-bold tracking-tight text-gray-800">{title}</span>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        {user?.showUser && <UserButton />}
        {navigation?.dashboard?.show && (
          <a href={navigation.dashboard.href}>
            <Button variant="secondary" size="sm" className="w-full sm:w-auto">
              {BUTTON_TEXT.dashboard}
            </Button>
          </a>
        )}
        {navigation?.home?.show && (
          <a href={navigation.home.href}>
            <Button variant="secondary" size="sm" className="w-full sm:w-auto">
              {BUTTON_TEXT.home}
            </Button>
          </a>
        )}
        {user?.showLogout && (
          <SignOutButton>
            <Button
              size="sm"
              variant="destructive"
              className={getButtonStyles("danger")}
              aria-label={ARIA_LABELS.logout}
            >
              <LogoutIcon />
              {BUTTON_TEXT.logout}
            </Button>
          </SignOutButton>
        )}
      </div>
    </header>
  );
}
