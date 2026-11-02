import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {InventoryPage} from '../pages/InventoryPage';

test.describe('Cart', () => {
  test.beforeEach(async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('should add an item to the cart', async ({page}) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addToCart('sauce-labs-bike-light');   
    await expect(inventoryPage.cartBadge).toHaveText('1');
  });  
  
  test('should add two items to the cart', async ({page}) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addToCart('sauce-labs-backpack');
    await inventoryPage.addToCart('sauce-labs-bike-light');   
    await expect(inventoryPage.cartBadge).toHaveText('2');
  });   

  test('should remove an item from the cart', async ({page}) => { 
    const inventoryPage = new InventoryPage(page); 
    await inventoryPage.addToCart('sauce-labs-backpack');
    await inventoryPage.addToCart('sauce-labs-bike-light');  
    await expect(inventoryPage.cartBadge).toHaveText('2');
    await inventoryPage.removeFromCart('sauce-labs-backpack');
    await expect(inventoryPage.cartBadge).toHaveText('1');
  });

  test ('should hide the cart badge when all items are removed from the cart', async ({page}) => {
    const inventoryPage = new InventoryPage(page); 
    await inventoryPage.addToCart('sauce-labs-backpack');
    await expect(inventoryPage.cartBadge).toHaveText('1');
    await inventoryPage.removeFromCart('sauce-labs-backpack');
    await expect(inventoryPage.cartBadge).toBeHidden();
  });
});