import { test, expect } from '@playwright/test';

test('login with valid cred', async ({ page }) => {

  await page.goto('https://dev.taxmann.com/gp/auth/login');

  await page.getByRole('button', { name: 'Login with Email' }).click();
  await page.getByRole('textbox', { name: 'Enter Email' }).fill('cog.testing2021+281@gmail.com');
  await page.getByRole('textbox', { name: 'Enter Password' }).fill('Ravi@123');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();

  // assertion (auto wait)
  await expect(page).toHaveURL(/.*research.*/);
  
 

  // hover on Research dropdown
  await page.getByRole('link', { name: 'Research ' }).hover();

  // click on Bookstore
  await page.locator('#header').getByRole('link', { name: 'Bookstore' }).click();

  // assert URL
  await expect(page).toHaveURL(/bookstore/);
  await page.waitForTimeout(1000);
  //await page.pause();

  //scroll page 
  // thoda niche scroll
  await page.keyboard.press('PageDown');
await page.waitForTimeout(500);
await page.keyboard.press('PageDown');

    // pehli visible book click
const firstBook = page.getByRole('link', { name: 'GST Ready Reckoner' }).nth(3)
await firstBook.click();
await page.waitForTimeout(2000);
const book = page.locator('.product-card').nth(3); // 4th book
//await book.scrollIntoViewIfNeeded();
//await book.click();

await page.keyboard.press('PageDown');
await page.waitForTimeout(500);
await page.keyboard.press('PageDown');
await page.waitForTimeout(2000);
getByText('Add to Cart').first()
await page.waitForTimeout(2000);

await page.pause();


 


});



