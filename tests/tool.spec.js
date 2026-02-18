import { test, expect } from '@playwright/test';

test('login with valid cred and research explore', async ({ page }) => {

  await page.goto('https://dev.taxmann.com/gp/auth/login');

  await page.getByRole('button', { name: 'Login with Email' }).click();
  await page.getByRole('textbox', { name: 'Enter Email' }).fill('cog.testing2021+282@gmail.com');
  await page.getByRole('textbox', { name: 'Enter Password' }).fill('Ravi@123');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();

  // 🔥 Wait for Research URL properly
  await page.waitForURL(/.*research.*/);

  // Verify Tools heading
  await expect(
    page.getByRole('heading', { name: 'Tools', exact: true })
  ).toBeVisible({ timeout: 20000 });

  // Click View All (better locator)
  const viewAll = page.locator('text=View all').nth(2);

  await viewAll.click();

  // Wait for tools page
  await page.waitForURL(/.*tools.*/, { timeout: 60000 });

  await expect(page).toHaveURL(/.*tools.*/);

  await page.getByRole('textbox', { name: 'Search tools by name' }).fill('Income Tax Calculator As per ITA, 2025');
    await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'Income Tax Calculator As per' }).click();
  //pagetimeout 
  await page.waitForTimeout(2000);
 await page.getByRole('link', { name: 'Calculate' }).click();
//ab hume validation message check kna hai jo ki click kren pr aaega 
  await expect(page.getByText('This field is required.')).toBeVisible(); 
  //now we have to open the option of dropdown 
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(4).click();
//now we  need to click on dropdown option
await page.getByRole('option', { name: 'Yes' }).click();
await page.getByRole('spinbutton').fill('9876543211');
await page.waitForTimeout(2000);
await page.getByRole('link', { name: 'Calculate' }).click();


//add await 
await page.waitForTimeout(2000);
//await page.pause

 
  



  //await page.getByRole('link', { name: 'Income Tax Calculator As per ITA, 2025 A comprehensive and authentic calculator' }).click();
  //await expect(page.getByRole('heading', { name: 'Income Tax Calculator As per', exact: true})).toBeVisible();
 // await expect(page.getByRole('heading', { name: 'As updated by Finance Bill,', exact: true})).toBeVisible();
  //await page.getByRole('tab', { name: 'Tax Calculator', exact: true }).click();




});
