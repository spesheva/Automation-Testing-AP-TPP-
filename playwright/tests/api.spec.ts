import { test, expect } from "@playwright/test";
test.describe("Test exceptions page tests", () => {
  test.beforeEach("Navigate to the test page", async ({ page }) => {
    const url = process.env.API_URL as string;
    await page.goto(url);
  });
  test("API Test - GET Product", async ({ request }) => {
    const requestURL = `https://fakestoreapi.com/products`;
    const response = await request.get(requestURL);
    const responseBody = await response.json();
    await expect(response.ok()).toBeTruthy();
    await expect(response.status()).toBe(200);
    await expect(responseBody).toContainEqual(
      expect.objectContaining({
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      })
    );
  });
  test("API Test - GET Product properties ", async ({ request }) => {
    const requestURL = `https://fakestoreapi.com/products`;
    const response = await request.get(requestURL);
    const responseBody = await response.json();
    await expect(response.ok()).toBeTruthy();
    await expect(response.status()).toBe(200);
    await expect(responseBody).toContainEqual(
      await expect.objectContaining({
        price: 55.99,
        title: "Mens Cotton Jacket",
        description:
          "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      })
    );
  });
});
