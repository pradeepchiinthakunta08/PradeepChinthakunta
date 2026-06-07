


// let rows: number = 5;

// for (let i = 1; i <= rows; i++) {

//     let pattern: string = "";

//     for (let j = 1; j <= i; j++) {
//         pattern += "*";
//     }

//     console.log(pattern);
// }

let rows: number = 5;

for (let i = 1; i <= rows; i++) {

    let pattern: string = "";

    // Print spaces
    for (let j = 1; j <= rows - i; j++) {
        pattern += " ";
    }

    // Print stars
    for (let k = 1; k <= i; k++) {
        pattern += "*";
    }

    console.log(pattern);
}