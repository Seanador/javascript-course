// // JavaScript Fundamentals - Part 1
// // We'll write our code here!
// let js = "Amazing";
// console.log(40 + 8 + 23 - 10);
// console.log(js);

// console.log("=== VARIABLES ===");

// let firstName = "Jonas";
// console.log(firstName);

// let age = 30;
// console.log(age);
// age = 50;
// console.log(age);

// const birthYear = 1991;
// console.log(birthYear);

// const PI = 3.1415;
// console.log(PI);

// var job = "Programmer"
// job = "Teacher";
// console.log(job);

// const country = "Philippines";
// const language = "Filipino";

// age = 25;
// age = 26;

// // let firstName
// // let myCurrentJob
// // const PI

// console.log("=== DATA TYPES ===");
// // Number
// let id = 12345;
// console.log(id);
// console.log(typeof id);

// let lastName = "Morales";
// console.log(lastName);
// console.log(typeof lastName); 

// let JavaScriptIsFun = true;
// console.log(JavaScriptIsFun);
// console.log(typeof JavaScriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// let dynamicVariable = 40;
// console.log(dynamicVariable, typeof dynamicVariable);
// dynamicVariable = "I am now a string";
// console.log(dynamicVariable, typeof dynamicVariable);
// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable); 

// Basic Operators - Math
console.log("=== MATH OPERATIONS ===");
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 2 ** 3 means 2 to the power of 3
console.log("Math Operations");
console.log("Addition:", 10 + 5);
console.log("Subtraction:", 20 - 8);
console.log("Multiplication:", 4 * 7);
console.log("Division:", 15 / 3);
console.log("Exponentiation:", 2 ** 3);

// Math with Strings
const firstName = "Sean";
const lastName = "Morales";
console.log(firstName + " " + lastName);

console.log("Hello " + "World" + "!")

// Assignment Operators
console.log("=== ASSIGNMENT OPERATORS ===");
let x = 10 + 5; // 15
console.log("x starts as:", x)

x += 10;
console.log("x starts as:", x); // 25
x *= 4; 
console.log("x starts as:", x); // 100
x /= 2;
console.log("x starts as:", x); // 50
x++;
console.log("x starts as:", x); // 51
x--;
console.log("x starts as:", x); // 50

// Comparison Operators
console.log("=== COMPARISON OPERATORS ===");
console.log("Age comparison:");
console.log(ageJonas > ageSarah); 
console.log(ageSarah >= 18);
console.log(ageJonas < 30);

console.log("Number comparison:");
console.log(25 > 20);
console.log (15 < 10);
console.log(18>=18);
console.log(16 <= 15);

const isFullAge = ageSarah >=18;
console.log("Sarah is adult:", isFullAge);

console.log("Complex Comparison");
console.log(now-1991 > now-2018);

let z, y;
z = y = 25 - 10 - 5;
console.log(z,y);

const averageAge = (ageJonas + ageSarah)/2;
console.log(averageAge);

////////////////////////////////////
// Coding Challenge #1 - BMI Calculator

// Test Data 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
 
const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;
const markHigherBMI = bmiMark > bmiJohn;
console.log("Is Mark's BMI higher than John's?", markHigherBMI); // true
 
// Test Data 2
const massMark2 = 95;      
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;

const bmiMark2 = massMark2 / heightMark2 ** 2;
const bmiJohn2 = massJohn2 / heightJohn2 ** 2;
const markHigherBMI2 = bmiMark2 > bmiJohn2;
console.log("Is Mark's BMI higher than John's?", markHigherBMI2);


// Your code here:
// 1. Calculate BMIs
// 2. Create markHigherBMI variable
// 3. Log results to console