import { test, expect } from "@playwright/test";

const url = "/cgu";

test("has title", async ({ page }) => {
  await page.goto(url);

  await expect(page).toHaveTitle(
    /Conditions générales d'utilisation | template/
  );
});

test("has proper headers", async ({ page }) => {
  await page.goto(url);

  // Expect a title "to contain" a substring.
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Conditions générales d'utilisation"
  );

  const requiredHeaders = [
    "Présentation",
    "Vos données",
    "Absence de garantie",
  ];

  await Promise.all(
    requiredHeaders.map(async (text) =>
      expect(
        await page.getByRole("heading", { level: 2 }).getByText(text).count()
      ).toBe(1)
    )
  );
});
