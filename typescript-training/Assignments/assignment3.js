"use strict";
// 1. Create two arrays to store student names ["Suresh","Mahesh","Naresh"] and
// marks [75, 80, 82] 
Object.defineProperty(exports, "__esModule", { value: true });
// Expected Output:
// Updated Marks:
// Suresh: 85
// Mahesh: 90
// Naresh: 92
// Average Marks: 89.0
let studentNames = ["Suresh", "Mahesh", "Naresh"];
let marks = [85, 90, 92];
// Another Array declaration to store the addon marks
let addonMarks = [];
// Add 10 marks to each students using assignment operators and
// store it into another array, after adding 10 marks identify the average marks of all
// students
// Add 10 marks to each student
for (let i = 0; i < marks.length; i++) {
    marks[i] += 10; // Assignment operator
    addonMarks.push(marks[i]);
}
// Calculate average
let total = 0;
for (let i = 0; i < addonMarks.length; i++) {
    total += addonMarks[i];
}
let average = total / addonMarks.length;
// Output
console.log("Added Marks:");
for (let i = 0; i < studentNames.length; i++) {
    console.log(studentNames[i] + ": " + addonMarks[i]);
}
console.log("Average Marks: " + average.toFixed(1));
//# sourceMappingURL=assignment3.js.map