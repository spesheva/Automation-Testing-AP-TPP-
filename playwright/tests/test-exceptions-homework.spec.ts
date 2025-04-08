import { test, expect } from "@playwright/test";
test.describe("Test exceptions page tests", () => {
  test.beforeEach("Navigate to the test page", async ({ page }) => {
    const url = process.env.TEST_EXC as string;
    await page.goto(url);
  });

  test("Verify that second field is visible", async ({ page }) => {
    const addBtn = page.locator("xpath = //button[@id='add_btn']");
    await addBtn.click();
    await page.waitForTimeout(10000);
    const fieldTwo = page.locator("div#row2 input.input-field");
    //page.locator("xpath = //input[@class = 'input-field']")[1];
    const confirmAddedFieldTwo = page.locator(
      "xpath = //div[@id='confirmation']"
    );
    await expect(fieldTwo).toBeVisible();
    await expect(confirmAddedFieldTwo).toHaveText("Row 2 was added");
  });

  test("Test locate button save without the invisible one", async ({
    page,
  }) => {
    const addBtn = page.locator("xpath = //button[@id='add_btn']");
    const fieldTwo = page.locator("div#row2 input");
    const saveBtn = page.getByRole("button", { name: "Save" });
    const confirmSaveFieldTwo = page.locator("#confirmation");
    await addBtn.click();
    await page.waitForTimeout(10000);
    await expect(fieldTwo).toBeVisible();
    await fieldTwo.fill("burger");
    // const saveBtn = page.locator("xpath = //button[@id='save_btn']")[0];
    await expect(saveBtn).toBeVisible();
    await saveBtn.click();
    await expect(fieldTwo).toHaveValue("burger");
    await expect(confirmSaveFieldTwo).toHaveText("Row 2 was saved");
  });

  test("Test InvalidElementStateException", async ({ page }) => {
    const editBtn = page.locator("xpath = //button[@id='edit_btn']");
    await editBtn.click();
    const fieldOne = page.locator("div#row1 input");
    await fieldOne.clear();
    await fieldOne.fill("spaghetti");
    await expect(fieldOne).toHaveValue("spaghetti");
  });

  test("Test StaleElementReferenceException", async ({ page }) => {
    const instructionField = page.locator("xpath = //p[@id='instructions']");
    const addBtn = page.locator("xpath = //button[@id='add_btn']");
    await addBtn.click();
    await expect(instructionField).toBeHidden();
  });
  test("Test TimeoutException", async ({ page }) => {
    const addBtn = page.locator("xpath = //button[@id='add_btn']");
    await addBtn.click();
    await page.waitForTimeout(10000);
    const fieldTwo = page.locator("div#row2 input");
    await expect(fieldTwo).toBeVisible();
  });
});
