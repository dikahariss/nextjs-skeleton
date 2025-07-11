# Next.js 15 SaaS Skeleton Project

[![Next.js](https://img.shields.io/badge/Next.js-15.3.5-000000?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Vitest-3.2.4-yellow?logo=vitest)](https://vitest.dev/)
[![Playwright](https://img.shields.io/badge/Playwright-1.53.2-2EAD33?logo=playwright)](https://playwright.dev/)

---

> **Skeleton SaaS modern berbasis Next.js 15, siap pakai untuk pengembangan aplikasi SaaS dengan best practice, arsitektur modular, dan tooling modern.**

---

## 🚀 Overview

This project is a comprehensive skeleton for building modern SaaS applications with Next.js 15. It provides a solid foundation with industry best practices, modular architecture, and modern tooling to accelerate development and ensure maintainable, scalable code.

---

## ✨ Stack & Fitur Utama

- **Next.js 15** (App Router, Server Components, Partial Prerendering)
- **React 19** (Modern React, Server Components)
- **TypeScript** (Type safety menyeluruh)
- **Tailwind CSS 4** & **shadcn-ui** (UI utility-first, komponen siap pakai)
- **Clerk Auth** (Proteksi route, social login, email/password, middleware)
- **Testing Modern**: Vitest (unit/integration), Playwright (E2E, login/logout, proteksi dashboard)
- **Code Quality**: ESLint, Prettier, Husky, lint-staged
- **Turbopack** (dev super cepat)
- **Struktur Modular**: src/app, components/ui, lib, dsb
- **Siap CI/CD**: Mudah diintegrasi pipeline modern

---

## 📂 Struktur Project

```
├── components.json           # Konfigurasi shadcn-ui
├── e2e/                     # E2E test (Playwright)
│   ├── auth-dashboard.spec.ts
│   └── home.spec.ts
├── public/                  # File statis (icon, gambar, dsb)
├── src/
│   ├── app/                 # Halaman, layout, entry Next.js
│   ├── components/          # Komponen utama & UI (shadcn-ui)
│   │   ├── AppFooter.tsx
│   │   ├── AppHeader.tsx
│   │   ├── MainCard.tsx
│   │   └── ui/              # Komponen UI kecil (button, card, alert, input)
│   ├── lib/                 # Utility/helper (misal: cn)
│   └── __tests__/           # Unit & integration test (Vitest)
├── .husky/                  # Pre-commit hooks
├── .eslintrc.js, .prettierrc, next.config.ts, vitest.config.ts, package.json, tsconfig.json
```

**Keterangan:**

- `src/app/` : Halaman utama, layout, entry point Next.js
- `src/components/` : Komponen utama, reusable, dan UI shadcn
- `src/components/ui/` : Komponen UI kecil (button, card, alert, input)
- `src/lib/` : Utility/helper
- `src/__tests__/` : Unit & integration test
- `e2e/` : E2E test Playwright
- `public/` : File statis

---

## 🛠️ Getting Started

### Prasyarat

- Node.js 20.x atau lebih baru
- Yarn (disarankan)

### Instalasi

1. Clone repository
   ```bash
   git clone https://github.com/dikahariss/nextjs-skeleton.git
   cd nextjs-skeleton
   ```
2. Install dependencies
   ```bash
   yarn install
   ```
3. Copy file environment variable contoh ke file lokal (penting untuk konfigurasi)
   ```bash
   cp .env.example .env.local
   ```
4. Edit `.env.local` sesuai kebutuhan project Anda (isi kredensial, dsb).
5. Start development server
   ```bash
   yarn dev
   ```

Aplikasi akan berjalan di [http://localhost:3000](http://localhost:3000).

---

## ⚙️ Environment Variables

Untuk konfigurasi environment variables, gunakan file `.env.local` di root project. File ini berisi semua variable yang dibutuhkan untuk menjalankan aplikasi.

### Contoh isi `.env.local`

```
NEXT_PUBLIC_API_URL=http://localhost:3000/api
DATABASE_URL=postgres://user:password@localhost:5432/dbname
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_TEST_USERNAME=your_test_username
CLERK_TEST_PASSWORD=your_test_password
```

---

## 📋 Available Scripts

| Command             | Description                          |
| ------------------- | ------------------------------------ |
| `yarn dev`          | Start development server (Turbopack) |
| `yarn build`        | Build for production                 |
| `yarn start`        | Start production server              |
| `yarn lint`         | Run ESLint                           |
| `yarn format`       | Format code with Prettier            |
| `yarn format:check` | Check code formatting                |
| `yarn test`         | Run unit/integration tests (Vitest)  |
| `yarn test:ui`      | Run Vitest UI interactive            |
| `yarn e2e`          | Run E2E tests (Playwright)           |
| `yarn e2e:ui`       | Run Playwright UI interactive        |

---

## 🔒 Auth Module (Clerk)

- Menggunakan Clerk untuk autentikasi (social login, email/password)
- Proteksi route dashboard & API dengan middleware Clerk
- Komponen SignedIn/SignedOut, UserButton, SignInButton, SignOutButton
- Pengujian unit (mock Clerk context) dan e2e (login otomatis & proteksi dashboard)
- Contoh kredensial test diatur di `.env.local`

## 🧪 Testing & Quality

### Unit & Integration Tests

- Folder: `src/__tests__/`
- Tools: Vitest, React Testing Library
- Jalankan: `yarn test` atau `yarn test:ui`

### End-to-End Tests

- Folder: `e2e/`
- Tools: Playwright
- Jalankan: `yarn e2e` atau `yarn e2e:ui`

### Coverage

- Coverage report otomatis saat test (lihat output terminal atau folder coverage jika diaktifkan)

### Linting & Formatting

- Jalankan lint: `yarn lint`
- Format code: `yarn format`

### Pre-commit Hooks

- Husky & lint-staged: otomatis lint, format, type-check, dan test sebelum commit

---

## 🚢 Deployment

### Self-hosted Deployment

1. Build aplikasi:
   ```bash
   yarn build
   ```
2. Jalankan server production:
   ```bash
   yarn start
   ```
3. Pastikan environment variables sudah di-setup di server production.
4. Gunakan process manager seperti PM2 atau Docker untuk production stability.

### Production Checklist

- Pastikan environment variables sudah benar
- Aktifkan monitoring/logging (contoh: Sentry, LogRocket, dsb)
- Integrasi dengan CI/CD pipeline (GitHub Actions, dsb)

---

## 🤝 Contributing

Kami sangat terbuka untuk kontribusi! Silakan baca [CONTRIBUTING.md](./CONTRIBUTING.md) dan [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) sebelum mulai.

### Panduan Singkat

1. Buat branch feature dari `main`
2. Gunakan format Conventional Commits
3. Pastikan semua test & linting lolos sebelum PR
4. Jelaskan perubahan di PR

---

## 🗺️ Roadmap

- [x] Auth & Authorization module
- [ ] Database & ORM integration
- [ ] API layer & data fetching
- [ ] Admin dashboard
- [ ] Design system & UI components
- [ ] Payment gateway
- [ ] Advanced caching
- [ ] Analytics & monitoring
- [ ] SEO tools
- [ ] Internationalization (i18n)

---

## ❓ FAQ & Troubleshooting

**Q: Error saat install dependency?**
A: Pastikan Node.js & Yarn versi terbaru.

**Q: Masalah environment variable?**
A: Cek `.env.local` dan pastikan format/value sudah benar.

**Q: Test gagal di CI?**
A: Jalankan `yarn lint && yarn test && yarn e2e` secara lokal sebelum push.

---

## 📄 License

MIT License. See [LICENSE](./LICENSE) for details.

---

## 📚 Resources & Community

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vitest Documentation](https://vitest.dev/guide/)
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [GitHub Discussions](https://github.com/dikahariss/nextjs-skeleton/discussions)
- [Join our Discord](https://discord.gg/your-invite-link)
