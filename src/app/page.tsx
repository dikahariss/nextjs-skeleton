import React from "react";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-white">
      <header className="w-full flex justify-between items-center px-8 py-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Image src="/next.svg" alt="Next.js logo" width={40} height={40} />
          <span className="text-xl font-bold tracking-tight text-gray-800">
            Next.js SaaS Skeleton
          </span>
        </div>
        <SignedIn>
          <div className="flex items-center gap-4">
            <UserButton />
            <a
              href="/dashboard"
              className="rounded bg-blue-600 text-white px-4 py-2 font-semibold hover:bg-blue-700 transition"
            >
              Dashboard
            </a>
          </div>
        </SignedIn>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Selamat Datang di SaaS Skeleton
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-xl">
          Kerangka kerja modern untuk membangun aplikasi SaaS dengan Next.js 15, Clerk Auth, dan
          arsitektur modular siap pakai.
        </p>
        <SignedOut>
          <SignInButton mode="modal" forceRedirectUrl="/dashboard">
            <button
              className="rounded bg-blue-600 text-white px-6 py-3 font-semibold text-lg shadow hover:bg-blue-700 transition"
              aria-label="Login ke aplikasi"
            >
              Login
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <a
            href="/dashboard"
            className="rounded bg-blue-600 text-white px-6 py-3 font-semibold text-lg shadow hover:bg-blue-700 transition"
          >
            Ke Dashboard
          </a>
        </SignedIn>
      </main>
      <footer className="w-full text-center py-6 text-gray-400 text-sm border-t border-gray-100">
        &copy; {new Date().getFullYear()} Dika Haris Abdurahman. Powered by Next.js & Clerk.
      </footer>
    </div>
  );
}
