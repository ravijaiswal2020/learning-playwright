import { test, expect } from '@playwright/test';

test('login with valid cred and research explore', async ({ page }) => {

  await page.goto('https://dev.taxmann.com/gp/auth/login');

  await page.getByRole('button', { name: 'Login with Email' }).click();
  await page.getByRole('textbox', { name: 'Enter Email' }).fill('cog.testing2021+282@gmail.com');
  await page.getByRole('textbox', { name: 'Enter Password' }).fill('Ravi@123');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();

  // assertion (auto wait)  
  await expect(page).toHaveURL(/.*research.*/);
  
  await page.getByRole('link', { name: 'Income Taxicon Income Tax' }).click();
  await page.getByRole('link', { name: 'Case Laws' }).click();
  await page.getByText('Follow', { exact: true }).click();
  await expect(page.getByText('Following', { exact: true })).toBeVisible();  
  await page.getByTitle('favourite').click();
  await page.locator('#reviewslikes');
  await page.locator('#reviewsdislikes');
  await page.getByRole('img', { name: 'new window' }).click();
  await page.bringToFront(); // use for window tab shift ...
  await page.getByRole('link', { name: 'Income Taxicon Income Tax' }).click();
  await page.getByRole('link', { name: 'GST' }).click();
  await page.getByRole('link', { name: 'Acts', exact: true }).click();
  await page.getByRole('button', { name: 'Choose Laws' }).click();
  await page.locator('a').filter({ hasText: 'Union Territory GST' }). click();
  await page.getByTitle('Chapter Wise').click();
  await page.getByRole('link', { name: 'Reset' }).click();
  await page.pause();





  //await page.pause();
});