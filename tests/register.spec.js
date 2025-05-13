const { test, expect } = require("@playwright/test");
const { RegisterPage } = require("../pages/RegisterPage");

test("Register account using placeholder selectors on cermati.com", async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto("https://www.cermati.com/gabung");
    await registerPage.fillRegistrationForm({
        phone: "089627183743",
        email: "test123123@gmail.com",
        firstName: "Testing",
        lastName: "Testing",
    });

    await expect(page).toHaveTitle(/Verifikasi/);
});
