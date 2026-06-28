"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const n = 5;
// Upper half including middle row
for (let i = 1; i <= n; i++) {
    let row = "";
    // Spaces
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    // Numbers
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }
    console.log(row);
}
// Lower half
for (let i = n - 1; i >= 1; i--) {
    let row = "";
    // Spaces
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    // Numbers
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }
    console.log(row);
}
//# sourceMappingURL=assignment11.js.map