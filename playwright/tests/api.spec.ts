import { test, expect } from "@playwright/test";
import { REQUEST_URL, PRODUCT_ID } from "../test-data/constants";
import REQUEST_BODY from "../test-data/request_body.json";

test.describe("Matchers example", async () => {
  test("toContainEqual exasmple", async () => {
    const users = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    expect(users).toContainEqual({ id: 1, name: "Alice" });
  });

  await test.step("toEqual example", async () => {
    await expect({ name: "Alice", age: 30 }).toEqual({
      name: "Alice",
      age: 30,
    });
  });
  await test.step("toMatchObject Example", async () => {
    const user = {
      id: 1,
      name: "Alice",
      age: 30,
    };
    expect(user).toMatchObject({ name: "Alice" });
  });
  await test.step("toHaveProperty example", async () => {
    const user = {
      profile: {
        name: "Alice",
      },
    };
    expect(user).toHaveProperty("profile.name");
    expect(user).toHaveProperty("profile.name", "Alice");
  });
});

test.describe("Test exceptions page tests", () => {
  test.beforeEach("Navigate to the test page", async ({ page }) => {
    await page.goto(REQUEST_URL);
  });
  test("API Test - GET Product", async ({ request }) => {
    const response = await request.get(REQUEST_URL);
    const responseBody = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(responseBody).toContainEqual(
      expect.objectContaining({
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      })
    );
  });
  test("API Test - GET Product properties ", async ({ request }) => {
    const response = await request.get(REQUEST_URL);
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
test.describe("CRUD Operations", () => {
  test("API Test - GET Product2", async ({ request }) => {
    const requestURL = `${REQUEST_URL}/${PRODUCT_ID}`;
    const response = await request.get(requestURL);
    const responseBody = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(responseBody).toEqual(
      expect.objectContaining({
        title: "Solid Gold Petite Micro",
      })
    );
    expect(responseBody).toMatchObject({ price: 168, category: "jewelery" });
    expect(responseBody).toHaveProperty("image");
    expect(responseBody).toHaveProperty("rating.rate");
  });
  test("API Test 3 - CREATE Product", async ({ request }) => {
    const response = await request.post(REQUEST_URL, {
      // data: REQUEST_BODY,
      data: {
        id: 0,
        title: "string",
        price: 0.1,
        description: "string",
        category: "string",
        image: "http://example.com",
      },
    });
    const responseBody = await response.json();
    console.log(responseBody);
    expect(response.ok()).toBeTruthy();
    console.log(response.status());
    expect(response.status()).toBe(200);
    expect(responseBody).toEqual({
      id: 0,
      title: "string",
      price: 0.1,
      description: "string",
      category: "string",
      image: "http://example.com",
    });
    expect(responseBody).toHaveProperty("price", 0.01);
  });
  test("API Test 4 - UPDATE PTODUCT", async ({ request }) => {
    const response = await request.put(`${REQUEST_URL}/${PRODUCT_ID}`, {
      data: {
        id: 8,
        title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
        price: 10.99,
        description:
          "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        category: "jewelery",
        image:
          "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        rating: {
          rate: 1.9,
          count: 100,
        },
      },
    });
    const responseBody = await response.json();
    console.log(responseBody);
  });

  test("API Test 5 - DELETE PTODUCT", async ({ request }) => {
    const response = await request.delete(`${REQUEST_URL}/${PRODUCT_ID}`);
    const responseBody = await response.json();
    console.log(responseBody);
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });
});
