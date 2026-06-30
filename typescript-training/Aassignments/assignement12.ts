function myPow(x: number, n: number): number {
    let result = 1;
    let power = Math.abs(n);

    for (let i = 0; i < power; i++) {
        result *= x;
    }

    return n < 0 ? 1 / result : result;
}

// Test cases
console.log(myPow(2.00000, 10)); // 1024
console.log(myPow(2.10000, 3));  // 9.261
console.log(myPow(2.00000, -2)); // 0.25