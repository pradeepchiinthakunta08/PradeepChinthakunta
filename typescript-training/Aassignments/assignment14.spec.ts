import { test, expect } from '@playwright/test';

test('Assignment 14 - Parabank Part 1', async ({ page }) => {

    // 1. Launch application
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    // 2. Verify application logo is displayed (CSS Selector)
    await expect(page.locator('img[title="ParaBank"]')).toBeVisible();

    // 3. Verify application caption displayed as "Experience the difference" (XPath)
    await expect(
        page.locator("//p[contains(text(),'Experience the difference')]")
    ).toHaveText('Experience the difference');

    // 4. Enter invalid username (CSS Selector)
    await page.locator("input[name='username']").fill('invalidUser');

    // 5. Enter empty password (CSS Selector)
    await page.locator("input[name='password']").fill('');

    // 6. Click on login button (XPath)
    await page.locator("//input[@value='Log In']").click();

    // 7. Verify error message (XPath)
    await expect(
        page.locator("//p[@class='error']")
    ).toHaveText('Please enter a username and password.');
    // 8.Click on admin page link
    await page.locator("//a[text()='Admin Page']").click();

    //9.select the option "soap" from dba mode radio button
     await page.locator("input[value='soap']").click();

    // 10.Scroll to element dropdown
     await page.locator("//input[@id='endpoint']").scrollIntoViewIfNeeded();
    
    // 11.Select the option web service from the dropdown
     await page.locator("//select[@id='loanProvider']").scrollIntoViewIfNeeded();
     await page.locator("//select[@id='loanProvider']").selectOption({ label: "Web Service" });
    
    // 12.click on submit button
     await page.locator("//input[@value='Submit']").click();
     
    // 13.verify submission is successful by validating success message
     await expect(page.locator("//b[contains(text(),'Settings saved successfully')]")).toBeVisible();

    // 14.Click on services page link
     await page.locator("ul.leftmenu a[href='services.htm']").click();

    // 15.wait for service page
     await page.waitForLoadState('networkidle');
    // 16.Scroll down till bookstore services table
      await page.locator("//span[text()='Bookstore']").scrollIntoViewIfNeeded();
    // 17.get total rows of books store services table
     const rows = page.locator("//span[text()='Bookstore']/ancestor::table//tr");
     const rowCount = await rows.count();
     console.log("Total rows:", rowCount);
    // 18.get total columns of books store services table
     const columns = page.locator("//span[text()='Bookstore']/ancestor::table//tr[1]/td");
     const columnCount = await columns.count();

     console.log("Total columns:", columnCount);
    // 19.Print table data (row wise and column wise data)
        for (let i = 1; i <= rowCount; i++) {
     const rowText = await page.locator(
        `//span[text()='Bookstore']/ancestor::table//tr[${i}]`
     ).textContent();

     console.log(`Row ${i}: ${rowText?.trim()}`);
     }

});