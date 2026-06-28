"use strict";
// Create common function and then based on below details, 
// print whether user is eligible to get the loan
// or not
// customerName = "John Doe";
// creditScore = 720;
// income = 55000.0;
// isEmployed = true;
// debtToIncomeRatio = 35.0;
Object.defineProperty(exports, "__esModule", { value: true });
let customerName = "John Doe";
let creditScore = 720;
let income = 55000.0;
let isEmployed = true;
let debtToIncomeRation = 35.0;
// 1. Credit Score:
// o If the credit score is above 750, the loan is automatically approved.
// o If the credit score is between 650 and 750, additional checks are performed.
// o If the credit score is below 650, the loan is denied.
if (creditScore > 750) {
    console.log(`${customerName} is eligible for the loan because credit
             score is above 750.`);
}
// 2. Income:
// o For credit scores between 650 and 750, the customer’s income must be at least $50,000
// for the loan to be considered.
else if (creditScore >= 650 && creditScore <= 750) {
    //         3. Employment Status:
    // o If the customer’s income is at least 50,000, the system checks whether the customer is
    // employed.
    // o If the customer is unemployed, the loan is denied.
    if (income >= 50000) {
        if (isEmployed) {
            if (debtToIncomeRation < 40) {
                console.log(`${customerName} is eligible for the loan.`);
            }
            //                 4. Debt-to-Income Ratio:
            // o If the customer is employed, the system checks the debt-to-income (DTI) ratio.
            // o If the DTI ratio is less than 40%, the loan is approved.
            // o If the DTI ratio is 40% or greater, the loan is denied.
            else {
                console.log(`${customerName} is not eligible for the loan
                         because DTI ratio is 40% or greater.`);
            }
        }
        else {
            console.log(`${customerName} is not eligible for the loan because
                     customer is unemployed.`);
        }
    }
    else {
        console.log(`${customerName} is not eligible for the loan because 
                income is less than 50000.`);
    }
}
else {
    console.log(`${customerName} is not eligible for the loan because credit
             score is below 650.`);
}
//# sourceMappingURL=assignment2.js.map