import { test } from '@playwright/test';
import { PracticeFormPage } from '../pages/practiceForm.page';
import testdata from '../test-data/testdata.json';
// Test Data

testdata.forEach((data) => {
 test(`Submit form with ${data.firstName}`, async ({ page }) => {
   const form = new PracticeFormPage(page);
   // Step 1: Open page
   await form.navigate();
   // Step 2: Fill form with dynamic data
   await form.fillForm(data.firstName, data.lastName, data.email, data.mobilenumber);
   // Step 3: Submit form
   await form.submitForm();
   // Step 4: Validate
   await form.validateSubmission();
 });
});