let paragraph: string =
    "Java is a popular programming language. Java is used for web development, mobile applications, and more.";

let searchWord: string = "Java";

let count: number = 0;
let index: number = paragraph.indexOf(searchWord);

console.log("Indexes of 'Java':");

while (index !== -1) {
    console.log(index);

    count++;

    index = paragraph.indexOf(searchWord, index + 1);
}

console.log("Total Occurrences: " + count);