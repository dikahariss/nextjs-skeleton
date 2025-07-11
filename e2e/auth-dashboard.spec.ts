import { test, expect } from "@playwright/test";

const USERNAME = process.env.CLERK_TEST_USERNAME || "dikahariss";
const PASSWORD = process.env.CLERK_TEST_PASSWORD || "SkeletonJuar4";

test("akses dashboard tanpa login harus muncul prompt login", async ({ page }) => {
  await page.goto("/dashboard");
  await expect(
    page.getByRole("heading", { name: /akses dashboard memerlukan login/i }),
  ).toBeVisible();
  await expect(page.getByRole("button", { name: /login/i })).toBeVisible();
});

test("login otomatis dengan username dan password, akses dashboard, dan logout", async ({
  page,
}) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: /Selamat Datang di SaaS Skeleton/i }),
  ).toBeVisible();
  const loginButton = page.getByRole("button", { name: /login/i });
  await expect(loginButton).toBeVisible();
  await loginButton.click();
  await expect(page.getByRole("heading", { name: /sign in/i })).toBeVisible();

  await page.getByLabel(/email|username/i).fill(USERNAME);
  const continueButton1 = page.locator(".cl-formButtonPrimary:enabled", {
    hasText: /continue|lanjut|next/i,
  });
  await expect(continueButton1).toBeVisible();
  await continueButton1.click();

  const passwordInput = page.locator('input[type="password"]:not([disabled])');
  await expect(passwordInput).toBeVisible({ timeout: 10000 });
  await expect(passwordInput).toBeEnabled({ timeout: 10000 });
  await passwordInput.fill(PASSWORD);
  const continueButton2 = page.locator(".cl-formButtonPrimary:enabled", {
    hasText: /continue|lanjut|next|sign in|login/i,
  });
  await expect(continueButton2).toBeVisible({ timeout: 10000 });
  await continueButton2.click();

  await page.waitForURL("**/dashboard", { timeout: 15000 });
  await expect(page.getByRole("heading", { name: /selamat datang di dashboard/i })).toBeVisible();
  await page.getByRole("button", { name: /logout/i }).click();
  await expect(page.getByRole("button", { name: /login/i })).toBeVisible();
});
