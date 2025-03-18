import { expect } from "playwright/test";   // Import the expect function from the Playwright test library

export class ShopPageElement {
    constructor(page) {
        this.page = page;
    };

    // Actions page functions
    async goToWebPage(url) {
        await this.page.goto(url);
    }

    async clickButtonLink(btnName) {
        await this.page.getByRole('link', { name: btnName, exact: true }).click();
    };

    async clickButtonProduct(productName) {
        await this.page.locator(productName).getByRole('link', { name: 'Buy' }).click();
    };

    async clickButtonCart(cartLink) {
        await this.page.getByRole('link', { name: cartLink }).click();
    };

    async enterQuantity(productName, quantity) {
        this.product_quantity = this.page.getByRole('row', { name: productName }).getByRole('spinbutton');
        await this.product_quantity.click();
        await this.product_quantity.fill(quantity);
    };

    // Assertions
    //----verify product price
    async expectProductPrice(productPrice) {
        await expect(this.page.locator('tbody')).toContainText(productPrice);
    };

    async expectTotalProductPrice(totalProductPrice) {
        await expect(this.page.getByRole('strong')).toContainText(totalProductPrice);
    }
};