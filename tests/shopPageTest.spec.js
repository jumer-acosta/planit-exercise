import { test, expect } from '@playwright/test';
import { ShopPageElement } from '../pages/shopPageElement';

let shopPageElement;

test.beforeEach(async ({ page }) => {
    shopPageElement = new ShopPageElement(page);
});

test('Test Case 03: Shop Page - Validate the Product Price', async ({ page }) => {
    // Open the Jupiter Toys website
    await test.step('Open the Jupiter Toys website', async () => {
        await shopPageElement.goToWebPage('http://jupiter.cloud.planittesting.com');
    });

    // Click on the shop link
    await test.step('Click on the shop link', async () => {
        await shopPageElement.clickButtonLink('Shop');
    });

    // Buy 'Stuffed Frog' product
    await test.step('Buy the Stuffed Frog product', async () => {
        await shopPageElement.clickButtonProduct('#product-2'); // Stuffed Frog
    });

    // Buy 'Fluffy Bunny' product
    await test.step('Buy the Fluffy Bunny product', async () => {
        await shopPageElement.clickButtonProduct('#product-4'); // Fluffy Bunny
    });

    // Buy 'Valentine Bear' product
    await test.step('Buy the Fluffy Bunny product', async () => {
        await shopPageElement.clickButtonProduct('#product-7'); // Valentine Bear
    });

    // Click on the cart link
    await test.step('Click on the cart link', async () => {
        await shopPageElement.clickButtonCart('Cart (3)');
    });

    // Enter quantity for 'Stuffed Frog' product
    await test.step('Enter quantity for the Stuffed Frog product', async () => {
        await shopPageElement.enterQuantity('Stuffed Frog $10.99 1 $', '2');
    });

    // Enter quantity for 'Fluffy Bunny' product
    await test.step('Enter quantity for the Fluffy Bunny product', async () => {
        await shopPageElement.enterQuantity('Fluffy Bunny $9.99 1 $', '5');
    });

    // Enter quantity for 'Valentine Bear' product
    await test.step('Enter quantity for the Valentine Bear product', async () => {
        await shopPageElement.enterQuantity('Valentine Bear $14.99 1 $', '3');
    });

    // Validate the product price for the 'Stuffed Frog' product
    await test.step('Validate the product price for the Stuffed Frog product', async () => {
        await shopPageElement.expectProductPrice('$10.99');
    });

    // Validate the product price for the 'Fluffy Bunny' product
    await test.step('Validate the product price for the Fluffy Bunny product', async () => {
        await shopPageElement.expectProductPrice('$9.99');
    });

    // Validate the product price for the 'Valentine Bear' product
    await test.step('Validate the product price for the Valentine Bear product', async () => {
        await shopPageElement.expectProductPrice('$14.99');
    });

    // Validate the subtotal product price for 'Stuffed Frog' product
    await test.step('Validate the subtotal product price for the Stuffed Frog product', async () => {
        await shopPageElement.expectProductPrice('$21.98');
    });

    // Validate the subtotal product price for 'Fluffy Bunny' product
    await test.step('Validate the subtotal product price for the Fluffy Bunny product', async () => {
        await shopPageElement.expectProductPrice('$49.95');
    });

    // Validate the subtotal product price for 'Valentine Bear' product
    await test.step('Validate the subtotal product price for the Valentine Bear product', async () => {
        await shopPageElement.expectProductPrice('$44.97');
    });

    // Validate the total product price
    await test.step('Validate the total product price', async () => {
        await shopPageElement.expectTotalProductPrice('Total: 116.9');
    });
});