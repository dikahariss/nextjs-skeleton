import React from "react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { MainCard } from "@/components/MainCard";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AppHeader } from "@/components/AppHeader";
import { AppFooter } from "@/components/AppFooter";
import Link from "next/link";

const headline = "Selamat Datang di SaaS Skeleton";
const description =
  "Bangun aplikasi SaaS modern dengan Next.js 15, Clerk Auth, dan arsitektur modular. Nikmati fitur premium gratis untuk pengembangan lebih cepat dan efisien.";
const illustration = "/globe.svg";
const listItems = [
  "Manajemen user & profil",
  "Integrasi API & data",
  "Statistik & analitik",
  "Pengaturan akun",
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-white">
      <SignedOut>
        <AppHeader title="Next.js SaaS Skeleton" showDashboard={true} dashboardHref="/dashboard" />
        <MainCard
          headline={headline}
          description={description}
          illustration={illustration}
          showList={true}
          listItems={listItems}
          action={
            <SignInButton mode="modal" forceRedirectUrl="/dashboard">
              <Button
                size="lg"
                className="w-full max-w-xs mx-auto flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
                aria-label="Login ke aplikasi"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 12l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
                Login dengan Akun
              </Button>
            </SignInButton>
          }
        />
        <div className="px-4 sm:px-6 pb-8">
          <Alert className="w-full max-w-lg mx-auto shadow-md" variant="default">
            <AlertTitle className="text-base font-semibold">💡 Info</AlertTitle>
            <AlertDescription className="text-sm leading-relaxed">
              UI sudah menggunakan <strong>shadcn-ui</strong> dan mobile-first. Nikmati fitur
              premium gratis untuk pengembangan SaaS Anda!
            </AlertDescription>
          </Alert>
        </div>
        <AppFooter />
      </SignedOut>
      <SignedIn>
        <AppHeader
          title="Next.js SaaS Skeleton"
          showDashboard={true}
          dashboardHref="/dashboard"
          showUser={true}
        />
        <MainCard
          headline={headline}
          description={description}
          illustration={illustration}
          showList={true}
          listItems={listItems}
          action={
            <Link href="/dashboard">
              <Button
                size="lg"
                className="w-full max-w-xs mx-auto font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                variant="default"
              >
                Ke Dashboard
              </Button>
            </Link>
          }
        />
        <div className="px-4 sm:px-6 pb-8">
          <Alert className="w-full max-w-lg mx-auto shadow-md" variant="default">
            <AlertTitle className="text-base font-semibold">💡 Info</AlertTitle>
            <AlertDescription className="text-sm leading-relaxed">
              UI sudah menggunakan <strong>shadcn-ui</strong> dan mobile-first. Nikmati fitur
              premium gratis untuk pengembangan SaaS Anda!
            </AlertDescription>
          </Alert>
        </div>
        <AppFooter />
      </SignedIn>
    </div>
  );
}
