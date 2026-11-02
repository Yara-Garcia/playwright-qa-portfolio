import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';

test.describe('Login', () => {
    test('should login successfully with valid credentials', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(page).toHaveURL('/inventory.html');
    });

    test('should show error message with invalid credentials', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('invalid_user', 'invalid_password');
        await expect(loginPage.errorMessage).toContainText('Epic sadface: Username and password do not match any user in this service');
    } );

    test('should show error message when username is blocked', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('locked_out_user', 'secret_sauce');
        await expect(loginPage.errorMessage).toContainText('Epic sadface: Sorry, this user has been locked out.');
    });
});