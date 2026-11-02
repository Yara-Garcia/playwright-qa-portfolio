import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {InventoryPage} from '../pages/InventoryPage';
import {CartPage} from '../pages/CartPage';

test.describe('Checkout', () => {
  test.beforeEach(async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('should display the correct item in the cart', async ({page}) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addToCart('sauce-labs-bike-light');
    await inventoryPage.goToCart();
    await expect(page).toHaveURL('/cart.html');

    const cartPage = new CartPage(page);
    await expect (cartPage.checkoutButton).toBeVisible();
    await expect(cartPage.itemNames).toHaveText('Sauce Labs Bike Light');
  });
        
});