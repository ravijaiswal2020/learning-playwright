import { test, expect } from '@playwright/test';

test('login with valid cred', async ({ page }) => {

  await page.goto('https://dev.taxmann.com/gp/auth/login');

  await page.getByRole('button', { name: 'Login with Email' }).click();
  await page.getByRole('textbox', { name: 'Enter Email' }).fill('cog.testing2021+284@gmail.com');
  await page.getByRole('textbox', { name: 'Enter Password' }).fill('Ravi@123');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();

  // assertion (auto wait)
  await expect(page).toHaveURL(/.*research.*/);
});


test('login with invalid email cred', async({page})=>
{
    await page.goto('https://dev.taxmann.com/gp/auth/login');
     await page.getByRole('button', { name: 'Login with Email' }).click();
    await page.getByRole('textbox', { name: 'Enter Email' }).fill('cog.testing2021+284er@gmail.com');
    await page.getByRole('textbox', { name: 'Enter Password' }).fill('Ravi@123');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();
    
    // ✅ assertion
  await expect(
    page.getByText('This account does not exist.')
  ).toBeVisible();
});


test('login with invalid password cred', async({page})=>
{
    await page.goto('https://dev.taxmann.com/gp/auth/login');
     await page.getByRole('button', { name: 'Login with Email' }).click();
    await page.getByRole('textbox', { name: 'Enter Email' }).fill('cog.testing2021+284@gmail.com');
    await page.getByRole('textbox', { name: 'Enter Password' }).fill('Ravi@12345');
    await page.getByRole('button', { name: 'Sign In', exact: true }).click();

    // ✅ assertion
  await expect(page.getByText('Wrong password. Try again') ).toBeVisible();
  await expect(page.getByText('Incorrect password.')).toBeVisible();
});