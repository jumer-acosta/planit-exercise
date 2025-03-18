import { expect } from "playwright/test";   // Import the expect function from the Playwright test library

export class ContactPageElement {
    constructor(page) {
        this.page = page;

        // Page Elements
        //this.buttonLink = 

    };

    // Actions Page functions
    async goToWebPage(url) {
        await this.page.goto(url);
    }

    async clickButtonLink(btnName) {
        await this.page.getByRole('link', { name: btnName }).click();
    };

    async fillInputField(inputField, inputValue) {
        this.inputField = this.page.getByRole('textbox', { name: inputField });
        await this.inputField.click();
        await this.inputField.fill(inputValue);

    }

    // Assertions
    //----visible element
    async expectHeaderTextVisible(headerText) {
        await expect(this.page.locator('#header-message')).toContainText(headerText);
    };

    async expectErrorTextVisible(errorMessage) {
        await expect(this.page.getByText(errorMessage)).toBeVisible();
    }

    async expectSuccessTextVisible(successMessage) {
        await expect(this.page.locator('body')).toContainText(successMessage);
    }

    //----hidden element
    async expectErrorTextHidden(errorMessage) {
        await expect(this.page.getByText(errorMessage)).toBeHidden();
    }
};