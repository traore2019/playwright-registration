import { expect, Page } from '@playwright/test';

export class RegistrationPage {
  constructor(private readonly page: Page) {}

  readonly username = this.page.locator('#username');
  readonly password = this.page.locator('#password');
  readonly confirmPassword = this.page.locator('#confirmPassword');
  readonly registerButton = this.page.getByRole('button', { name: 'Register' });

  async open() {
    await this.page.goto('/register');
  }

  async register(username: string, password: string, confirmPassword = password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.confirmPassword.fill(confirmPassword);
    await this.registerButton.click();
  }

  async expectRegistrationPage() {
    await expect(this.page).toHaveTitle(/Register/i);
    await expect(this.username).toBeVisible();
    await expect(this.password).toBeVisible();
    await expect(this.confirmPassword).toBeVisible();
    await expect(this.registerButton).toBeVisible();
  }
}
