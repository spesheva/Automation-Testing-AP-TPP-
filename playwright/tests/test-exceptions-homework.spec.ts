import { test, expect, Page } from "@playwright/test";
test.describe("Test exceptions page tests", () => {
  test.beforeEach("Navigate to the test page", async ({ page }) => {
    const url = process.env.TEST_EXC as string;
    await page.goto(url);
  });

  const clickAddBtn = async (page: Page) => {
    const addBtn = page.locator("xpath = //button[@id='add_btn']");
    await addBtn.click();
  };
  const fieldTwoVisibility = async (page: Page) => {
    const fieldTwo = page.locator("div#row2 input.input-field");
    const confirmAddedFieldTwo = page.locator(
      "xpath = //div[@id='confirmation']"
    );
    await page.waitForTimeout(10000);
    await expect(fieldTwo).toBeVisible();
    await expect(confirmAddedFieldTwo).toHaveText("Row 2 was added");
  };
  const fillFieldTwo = async (page: Page, text: string) => {
    await fieldTwoVisibility(page);
    const fieldTwo = page.locator("div#row2 input.input-field");
    const confirmAddedFieldTwo = page.locator(
      "xpath = //div[@id='confirmation']"
    );
    await fieldTwo.fill(text);
    await expect(fieldTwo).toHaveValue(text);
  };
  const clickSaveBtn = async (page: Page) => {
    const saveBtn = page.getByRole("button", { name: "Save" });
    const confirmSaveFieldTwo = page.locator("#confirmation");
    await expect(saveBtn).toBeVisible();
    await saveBtn.click();
    await expect(confirmSaveFieldTwo).toHaveText("Row 2 was saved");
  };
  const fillFieldOne = async (page: Page, text: string) => {
    await clickEditBtn(page);
    const fieldOne = page.locator("div#row1 input.input-field");
    await expect(fieldOne).toBeEditable();
    await fieldOne.clear();
    await fieldOne.fill(text);
    await expect(fieldOne).toHaveValue(text);
  };
  const clickEditBtn = async (page: Page) => {
    const editBtn = page.locator('xpath =//button[@id="edit_btn"]');
    await expect(editBtn).toBeVisible();
    await editBtn.click();
  };

  test("Verify that second field is visible", async ({ page }) => {
    await test.step("Click to add button", async () => {
      await clickAddBtn(page);
    });
    await test.step("Locate field two", async () => {
      await fieldTwoVisibility(page);
    });
  });

  test("Test for succesfuly clicking to a button 'Save' without locating the invisible one", async ({
    page,
  }) => {
    await test.step("Click to add button", async () => {
      await clickAddBtn(page);
    });
    await test.step("Locate field two", async () => {
      await fieldTwoVisibility(page);
    });
    await test.step("Fill field two", async () => {
      await fillFieldTwo(page, "burger");
    });
    await test.step("Click save button", async () => {
      await clickSaveBtn(page);
    });
  });

  test("Test that field one is succesfuly filled", async ({ page }) => {
    await test.step("Fill field", async () => {
      await fillFieldOne(page, "spagetti");
    });
  });

  test("Verify that instruction text element is no longer displayed", async ({
    page,
  }) => {
    await test.step("Click add button", async () => {
      await clickAddBtn(page);
    });
    const instructionField = page.locator("xpath = //p[@id='instructions']");
    await expect(instructionField).toBeHidden();
  });
});
