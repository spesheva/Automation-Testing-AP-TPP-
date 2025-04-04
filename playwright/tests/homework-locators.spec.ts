// Wrap all tests within a describe block to improve structure.
// Add a beforeEach hook to avoid repeating page.goto() in every test.
// Add the web form link as an environment variable and use it in the beforeEach hook (https://testpages.herokuapp.com/styled/basic-html-form-test.html).
// Locate the Password field, fill it with a test value, and validate the input.
// Locate the TextArea field, fill it with a test value, and validate the input.
// After the checkbox test, add a similar test for Radio Items.
// Finally, submit the form by locating the input with type="submit" and triggering a click action.

import { test, expect } from "@playwright/test";
test.describe("Playwright home page testing", () => {
  test.beforeEach("Navigate to the home page", async ({ page }) => {
    const url = process.env.WEB_FORM as string;
    await page.goto(url);
  });

  test("Test accepting value for password field", async ({ page }) => {
    // Locate the Password field, fill it with a test value, and validate the input.
    const password = page.locator("xpath=//input[@type='password']");
    await expect(password).toBeVisible();
    await password.fill("password");
    await expect(password).toHaveValue("password");
  });

  test("Test accepting value for text area field", async ({ page }) => {
    // Locate the TextArea field, fill it with a test value, and validate the input.
    const textareaField = page.locator("xpath=//textarea[@name='comments']");
    await expect(textareaField).toBeVisible();
    await textareaField.clear();
    await textareaField.fill("Some text here");
    await expect(textareaField).toHaveValue("Some text here");
  });
  test("Test checkbox value", async ({ page }) => {
    // After the checkbox test, add a similar test for Radio Items.
    const checkboxOne = page.locator("xpath=//input[@value='cb1']");
    const checkboxTwo = page.locator("xpath=//input[@value='cb2']");
    const checkboxTree = page.locator("xpath=//input[@value='cb3']");
    await checkboxOne.uncheck();
    await checkboxTwo.uncheck();
    await checkboxTree.uncheck();
    await checkboxTwo.check();
    expect(await page.isChecked("xpath=//input[@value='cb1']")).toBeFalsy();
    expect(await page.isChecked("xpath=//input[@value='cb3']")).toBeFalsy();
    expect(await page.isChecked("xpath=//input[@value='cb2']")).toBeTruthy();
    //await expect(checkboxTwo).toBeChecked();
  });
  test("Test radio butons value", async ({ page }) => {
    // After the checkbox test, add a similar test for Radio Items.
    const radioBtnOne = page.locator("xpath=//input[@value='rd1']");
    const radioBtnTwo = page.locator("xpath=//input[@value='rd2']");
    const radioBtnTree = page.locator("xpath=//input[@value='rd3']");
    await expect(radioBtnTree).toBeVisible();
    await radioBtnTree.check();
    expect(await page.isChecked("xpath=//input[@value='rd1']")).toBeFalsy();
    expect(await page.isChecked("xpath=//input[@value='rd2']")).toBeFalsy();
    expect(await page.isChecked("xpath=//input[@value='rd3']")).toBeTruthy();
    //await expect(radioBtnTwo).toBeChecked();
  });
  test("Test submit button functionality", async ({ page }) => {
    // Finally, submit the form by locating the input with type="submit" and triggering a click action.
    const submit = page.locator("xpath=//input[@value = 'submit']");
    await expect(submit).toBeVisible();
    await submit.click();
    await expect(page).toHaveURL(
      "https://testpages.herokuapp.com/styled/the_form_processor.php"
    );
  });
});
