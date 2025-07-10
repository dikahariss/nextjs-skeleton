import React from "react";
import { SignedIn, SignedOut, SignInButton, UserButton, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <>
      <SignedIn>
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-blue-50">
          <header className="w-full flex justify-between items-center px-8 py-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Image src="/next.svg" alt="Next.js logo" width={40} height={40} />
              <span className="text-xl font-bold tracking-tight text-gray-800">Dashboard</span>
            </div>
            <div className="flex items-center gap-4">
              <UserButton />
              <SignOutButton redirectUrl="/">
                <button
                  className="rounded bg-gray-200 text-black px-4 py-2 font-semibold hover:bg-gray-300 transition"
                  aria-label="Logout dari aplikasi"
                >
                  Logout
                </button>
              </SignOutButton>
            </div>
          </header>
          <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              Selamat Datang di Dashboard
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Anda berhasil login! Ini adalah area privat aplikasi SaaS Anda. Silakan kembangkan
              fitur sesuai kebutuhan bisnis Anda.
            </p>
            <div className="mt-8 flex flex-col gap-4 w-full max-w-md">
              <div className="rounded-lg bg-white shadow p-6 text-left border border-gray-100">
                <h2 className="text-xl font-bold mb-2">Contoh Fitur</h2>
                <ul className="list-disc list-inside text-gray-700 text-base">
                  <li>Manajemen user & profil</li>
                  <li>Integrasi API & data</li>
                  <li>Statistik & analitik</li>
                  <li>Pengaturan akun</li>
                </ul>
              </div>
            </div>
          </main>
          <footer className="w-full text-center py-6 text-gray-400 text-sm border-t border-gray-100">
            &copy; {new Date().getFullYear()} Dika Haris Abdurahman. Powered by Next.js & Clerk.
          </footer>
        </div>
      </SignedIn>
      <SignedOut>
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-blue-50">
          <header className="w-full flex justify-between items-center px-8 py-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Image src="/next.svg" alt="Next.js logo" width={40} height={40} />
              <span className="text-xl font-bold tracking-tight text-gray-800">Dashboard</span>
            </div>
          </header>
          <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Akses Dashboard Memerlukan Login
            </h1>
            <p className="text-base text-gray-600 mb-8 max-w-md">
              Silakan login untuk mengakses fitur premium, keamanan data, dan pengalaman penuh
              aplikasi SaaS ini.
            </p>
            <SignInButton mode="modal" forceRedirectUrl="/dashboard">
              <button
                className="rounded bg-blue-600 text-white px-6 py-3 font-semibold text-lg shadow hover:bg-blue-700 transition"
                aria-label="Login ke dashboard"
              >
                Login untuk Akses Dashboard
              </button>
            </SignInButton>
          </main>
          <footer className="w-full text-center py-6 text-gray-400 text-sm border-t border-gray-100">
            &copy; {new Date().getFullYear()} Dika Haris Abdurahman. Powered by Next.js & Clerk.
          </footer>
        </div>
      </SignedOut>
    </>
  );
}
