"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let prices = [7, 1, 5, 3, 6, 4];
let minPrice = prices[0];
let maxProfit = 0;
for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
        minPrice = prices[i];
    }
    let profit = prices[i] - minPrice;
    if (profit > maxProfit) {
        maxProfit = profit;
    }
}
console.log("Maximum Profit:", maxProfit);
//# sourceMappingURL=assignment10.js.map