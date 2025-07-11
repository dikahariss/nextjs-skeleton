import { test, expect } from "@playwright/test";

const USERNAME = process.env.CLERK_TEST_USERNAME || "dikahariss";
const PASSWORD = process.env.CLERK_TEST_PASSWORD || "SkeletonJuar4";

async function ensureLoggedOut(page) {
  await page.goto("/");
  const logoutButton = await page.locator("button", { hasText: /logout/i });
  if (await logoutButton.isVisible().catch(() => false)) {
    await logoutButton.click();
    await expect(page.getByText(/login dengan akun/i)).toBeVisible();
  }
}

test("akses dashboard tanpa login harus muncul prompt login", async ({ page }) => {
  await ensureLoggedOut(page);
  await page.goto("/dashboard");
  await expect(page.getByText("Selamat Datang di Dashboard")).toBeVisible();
  try {
    await expect(page.getByText(/login dengan akun/i)).toBeVisible();
  } catch (e) {
    await page.screenshot({ path: "debug-dashboard-login.png", fullPage: true });
    const html = await page.content();
    console.log("DEBUG HTML:", html);
    throw e;
  }
});

test("login otomatis dengan username dan password, akses dashboard, dan logout", async ({
  page,
}) => {
  await ensureLoggedOut(page);
  await page.goto("/");
  await expect(page.getByText("Selamat Datang di SaaS Skeleton")).toBeVisible();
  let loginButton;
  try {
    loginButton = page.getByText(/login dengan akun/i);
    await expect(loginButton).toBeVisible();
  } catch (e) {
    await page.screenshot({ path: "debug-home-login.png", fullPage: true });
    const html = await page.content();
    console.log("DEBUG HTML:", html);
    throw e;
  }
  await loginButton.click();
  await expect(page.getByRole("heading", { name: /sign in/i })).toBeVisible();

  await page.getByLabel(/email|username/i).fill(USERNAME);
  const continueButton1 = page.locator(".cl-formButtonPrimary:enabled", {
    hasText: /continue|lanjut|next/i,
  });
  await expect(continueButton1).toBeVisible();
  await continueButton1.click();

  const passwordInput = await page.locator('input[type="password"]');
  await expect(passwordInput).toBeVisible();
  await passwordInput.fill(PASSWORD);
  const continueButton2 = page.locator(".cl-formButtonPrimary:enabled", {
    hasText: /continue|lanjut|next/i,
  });
  await expect(continueButton2).toBeVisible();
  await continueButton2.click();

  await expect(page.getByText("Selamat Datang di Dashboard")).toBeVisible();
  await expect(page.getByRole("button", { name: /logout/i })).toBeVisible();

  const logoutButton = page.getByRole("button", { name: /logout/i });
  await logoutButton.click();

  await expect(page.getByText("Selamat Datang di SaaS Skeleton")).toBeVisible();
});
