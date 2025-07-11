import { test, expect } from "@playwright/test";

test("home page shows headline and login/dashboard button", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("Selamat Datang di SaaS Skeleton")).toBeVisible();

  const loginButton = page.getByText("Login dengan Akun");
  const dashboardButton = page.getByText("Ke Dashboard");

  await expect(loginButton.or(dashboardButton)).toBeVisible();

  if (await loginButton.isVisible()) {
    await loginButton.click();
    await expect(page.getByRole("heading", { name: /sign in/i })).toBeVisible();
    const continueButton = page.locator(".cl-formButtonPrimary:enabled", {
      hasText: /continue|lanjut|next|sign in|login/i,
    });
    await expect(continueButton).toBeVisible({ timeout: 10000 });
  }
});
