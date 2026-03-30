import { test, expect } from '@playwright/test';

 
test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  
  
  await page.getByRole('textbox', { name: 'First Name' }).fill('ibrahim');
 
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Basha');
 
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('ibasha@emmes.com');
  await page.getByRole('radio', { name: 'Male', exact: true}).check();
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('1234567890');
  await page.locator('div').filter({ hasText: /^Music$/ }).click();
  await page.getByRole('button', { name: 'Choose File' }).setInputFiles('test-data/Screenshot 2026-03-04 160109.png');
  await page.locator('#state svg').click();
  await page.getByRole('option', { name: 'Rajasthan' }).click();
  await page.locator('#city svg').click();
  await page.getByRole('option', { name: 'Jaipur' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  
  //ASSERTION

  await expect (page.getByText('Thanks for submitting the form')).toBeVisible();

   await expect(page.locator('tbody')).toContainText('ibrahim Basha');
  
});

 