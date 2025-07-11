import { test, expect } from "@playwright/test";

test("home page shows headline and login/dashboard button", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: /Selamat Datang di SaaS Skeleton/i }),
  ).toBeVisible();
  const loginButton = page.getByRole("button", { name: /login/i });
  const dashboardLink = page.getByRole("link", { name: /ke dashboard/i });
  await expect(loginButton.or(dashboardLink)).toBeVisible();

  if (await loginButton.isVisible()) {
    await loginButton.click();
    await expect(page.getByRole("heading", { name: /sign in/i })).toBeVisible();
    const continueButton = page.locator(".cl-formButtonPrimary:enabled", {
      hasText: /continue|lanjut|next|sign in|login/i,
    });
    await expect(continueButton).toBeVisible({ timeout: 10000 });
  }
});
