# Contributing Guide

Terima kasih telah tertarik untuk berkontribusi pada proyek ini!

## Cara Berkontribusi

1. **Fork repository ini** dan buat branch baru dari `main`.
   - Contoh: `feature/nama-fitur`, `fix/bug-deskripsi`, `chore/update-deps`
2. **Gunakan format Conventional Commits** untuk setiap commit.
   - Contoh: `feat: implementasi server actions`, `fix: perbaiki error pada SSR`, `chore: update dependencies`
3. **Pastikan semua test dan linting lolos** sebelum membuat Pull Request (PR).
   - Jalankan: `yarn lint && yarn format:check && yarn test && yarn e2e`
4. **Buat PR ke branch `main`** dengan deskripsi perubahan yang jelas.
   - Gunakan template PR jika tersedia.
5. Tunggu review dari maintainer. Diskusi dan revisi sangat dianjurkan.

## Standar Kode

- Ikuti style guide yang sudah diatur oleh ESLint dan Prettier.
- Tambahkan unit test untuk setiap fitur/bugfix baru (Vitest, Playwright).
- Dokumentasikan kode jika perlu.
- Jangan commit credential/env ke repository.
- Usahakan gunakan fitur terbaru Next.js (App Router, Server Actions, dsb) jika relevan.

## Testing & Quality

- Jalankan unit & integration test: `yarn test` atau `yarn test:ui`
- Jalankan E2E test: `yarn e2e` atau `yarn e2e:ui`
- Jalankan lint: `yarn lint` dan format: `yarn format`

## Komunikasi

- Gunakan [GitHub Discussions](https://github.com/your-organization/nextjs15-skeleton/discussions) untuk bertanya atau berdiskusi.

Terima kasih atas kontribusinya!
