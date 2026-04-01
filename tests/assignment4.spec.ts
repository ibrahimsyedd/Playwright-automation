import { test } from '@playwright/test';
import { PracticeFormPage } from '../pages/practiceForm.page';
import testdata from '../test-data/testdata1.json' 

test('Fill and submit practice form using POM', async ({ page }) => {
 const form = new PracticeFormPage(page);
 const {firstName, lastName, email, mobilenumber,} = testdata
 // Step 1: Open page
 await form.navigate();
 // Step 2: Fill form
 //await form.fillForm(data);
 //await form.fillForm('syed', 'roy', 'syed@test.com','0987654321');
 await form.fillForm(firstName, lastName, email, mobilenumber);
 // Step 3: Submit form

 await form.submitForm();
 // Step 4: Validate submission
 await form.validateSubmission();
});