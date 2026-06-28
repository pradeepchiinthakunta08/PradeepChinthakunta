"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let transactions = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];
let creditCount = 0;
let debitCount = 0;
let totalCredit = 0;
let totalDebit = 0;
let suspiciousCount = 0;
for (let i = 0; i < transactions.length; i++) {
    if (transactions[i] > 0) {
        creditCount++;
        totalCredit += transactions[i];
        if (transactions[i] > 10000) {
            console.log("Suspicious Credit Transaction with Amount: " + transactions[i]);
            suspiciousCount++;
        }
    }
    else {
        debitCount++;
        totalDebit += transactions[i];
        if (transactions[i] < -10000) {
            console.log("Suspicious Debit Transaction with Amount: " + transactions[i]);
            suspiciousCount++;
        }
    }
}
let remainingBalance = totalCredit + totalDebit;
console.log("Total Credit Transactions: " + creditCount);
console.log("Total Debit Transactions: " + debitCount);
console.log("Total Amount Credited: " + totalCredit);
console.log("Total Amount Debited: " + Math.abs(totalDebit));
console.log("Remaining Balance: " + remainingBalance);
console.log("Total Suspicious Transactions: " + suspiciousCount);
//# sourceMappingURL=assignment4.js.map