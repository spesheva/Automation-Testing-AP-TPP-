import { test, expect } from "@playwright/test";
test("Has logo exist", async ({ page }) => {
  const url = process.env.BASE_URL as string;
  await page.goto(url);
  const logo = page.getByAltText("Playwright logo").first();
  await expect(logo).toBeVisible();
});
test("Has heading exist", async ({ page }) => {
  const url = process.env.BASE_URL as string;
  await page.goto(url);
  const headingTitle = page.locator("h1");

  await expect(headingTitle).toBeVisible();
  console.log((await headingTitle.innerText()).valueOf());
});
test("Have nav link exist", async ({ page }) => {
  const url = process.env.BASE_URL as string;
  await page.goto(url);
  const docsLink = page.getByRole("link", { name: "Docs" });
  const apiLink = page.getByRole("link", { name: "API" });

  await expect(docsLink).toBeVisible();
  await expect(apiLink).toBeVisible();
});

test("Click community nav link and check the path", async ({ page }) => {
  const url = process.env.BASE_URL as string;
  await page.goto(url);
  const communityLink = page.getByRole("link", { name: "Community" });

  await communityLink.click();
  await expect(page).toHaveURL("https://playwright.dev/community/welcome");
  const headingtwo = page.getByRole("heading", { name: "Ambassadors" });
  await expect(headingtwo).toBeVisible();
});

test("Check if ul exist", async ({ page }) => {
  const url = process.env.BASE_URL as string;
  await page.goto(url);
  const ulfooterIcons = page.locator("ul.logosList_zAAF li");

  await expect(ulfooterIcons).toHaveCount(9);
});
