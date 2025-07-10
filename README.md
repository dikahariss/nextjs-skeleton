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

## ✨ Key Features

- **Next.js 15 App Router**: Latest routing, layouts, server components, Server Actions, Partial Prerendering
- **React 19**: Modern React patterns, optimizations, and Server Components
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling
- **Testing Suite**: Vitest (unit/integration), Playwright (E2E)
- **Code Quality**: ESLint, Prettier, Husky, lint-staged
- **Turbopack**: Fast local development
- **Modular Structure**: Scalable folder structure for SaaS
- **Ready for CI/CD**: Easy integration with modern pipelines

---

## 📂 Project Structure

```
├── .github/          # GitHub workflow configurations
├── .husky/           # Husky pre-commit hook configurations
├── e2e/              # End-to-end tests with Playwright
├── public/           # Static assets
├── src/
│   ├── app/          # Next.js app router pages and layouts
│   └── __tests__/    # Unit and integration tests
├── .eslintrc.js      # ESLint configuration
├── .prettierrc       # Prettier configuration
├── next.config.ts    # Next.js configuration
├── package.json      # Project dependencies and scripts
├── tsconfig.json     # TypeScript configuration
└── vitest.config.ts  # Vitest configuration
```

**Penjelasan singkat:**

- `src/app/`: Semua halaman, layout, dan komponen utama aplikasi.
- `src/__tests__/`: Unit & integration tests.
- `e2e/`: End-to-end tests (Playwright).
- `public/`: File statis (gambar, favicon, dsb).

---

## 🛠️ Getting Started

### Prasyarat

- Node.js 20.x atau lebih baru
- Yarn (disarankan)

### Instalasi

1. Clone repository
   ```bash
   git clone https://github.com/your-organization/nextjs15-skeleton.git
   cd nextjs15-skeleton
   ```
2. Install dependencies
   ```bash
   yarn install
   ```
3. Setup environment variables
   ```bash
   cp .env.example .env.local
   ```
4. Start development server
   ```bash
   yarn dev
   ```

Aplikasi akan berjalan di [http://localhost:3000](http://localhost:3000).

---

## ⚙️ Environment Variables

Contoh file `.env.example` sudah disediakan. Edit `.env.local` sesuai kebutuhan project Anda.

### Contoh isi `.env.example`

```
NEXT_PUBLIC_API_URL=http://localhost:3000/api
DATABASE_URL=postgres://user:password@localhost:5432/dbname
JWT_SECRET=your_jwt_secret
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

- [ ] Auth & Authorization module
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
- [GitHub Discussions](https://github.com/your-organization/nextjs15-skeleton/discussions)
- [Join our Discord](https://discord.gg/your-invite-link)
