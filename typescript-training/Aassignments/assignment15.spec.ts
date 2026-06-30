import {test} from '@playwright/test';

test('demo-qaForm', async ({ page }) =>{
 // 1. Launch application
    await page.goto('https://demoqa.com/automation-practice-form');
 // 2. Wait for page load
    await page.waitForLoadState('networkidle');
 // 3. Enter First name and Last name
    await page.locator('#firstName').fill('Pradeep');
    await page.locator('#lastName').fill('Kumar'); 
 //4. Enter Email
    await page.locator('input[id="userEmail"]').fill('pradeep@test.com');

 // 5. Select Gender (Male)
    await page.locator('//label[text()="Male"]').click();

 // 6. Enter Mobile number
    await page.locator('#userNumber').fill('9876543210');  
 // 7. Select DOB (08-Aug-1998)
    await selectDOB(page, '8', '7', '1998');  
 // 8. Search and Select Computer Science and English
    await page.locator('#subjectsInput').fill('Computer Science');
    await page.locator('#subjectsInput').press('Enter');

    await page.locator('#subjectsInput').fill('English');
    await page.locator('#subjectsInput').press('Enter');

 // 9. Select Hobbies as Sports and Reading
    await page.locator("label[for='hobbies-checkbox-1']").click();
    await page.locator("label[for='hobbies-checkbox-2']").click();

 // 10. Upload photo
    await page.locator('#uploadPicture').setInputFiles('sample.jpg');

 // 11. Submit Details
    await page.locator('#submit').click();     

} );

// Function to select DOB
async function selectDOB(page: any, day: string, month: string, year: string) {

    // Open calendar
    await page.locator('#dateOfBirthInput').click();

    // Select year
    await page.locator('.react-datepicker__year-select').selectOption(year);

    // Select month
    await page.locator('.react-datepicker__month-select').selectOption(month);

    // Format day to 3 digits (Example: 8 → 008)
    const formattedDay = day.padStart(3, '0');

    // Select exact day
    await page.locator(`.react-datepicker__day--${formattedDay}:not(.react-datepicker__day--outside-month)`).click();
}