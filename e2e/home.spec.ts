import { test, expect } from "@playwright/test";

test("home page loads and shows headline", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Get started by editing")).toBeVisible();
  await expect(page.getByText("src/app/page.tsx")).toBeVisible();
});
