// Application constants and configuration
export const APP_CONFIG = {
  name: "Next.js SaaS Skeleton",
  author: "Dika Haris Abdurahman",
  description: "Skeleton SaaS modern berbasis Next.js 15",
  version: "0.1.0",
} as const;

// Page content constants
export const CONTENT = {
  home: {
    headline: "Selamat Datang di SaaS Skeleton",
    description:
      "Bangun aplikasi SaaS modern dengan Next.js 15, Clerk Auth, dan arsitektur modular. Nikmati fitur premium gratis untuk pengembangan lebih cepat dan efisien.",
    illustration: "/globe.svg",
    listItems: [
      "Manajemen user & profil",
      "Integrasi API & data",
      "Statistik & analitik",
      "Pengaturan akun",
    ],
  },
  dashboard: {
    headline: "Selamat Datang di Dashboard",
    description:
      "Kelola data, user, dan fitur SaaS Anda secara efisien. Dashboard ini memberikan akses ke statistik, integrasi, dan pengaturan akun Anda.",
    illustration: "/window.svg",
    listItems: [
      "Statistik & analitik aplikasi",
      "Manajemen user & profil",
      "Integrasi API & data bisnis",
      "Pengaturan akun dan keamanan",
    ],
  },
} as const;

// Alert messages
export const ALERTS = {
  home: {
    title: "💡 Info",
    description:
      "UI sudah menggunakan <strong>shadcn-ui</strong> dan mobile-first. Nikmati fitur premium gratis untuk pengembangan SaaS Anda!",
  },
  dashboard: {
    title: "📊 Dashboard Info",
    description:
      "Dashboard UI sudah menggunakan <strong>shadcn-ui</strong> dan mobile-first. Akses fitur SaaS Anda dengan mudah!",
  },
} as const;

// Navigation routes
export const ROUTES = {
  home: "/",
  dashboard: "/dashboard",
  settings: "/settings",
  api: "/api",
} as const;

// Button text constants
export const BUTTON_TEXT = {
  login: "Login dengan Akun",
  logout: "Logout",
  dashboard: "Dashboard",
  home: "Beranda",
  toDashboard: "Ke Dashboard",
  toHome: "Ke Beranda",
} as const;

// ARIA labels for accessibility
export const ARIA_LABELS = {
  login: "Login ke aplikasi",
  logout: "Logout dari aplikasi",
} as const;
