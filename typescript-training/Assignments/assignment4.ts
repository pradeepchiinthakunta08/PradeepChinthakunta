let transactions: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

let creditCount: number = 0;
let debitCount: number = 0;

let totalCredit: number = 0;
let totalDebit: number = 0;

let suspiciousCount: number = 0;

for (let i = 0; i < transactions.length; i++) {

    if (transactions[i] > 0) {
        creditCount++;
        totalCredit += transactions[i];

        if (transactions[i] > 10000) {
            console.log("Suspicious Credit Transaction with Amount: " + transactions[i]);
            suspiciousCount++;
        }

    } else {
        debitCount++;
        totalDebit += transactions[i];

        if (transactions[i] < -10000) {
            console.log("Suspicious Debit Transaction with Amount: " + transactions[i]);
            suspiciousCount++;
        }
    }
}

let remainingBalance: number = totalCredit + totalDebit;

console.log("Total Credit Transactions: " + creditCount);
console.log("Total Debit Transactions: " + debitCount);

console.log("Total Amount Credited: " + totalCredit);
console.log("Total Amount Debited: " + Math.abs(totalDebit));

console.log("Remaining Balance: " + remainingBalance);

console.log("Total Suspicious Transactions: " + suspiciousCount);