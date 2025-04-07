import { test, expect, Page } from "@playwright/test";
import path from "path";
const results = {
  username: "testUser",
  password: "secret",
  comments: "Test comment",
  dropdownValue: "dd2",
};

const fillFields = async (page: Page) => {
  //locate and fill username field
  const usernameInput = page.locator("xpath=//input[@name='username']");
  await expect(usernameInput).toBeVisible();
  await usernameInput.fill("testUser");
  await expect(usernameInput).toHaveValue("testUser");

  //Locate and fill password field
  const password = page.locator("xpath=//input[@type='password']");
  await expect(password).toBeVisible();
  await password.fill("password");
  await expect(password).toHaveValue("password");

  //Locate and fill comment field
  const textareaField = page.locator("xpath=//textarea[@name='comments']");
  await expect(textareaField).toBeVisible();
  await textareaField.clear();
  await textareaField.fill("Some text here");
  await expect(textareaField).toHaveValue("Some text here");

  //locate and check the checkbox
  const checkboxOne = page.locator("xpath=//input[@value='cb1']");
  const checkboxTwo = page.locator("xpath=//input[@value='cb2']");
  const checkboxTree = page.locator("xpath=//input[@value='cb3']");
  if (await checkboxOne.isChecked()) {
    await checkboxOne.uncheck();
  }
  if (await checkboxTree.isChecked()) {
    await checkboxTree.uncheck();
  }
  await checkboxTwo.check();
  expect(await page.isChecked("xpath=//input[@value='cb1']")).toBeFalsy();
  expect(await page.isChecked("xpath=//input[@value='cb3']")).toBeFalsy();
  expect(await page.isChecked("xpath=//input[@value='cb2']")).toBeTruthy();

  //locate and check the radio button
  const radioBtnOne = page.locator("xpath=//input[@value='rd1']");
  const radioBtnTwo = page.locator("xpath=//input[@value='rd2']");
  const radioBtnTree = page.locator("xpath=//input[@value='rd3']");
  await expect(radioBtnTree).toBeVisible();
  await radioBtnTree.check();
  expect(await page.isChecked("xpath=//input[@value='rd1']")).toBeFalsy();
  expect(await page.isChecked("xpath=//input[@value='rd2']")).toBeFalsy();
  expect(await page.isChecked("xpath=//input[@value='rd3']")).toBeTruthy();

  //locate and select an option from dropdown
  const dropdown = page.locator('xpath=//select[@name="dropdown"]');
  await expect(dropdown).toBeVisible();
  await dropdown.selectOption("dd2");
  await expect(dropdown).toHaveValue("dd2");

  //locate upload button and upload a file
  const uploadBtn = page.locator("xpath = //input[@type = 'file']");
  const filePath = path.resolve(__dirname, "./tests.txt");
  await expect(uploadBtn).toBeVisible();
  await uploadBtn.setInputFiles(filePath);
};
test.describe("Playwright home page testing", () => {
  test.beforeEach("Navigate to the home page", async ({ page }) => {
    const url = process.env.WEB_FORM as string;
    await page.goto(url);
  });
  test("Submit form", async ({ page }) => {
    const submitBtn = page.locator("xpath = //input[@type='submit']");
    await expect(submitBtn).toBeVisible();
    await fillFields(page);
    await submitBtn.click();
    await expect(page).toHaveURL(
      "https://testpages.herokuapp.com/styled/the_form_processor.php"
    );
    const usernameVal = page.locator("xpath = //li[@id='_valueusername']");
    await expect(usernameVal).toHaveText(results.username);
    const dropDownVal = page.locator("xpath = //li[@id = '_valuedropdown']");
    await expect(dropDownVal).toHaveText(results.dropdownValue);
  });
});

// test("Has h1 title", async ({ page }) => {
//   await page.goto(
//     "https://testpages.herokuapp.com/styled/basic-html-form-test.html"
//   );

//   const title = page.locator("xpath=//h1");
//   await expect(title).toHaveText("Basic HTML Form Example");
// });

// test("Test username field", async ({ page }) => {
//   await page.goto(
//     "https://testpages.herokuapp.com/styled/basic-html-form-test.html"
//   );

//   const usernameInput = page.locator("xpath=//input[@name='username']");
//   await expect(usernameInput).toBeVisible();
//   await usernameInput.fill("testUser");
//   await expect(usernameInput).toHaveValue("testUser");
// });

// test("Test Checkbox selection", async ({ page }) => {
//   await page.goto(
//     "https://testpages.herokuapp.com/styled/basic-html-form-test.html"
//   );

//   const checkboxEl = page.locator('xpath=//input[@value="cb2"]');
//   await expect(checkboxEl).toBeVisible();
//   await checkboxEl.check();
//   await expect(checkboxEl).toBeChecked();
// });

// test("Select dropdown option", async ({ page }) => {
//   await page.goto(
//     "https://testpages.herokuapp.com/styled/basic-html-form-test.html"
//   );

//   const dropdown = page.locator('xpath=//select[@name="dropdown"]');
//   await expect(dropdown).toBeVisible();
//   await dropdown.selectOption("dd2");
//   await expect(dropdown).toHaveValue("dd2");
