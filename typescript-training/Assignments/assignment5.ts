// Assignment (Conditional Statements & Loops)

// Employee Table
// S.No Name Base Salary Experience (Years) Year-End Rating (Out of

// 5)

// 1
// Alice
// Johnson 75000.0 5.1 4.2
// 2 Bob Smith 68000.0 3.2 3.8
// 3 Carol Davis 82000.0 7.1 4.5
// 4 David Brown 90000.0 10.2 2.5
// 5 Eva Green 60000.0 2.4 3.5

// Hike
// Rating % of base Salary as variable pay Bonus
// > =4.0 15.0 1500
// >=3 && < 4 10.0 1200
// < 3.0 3.0 300

// Extra Perks
// Employees with Experience >= 5 Years get extra Reward of 5000;

// There are 5 Employee records. Now Calculate the Hike percentage of each Employee and store the
// Values in Map with EmployeeName and HikePercentagevalue and Print them.

// Hike = ( Base Salary * variable pay % ) + Bonus + Reward ;
// Hike % = Hike / Base Salary .// Employee Data
let employeeNames: string[] = [
    "Alice Johnson",
    "Bob Smith",
    "Carol Davis",
    "David Brown",
    "Eva Green"
];

let baseSalaries: number[] = [75000, 68000, 82000, 90000, 60000];
let experiences: number[] = [5.1, 3.2, 7.1, 10.2, 2.4];
let ratings: number[] = [4.2, 3.8, 4.5, 2.5, 3.5];

// Map to store Employee Name and Hike Percentage
let hikeMap = new Map<string, number>();

for (let i = 0; i < employeeNames.length; i++) {

    let variablePay: number = 0;
    let bonus: number = 0;
    let reward: number = 0;

    // Determine Variable Pay and Bonus
    if (ratings[i] >= 4.0) {
        variablePay = 15;
        bonus = 1500;
    }
    else if (ratings[i] >= 3.0 && ratings[i] < 4.0) {
        variablePay = 10;
        bonus = 1200;
    }
    else {
        variablePay = 3;
        bonus = 300;
    }

    // Extra Reward
    if (experiences[i] >= 5) {
        reward = 5000;
    }

    // Calculate Hike
    let hike =
        (baseSalaries[i] * variablePay / 100) +
        bonus +
        reward;

    let hikePercentage = (hike / baseSalaries[i]) * 100;

    // Store in Map
    hikeMap.set(employeeNames[i], hikePercentage);
}

// Print Results
console.log("Employee Hike Percentages:");

for (let [name, percentage] of hikeMap) {
    console.log(name + " : " + percentage.toFixed(2) + "%");
}