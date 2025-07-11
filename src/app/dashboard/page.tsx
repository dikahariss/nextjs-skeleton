import React from "react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { MainCard } from "@/components/MainCard";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AppHeader } from "@/components/AppHeader";
import { AppFooter } from "@/components/AppFooter";
import Link from "next/link";

const dashboardHeadline = "Selamat Datang di Dashboard";
const dashboardDescription =
  "Kelola data, user, dan fitur SaaS Anda secara efisien. Dashboard ini memberikan akses ke statistik, integrasi, dan pengaturan akun Anda.";
const illustration = "/window.svg";
const dashboardListItems = [
  "Statistik & analitik aplikasi",
  "Manajemen user & profil",
  "Integrasi API & data bisnis",
  "Pengaturan akun dan keamanan",
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-white">
      <SignedOut>
        <AppHeader title="Dashboard" showHome={true} homeHref="/" />
        <MainCard
          headline={dashboardHeadline}
          description={dashboardDescription}
          illustration={illustration}
          showList={true}
          listItems={dashboardListItems}
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
            <AlertTitle className="text-base font-semibold">📊 Dashboard Info</AlertTitle>
            <AlertDescription className="text-sm leading-relaxed">
              Dashboard UI sudah menggunakan <strong>shadcn-ui</strong> dan mobile-first. Akses
              fitur SaaS Anda dengan mudah!
            </AlertDescription>
          </Alert>
        </div>
        <AppFooter />
      </SignedOut>
      <SignedIn>
        <AppHeader
          title="Dashboard"
          showHome={true}
          homeHref="/"
          showUser={true}
          showLogout={true}
        />
        <MainCard
          headline={dashboardHeadline}
          description={dashboardDescription}
          illustration={illustration}
          showList={true}
          listItems={dashboardListItems}
          action={
            <Link href="/">
              <Button
                size="lg"
                className="w-full max-w-xs mx-auto font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                variant="outline"
              >
                Ke Beranda
              </Button>
            </Link>
          }
        />
        <div className="px-4 sm:px-6 pb-8">
          <Alert className="w-full max-w-lg mx-auto shadow-md" variant="default">
            <AlertTitle className="text-base font-semibold">📊 Dashboard Info</AlertTitle>
            <AlertDescription className="text-sm leading-relaxed">
              Dashboard UI sudah menggunakan <strong>shadcn-ui</strong> dan mobile-first. Akses
              fitur SaaS Anda dengan mudah!
            </AlertDescription>
          </Alert>
        </div>
        <AppFooter />
      </SignedIn>
    </div>
  );
}
