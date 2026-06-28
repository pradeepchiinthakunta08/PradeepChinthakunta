"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let sentence = "Java programming is fun and challenging";
// Split sentence into words
let words = sentence.split(" ");
// 1: Count total words in sentance
console.log("Total Number of Words: " + words.length);
// 2: Print words in reverse order
let reverseSentence = "";
for (let i = words.length - 1; i >= 0; i--) {
    reverseSentence += words[i] + " ";
}
console.log("Reverse Order: " + reverseSentence.trim());
// Task 3: Convert first character of each word to uppercase
let updatedSentence = "";
for (let i = 0; i < words.length; i++) {
    let updatedWord = words[i].charAt(0).toUpperCase() +
        words[i].slice(1);
    updatedSentence += updatedWord + " ";
}
console.log("Capitalized Sentence: " + updatedSentence.trim());
//# sourceMappingURL=assignment7.js.map