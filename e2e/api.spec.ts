import { test, expect, type Page } from "@playwright/test";

const USERNAME = process.env.CLERK_TEST_USERNAME || "dikahariss";
const PASSWORD = process.env.CLERK_TEST_PASSWORD || "SkeletonJuar4";

async function ensureLoggedOut(page: Page) {
  await page.goto("/");
  const logoutButton = await page.locator("button", { hasText: /logout/i });
  if (await logoutButton.isVisible().catch(() => false)) {
    await logoutButton.click();
    await expect(page.getByText(/login dengan akun/i)).toBeVisible();
  }
}

test("GET /api/health returns healthy status", async ({ request }) => {
  const response = await request.get("/api/health");
  expect(response.status()).toBe(200);
  const data = await response.json();
  expect(data.status).toBe("healthy");
  expect(data.version).toBeDefined();
  expect(data.services).toBeDefined();
  expect(data.services.auth).toBe("operational");
  expect(data.services.api).toBe("operational");
  expect(data.timestamp).toMatch(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/);
});

// E2E test untuk /api/user (belum login)

test("GET /api/user returns 401 when not authenticated", async ({ request }) => {
  const response = await request.get("/api/user");
  expect(response.status()).toBe(401);
  const data = await response.json();
  expect(data.error).toBe("Unauthorized");
});

// E2E test untuk /api/user (sudah login)

test("GET /api/user returns userId and message when authenticated", async ({ page }) => {
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

  // Wait for redirect to dashboard dengan timeout lebih lama
  await page.waitForURL("/dashboard", { timeout: 10000 });
  await expect(page.getByText("Selamat Datang di Dashboard")).toBeVisible();

  // Setelah login, fetch /api/user langsung dari browser context agar session terpakai
  const response = await page.evaluate(async () => {
    const res = await fetch("/api/user");
    const data = await res.json();
    return { status: res.status, ...data };
  });
  expect(response.status).toBe(200);
  expect(response.userId).toBeDefined();
  expect(response.message).toBe("User API endpoint working");
  expect(response.timestamp).toMatch(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/);
});
