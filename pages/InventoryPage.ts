import {type Page, type Locator} from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly title: Locator;
  readonly cartBadge: Locator;
  readonly cartLink: Locator;
 
  constructor(page: Page) {
    this.page = page;
    this.title = page.getByTestId('title');
    //the badge does not have a data-test attribute, so we need to use a locator with the class name
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartLink = page.getByTestId('shopping-cart-link');
  }

  async addToCart(productId: string) {
    await this.page.getByTestId(`add-to-cart-${productId}`).click();
  }

  async goToCart() {
    await this.cartLink.click();
  }

  async removeFromCart(productId: string) {
    await this.page.getByTestId(`remove-${productId}`).click();
  }
}