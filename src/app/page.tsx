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
import { APP_CONFIG, ROUTES, BUTTON_TEXT } from "@/lib/constants";
import { getPageLayoutStyles } from "@/lib/styles";
import Link from "next/link";

export default function Home() {
  const { headline, description, illustration, listItems, alert } = usePageContent("home");

  return (
    <div className={getPageLayoutStyles()}>
      <SignedOut>
        <AppHeader {...createHeaderConfig(APP_CONFIG.name, { showDashboard: true })} />
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
          {...createHeaderConfig(APP_CONFIG.name, { showDashboard: true }, { showUser: true })}
        />
        <MainCard
          headline={headline}
          description={description}
          illustration={illustration}
          showList={true}
          listItems={listItems}
          action={
            <Link href={ROUTES.dashboard}>
              <Button
                size="lg"
                className="w-full max-w-xs mx-auto font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                variant="default"
              >
                {BUTTON_TEXT.toDashboard}
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
