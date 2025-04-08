// Wrap all tests within a describe block to improve structure.
// Add a beforeEach hook to avoid repeating page.goto() in every test.
// Add the web form link as an environment variable and use it in the beforeEach hook (https://testpages.herokuapp.com/styled/basic-html-form-test.html).
// Locate the Password field, fill it with a test value, and validate the input.
// Locate the TextArea field, fill it with a test value, and validate the input.
// After the checkbox test, add a similar test for Radio Items.
// Finally, submit the form by locating the input with type="submit" and triggering a click action.
import * as path from "path";
import { test, expect } from "@playwright/test";
const fillFields = async (page) => {
  const usernameInput = page.locator("xpath=//input[@name ='username']");
  await expect(usernameInput).toBeVisible();
  await usernameInput.fill("testUser");

  const passwordInput = page.locator("xpath=//input[@name ='password']");
  await expect(passwordInput).toBeVisible();
  await passwordInput.fill("secret");
};

test.describe("Playwright home page testing", () => {
  test.beforeEach("Navigate to the home page", async ({ page }) => {
    const url = process.env.WEB_FORM as string;
    await page.goto(url);
  });
  test("Reset Form", async ({ page }) => {
    const cancelBtn = page.locator("xpath=//input[@type='reset']");
    await expect(cancelBtn).toBeVisible();
    await fillFields(page);
    await cancelBtn.click();
  });
  test("Submit Form", async ({ page }) => {
    const submit = page.locator("xpath=//input[@type='submit']");
    await expect(submit).toBeVisible();
    await fillFields(page);
    await submit.click();
  });

  // test("Test accepting value for password field", async ({ page }) => {
  //   // Locate the Password field, fill it with a test value, and validate the input.
  //   const password = page.locator("xpath=//input[@type='password']");
  //   await expect(password).toBeVisible();
  //   await password.fill("password");
  //   await expect(password).toHaveText("password");
  //   //  const submit = page.locator("xpath=//input[@type='submit']");
  //   //  await submit.click();
  //   //  const passValue = page.locator("xpath=//li[@id='_valuepassword']");
  //   //  await expect(passValue).toHaveText("password");
  // });

  // test("Test accepting value for text area field", async ({ page }) => {
  //   // Locate the TextArea field, fill it with a test value, and validate the input.
  //   const textareaField = page.locator("xpath=//textarea[@name='comments']");
  //   await expect(textareaField).toBeVisible();
  //   await textareaField.clear();
  //   await textareaField.fill("Some text here");
  //   const submit = page.locator("xpath=//input[@type='submit']");
  //   await submit.click();
  //   const textAreaValue = page.locator("xpath=//li[@id='_valuecomments']");
  //   await expect(textAreaValue).toHaveValue("Some text here");
  // });

  // test("Upload file", async ({ page }) => {
  //   const uploadBtn = page.locator('xpath=//input[@type="file"]');
  //   const filePath = path.resolve(__dirname, "./tests.txt");
  //   await expect(uploadBtn).toBeVisible();
  //   await uploadBtn.setInputFiles(filePath);
  // });
});
