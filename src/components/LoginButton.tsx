import React from "react";
import { SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { LoginIcon } from "@/components/icons";
import { BUTTON_TEXT, ARIA_LABELS, ROUTES } from "@/lib/constants";
import { getButtonStyles } from "@/lib/styles";
import { LoginButtonProps } from "@/lib/types";

export function LoginButton({
  size = "lg",
  className,
  forceRedirectUrl = ROUTES.dashboard,
}: LoginButtonProps) {
  return (
    <SignInButton mode="modal" forceRedirectUrl={forceRedirectUrl}>
      <Button
        size={size}
        className={`${getButtonStyles("primary")} ${className || "w-full max-w-xs mx-auto"}`}
        aria-label={ARIA_LABELS.login}
      >
        <LoginIcon />
        {BUTTON_TEXT.login}
      </Button>
    </SignInButton>
  );
}
