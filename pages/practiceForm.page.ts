import { Page, expect } from '@playwright/test';
export  class PracticeFormPage {
 readonly page: Page;
 constructor(page: Page) {
   this.page = page;
 }
 // URL
 async navigate() {
   await this.page.goto('https://demoqa.com/automation-practice-form');
 }
 // Locators + Actions
 async fillForm(firstName: string, lastName: string, email: string , mobilenumber : string) {
   await this.page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
   await this.page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);
   await this.page.getByRole('textbox', { name: 'name@example.com' }).fill(email);

   // Select Gender
   await this.page.locator('div').filter({ hasText: /^Male$/ }).click();
   // Mobile number (mandatory)
   await this.page.getByRole('textbox', { name: 'Mobile Number' }).fill(mobilenumber);
 }
 async submitForm() {
   await this.page.getByRole('button', { name: 'Submit' }).click();
 }
 async validateSubmission() {
   await expect(this.page.getByText('Thanks for submitting the form')).toHaveText('Thanks for submitting the form');
 }
 async validateErrors() {
 // First Name validation
 await expect(this.page.locator('#firstName')).toHaveCSS('border-color'," rgb(220, 53, 69)");
 // Last Name validation
 await expect(this.page.locator('#lastName')).toHaveCSS('border-color'," rgb(220, 53, 69)");
 // Mobile validation
 await expect(this.page.locator('#userNumber')).toHaveCSS('border-color'," rgb(220, 53, 69)");
 }
 

}