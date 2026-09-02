import { test, expect } from '@playwright/test';
import { RegistrationPage } from '../pages/RegistrationPage';
import { registrationCases } from '../test-data/registrationData';

for (const data of registrationCases) {
  test(`${data.id} - registration with ${data.description}`, async ({ page }) => {
    const registrationPage = new RegistrationPage(page);

    await test.step('Open registration page', async () => {
      await registrationPage.open();
      await registrationPage.expectRegistrationPage();
    });

    await test.step('Submit registration form', async () => {
      await registrationPage.register(data.username, data.password, data.confirmPassword);
    });

    await test.step('Verify expected result', async () => {
      if (data.expected === 'success') {
        await expect(page).toHaveURL(/.*login.*/i);
      } else {
        await expect(page.getByText(/password.*match|passwords.*match/i)).toBeVisible();
      }
    });
  });
}

test('TC-REG-003 - username is required', async ({ page }) => {
  const registrationPage = new RegistrationPage(page);
  await registrationPage.open();
  await registrationPage.password.fill('Password123!');
  await registrationPage.confirmPassword.fill('Password123!');
  await registrationPage.registerButton.click();
  await expect(registrationPage.username).toHaveAttribute('required', '');
});
