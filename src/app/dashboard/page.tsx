import React from "react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { MainCard } from "@/components/MainCard";
import { AppHeader } from "@/components/AppHeader";
import { AppFooter } from "@/components/AppFooter";
import { LoginButton } from "@/components/LoginButton";
import { InfoAlert } from "@/components/InfoAlert";
import { usePageContent } from "@/lib/hooks";
import { createHeaderConfig } from "@/lib/helpers";
import { ROUTES, BUTTON_TEXT } from "@/lib/constants";
import { getPageLayoutStyles } from "@/lib/styles";
import Link from "next/link";

export default function DashboardPage() {
  const { headline, description, illustration, listItems, alert } = usePageContent("dashboard");

  return (
    <div className={getPageLayoutStyles()}>
      <SignedOut>
        <AppHeader {...createHeaderConfig("Dashboard", { showHome: true })} />
        <MainCard
          headline={headline}
          description={description}
          illustration={illustration}
          showList={true}
          listItems={listItems}
          action={<LoginButton />}
        />
        <InfoAlert title={alert.title} description={alert.description} />
        <AppFooter />
      </SignedOut>
      <SignedIn>
        <AppHeader
          {...createHeaderConfig(
            "Dashboard",
            { showHome: true },
            { showUser: true, showLogout: true },
          )}
        />
        <MainCard
          headline={headline}
          description={description}
          illustration={illustration}
          showList={true}
          listItems={listItems}
          action={
            <Link href={ROUTES.home}>
              <Button
                size="lg"
                className="w-full max-w-xs mx-auto font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                variant="outline"
              >
                {BUTTON_TEXT.toHome}
              </Button>
            </Link>
          }
        />
        <InfoAlert title={alert.title} description={alert.description} />
        <AppFooter />
      </SignedIn>
    </div>
  );
}
