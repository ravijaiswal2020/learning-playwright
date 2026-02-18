import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dev.taxmann.com/gp/auth/login');
  await page.getByRole('button', { name: 'Login with Email' }).click();
  await page.getByRole('textbox', { name: 'Enter Email' }).click();
  await page.getByRole('textbox', { name: 'Enter Email' }).fill('cog.testing2021+283@gmail.com');
  await page.getByRole('textbox', { name: 'Enter Password' }).click();
  await page.getByRole('textbox', { name: 'Enter Password' }).fill('Ravi@123');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await page.locator('a').filter({ hasText: 'Penalty u/s 271D not leviable' }).click();
  await page.getByText('Follow', { exact: true }).click();
  await page.getByTitle('favourite').click();
  await page.getByText('PDF').click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByText('RTF').click();
  const download = await downloadPromise;
});