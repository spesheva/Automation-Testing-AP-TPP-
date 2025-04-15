import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
let loginPage;

test.describe("Login Page", () => {
  test.beforeEach("Go to", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
  });
  test("Login Successfully", async () => {
    await loginPage.login("standard_user", "secret_souce");
    await expect(loginPage.page).toHaveURL(
      "https://www.saucedemo.com/inventory.html"
    );
  });

  test("Login Error Locked User", async () => {
    await loginPage.login("username", "password");
    await loginPage.loginErrorVisible();
    await expect(loginPage.errorMessage).toContainText(
      "Sorry, this user has been locked out."
    );
  });

  test("Login Error", async () => {
    await loginPage.login("ivalid_username", "invalid_password");
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText(
      "Username and password do not match"
    );
  });
});
