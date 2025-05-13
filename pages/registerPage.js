// https://www.cermati.com/gabung

class RegisterPage {
    constructor(page) {
        this.page = page;
        this.mobilePhone = page.locator("#mobilePhone");
        this.email = page.locator("#email");
        this.firstName = page.locator("#firstName");
        this.lastName = page.locator("#lastName");
        this.registerButton = page.locator("[data-button-name='register-new']");
    }

    async goto() {
        await this.page.goto("https://www.cermati.com/gabung");
    }

    async fillRegistrationForm({ phone, email, firstName, lastName }) {
        await this.mobilePhone.fill(phone);
        await this.email.fill(email);
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.registerButton.click();
    }

    async isOtpFieldVisible() {
        return this.page.getByPlaceholder("Verifikasi No. Handphone").isVisible();
    }
}

module.exports = { RegisterPage };
