import { test } from '@playwright/test';
import { PracticeFormPage } from '../pages/practiceForm.spec';
test('Fill and submit practice form using POM', async ({ page }) => {
 const form = new PracticeFormPage(page);
 // Step 1: Open page
 await form.navigate();
 // Step 2: Fill form
 await form.fillForm('Syed', 'Ibrahim', 'syed@test.com');
 // Step 3: Submit form
 await form.submitForm();
 // Step 4: Validate submission
 await form.validateSubmission();
});