import { Page, expect } from '@playwright/test';
export class LoginPage {
 readonly page: Page;
 constructor(page: Page) {
   this.page = page;
 }
 async navigate() {
   await this.page.goto('https://demowebshop.tricentis.com/login');
 }
 async login(email: string, password: string) {
   await this.page.fill('#Email', email);
   await this.page.fill('#Password', password);
   await this.page.click('input[value="Log in"]');
 }
 async verifyLogin() {
   await expect(this.page.locator('.account')).toBeVisible();
 }
}