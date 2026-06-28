"use strict";
// Given a number n, determine whether it is a prime number or not. A prime 
// number is a number greater than 1 that has no positive divisors other than 1 and itself.
// Examples :
// Input: n = 7
// Output: true
// Explanation: 7 has exactly two divisors: 1 and 7, making it a prime number.
Object.defineProperty(exports, "__esModule", { value: true });
// Input: n = 25
// Output: false
// Explanation: 25 has more than two divisors: 1, 5, and 25, so it is not a prime number.
// Input: n = 1
// Output: false
// Explanation: 1 has only one divisor (1 itself), which is not sufficient for it to be considered
// prime.
// Example1
// let n:numebr=7;
// let isPrime: boolean = true;
// if (n<=1){
//     isPrime=false
// }else {
//     for (let i=2;i<n;i++){
//         if (n%i===0){
//             isPrime=false;
//             break;
//         }
//     }
// }
// console.log(isPrime);
// let n: number=25;
// let isPrime: boolean=true;
// if (n<=1){
//     isPrime=false;
// }else{
//     for (let i=2; i<n; i++){
//         if (n%i ===0){
//             isPrime=false;
//             break;
//         }
//     }
// }
// console.log(isPrime);
//With reusable function
function isPrimeNumber(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrimeNumber(7)); // true
console.log(isPrimeNumber(25)); // false
console.log(isPrimeNumber(1)); // false
// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 25, 27];
// //calling all numbers defined in array in forloop
// for (let i = 0; i < numbers.length; i++) {
//     let currentNumber = numbers[i];
//     let isPrime = true;
//     // 1 is not a prime number
//     if (currentNumber <= 1) {
//         isPrime = false;
//     } else {
//         // Check divisibility from 2 to currentNumber - 1
//         for (let j = 2; j < currentNumber; j++) {
//             if (currentNumber % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//     }
//     console.log(currentNumber + " : " + isPrime);
// }
//# sourceMappingURL=assignment6.js.map