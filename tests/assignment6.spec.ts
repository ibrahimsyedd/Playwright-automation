import { test } from '@playwright/test';
import { PracticeFormPage } from '../pages/practiceForm.spec';

test('Submit form without mandatory fields and verify validation', async ({ page }) => {
 const form = new PracticeFormPage(page);
 // Step 1: Open page
 await form.navigate();
 // Step 2: Directly submit WITHOUT filling form
 await form.submitForm();
 // Step 3: Validate errors
 await form.validateErrors();
});