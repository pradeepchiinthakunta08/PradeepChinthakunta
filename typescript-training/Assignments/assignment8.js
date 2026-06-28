"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let paragraph = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";
let searchWord = "Java";
let count = 0;
let index = paragraph.indexOf(searchWord);
console.log("Indexes of 'Java':");
while (index !== -1) {
    console.log(index);
    count++;
    index = paragraph.indexOf(searchWord, index + 1);
}
console.log("Total Occurrences: " + count);
//# sourceMappingURL=assignment8.js.map