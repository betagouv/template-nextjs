import { test, expect } from "@playwright/test";

const url = "/accessibilite";

test("has title", async ({ page }) => {
  await page.goto(url);

  await expect(page).toHaveTitle(/Déclaration d’accessibilité | template/);
});

test("has proper headers", async ({ page }) => {
  await page.goto(url);

  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Déclaration d’accessibilité"
  );

  const requiredHeaders = [
    "État de conformité",
    "Établissement de cette déclaration d’accessibilité",
    "Amélioration et contact",
  ];

  requiredHeaders.forEach(async (text) => {
    await expect(
      await page.getByRole("heading", { level: 2 }).getByText(text).count()
    ).toBe(1);
  });
});
