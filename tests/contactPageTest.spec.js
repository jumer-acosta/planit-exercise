import { test, expect } from '@playwright/test';
import { ContactPageElement } from '../pages/contactPageElement';

test.describe.configure({
    mode: "serial",
});

let contactPageElement;

test.beforeEach(async ({ page }) => {
    contactPageElement = new ContactPageElement(page);
});

test('Test Case 01: Contact Page - Validate error message', async ({ page }) => {
    // Open the Jupiter Toys website
    await test.step('Open the Jupiter Toys website', async () => {
        await contactPageElement.goToWebPage('http://jupiter.cloud.planittesting.com');
    });

    // Click on the contact link
    await test.step('Click on the contact link', async () => {
        await contactPageElement.clickButtonLink('Contact');
    });

    // click on submit button
    await test.step('Click on the submit button', async () => {
        await contactPageElement.clickButtonLink('Submit');
    });

    // Validate the header error message
    await test.step('Validate the header error message', async () => {
        await contactPageElement.expectHeaderTextVisible('We welcome your feedback - but we won\'t get it unless you complete the form correctly.');
    });

    // Validate the Forename error message 
    await test.step('Validate the Forename error message', async () => {
        await contactPageElement.expectErrorTextVisible('Forename is required');
    });

    // Validate the Email error message
    await test.step('Validate the Email error message', async () => {
        await contactPageElement.expectErrorTextVisible('Email is required');
    });

    // Validate the Message error message
    await test.step('Validate the Message error message', async () => {
        await contactPageElement.expectErrorTextVisible('Message is required');
    });

    // Populate the mandatory Forename field
    await test.step('Populate the Forename field', async () => {
        await contactPageElement.fillInputField('Forename *', 'Jumer');
    });

    // Populate the mandatory Email field
    await test.step('Populate the Email field', async () => {
        await contactPageElement.fillInputField('Email *', 'jumeracosta@example.com');
    });

    // Populate the mandatory Message field
    await test.step('Populate the Message field', async () => {
        await contactPageElement.fillInputField('Message *', 'This is a test message');
    });

    // Validate the header error message is gone
    await test.step('Validate the header error message is gone', async () => {
        await contactPageElement.expectHeaderTextVisible('We welcome your feedback - tell it how it is.');
    });

    // Validate the Forename error message is gone
    await test.step('Validate the Forename error message is gone', async () => {
        await contactPageElement.expectErrorTextHidden('Forename is required');
    });

    // Validate the Email error message is gone
    await test.step('Validate the Email error message is gone', async () => {
        await contactPageElement.expectErrorTextHidden('Email is required');
    });

    // Validate the Message error message is gone
    await test.step('Validate the Message error message is gone', async () => {
        await contactPageElement.expectErrorTextHidden('Message is required');
    });

});

test('Test Case 02: Contact Page - Validate Successful submission message', async ({ page }) => {
    
    // Open the Jupiter Toys website
    await test.step('Open the Jupiter Toys website', async () => {
        await contactPageElement.goToWebPage('http://jupiter.cloud.planittesting.com');
    });

    // Click on the contact link
    await test.step('Click on the contact link', async () => {
        await contactPageElement.clickButtonLink('Contact');
    });

    // Populate the mandatory Forename field
    await test.step('Populate the Forename field', async () => {
        await contactPageElement.fillInputField('Forename *', 'Jumer');
    });

    // Populate the mandatory Email field
    await test.step('Populate the Email field', async () => {
        await contactPageElement.fillInputField('Email *', 'jumeracosta@example.com');
    });

    // Populate the mandatory Message field
    await test.step('Populate the Message field', async () => {
        await contactPageElement.fillInputField('Message *', 'This is a test message');
    });

     // click on submit button
     await test.step('Click on the submit button', async () => {
        await contactPageElement.clickButtonLink('Submit');
    });

    // Validate the success message
    await test.step('Validate the success message', async () => {
        await contactPageElement.expectSuccessTextVisible('Thanks Jumer, we appreciate your feedback.');
    });

});