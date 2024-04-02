import { test, expect } from "@playwright/test";

const url = "/";

test("has title", async ({ page }) => {
  await page.goto(url);

  await expect(page).toHaveTitle(/Template | beta.gouv.fr/);
});

test("has proper headers", async ({ page }) => {
  await page.goto(url);

  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Template"
  );
});
