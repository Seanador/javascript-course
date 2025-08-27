// // // // // JavaScript Fundamentals - Part 1
// // // // // We'll write our code here!
// // // // let js = "Amazing";
// // // // console.log(40 + 8 + 23 - 10);
// // // // console.log(js);

// // // // console.log("=== VARIABLES ===");

// // // // let firstName = "Jonas";
// // // // console.log(firstName);

// // // // let age = 30;
// // // // console.log(age);
// // // // age = 50;
// // // // console.log(age);

// // // // const birthYear = 1991;
// // // // console.log(birthYear);

// // // // const PI = 3.1415;
// // // // console.log(PI);

// // // // var job = "Programmer"
// // // // job = "Teacher";
// // // // console.log(job);

// // // // const country = "Philippines";
// // // // const language = "Filipino";

// // // // age = 25;
// // // // age = 26;

// // // // // let firstName
// // // // // let myCurrentJob
// // // // // const PI

// // // // console.log("=== DATA TYPES ===");
// // // // // Number
// // // // let id = 12345;
// // // // console.log(id);
// // // // console.log(typeof id);

// // // // let lastName = "Morales";
// // // // console.log(lastName);
// // // // console.log(typeof lastName); 

// // // // let JavaScriptIsFun = true;
// // // // console.log(JavaScriptIsFun);
// // // // console.log(typeof JavaScriptIsFun);

// // // // let year;
// // // // console.log(year);
// // // // console.log(typeof year);

// // // // let dynamicVariable = 40;
// // // // console.log(dynamicVariable, typeof dynamicVariable);
// // // // dynamicVariable = "I am now a string";
// // // // console.log(dynamicVariable, typeof dynamicVariable);
// // // // dynamicVariable = true;
// // // // console.log(dynamicVariable, typeof dynamicVariable); 

// // // // Basic Operators - Math
// // // console.log("=== MATH OPERATIONS ===");
// // // const now = 2037;
// // // const ageJonas = now - 1991;
// // // const ageSarah = now - 2018;
// // // console.log(ageJonas, ageSarah);

// // // console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 2 ** 3 means 2 to the power of 3
// // // console.log("Math Operations");
// // // console.log("Addition:", 10 + 5);
// // // console.log("Subtraction:", 20 - 8);
// // // console.log("Multiplication:", 4 * 7);
// // // console.log("Division:", 15 / 3);
// // // console.log("Exponentiation:", 2 ** 3);

// // // // Math with Strings
// // // const firstName = "Sean";
// // // const lastName = "Morales";
// // // console.log(firstName + " " + lastName);

// // // console.log("Hello " + "World" + "!")

// // // // Assignment Operators
// // // console.log("=== ASSIGNMENT OPERATORS ===");
// // // let x = 10 + 5; // 15
// // // console.log("x starts as:", x)

// // // x += 10;
// // // console.log("x starts as:", x); // 25
// // // x *= 4; 
// // // console.log("x starts as:", x); // 100
// // // x /= 2;
// // // console.log("x starts as:", x); // 50
// // // x++;
// // // console.log("x starts as:", x); // 51
// // // x--;
// // // console.log("x starts as:", x); // 50

// // // // Comparison Operators
// // // console.log("=== COMPARISON OPERATORS ===");
// // // console.log("Age comparison:");
// // // console.log(ageJonas > ageSarah); 
// // // console.log(ageSarah >= 18);
// // // console.log(ageJonas < 30);

// // // console.log("Number comparison:");
// // // console.log(25 > 20);
// // // console.log (15 < 10);
// // // console.log(18>=18);
// // // console.log(16 <= 15);

// // // const isFullAge = ageSarah >=18;
// // // console.log("Sarah is adult:", isFullAge);

// // // console.log("Complex Comparison");
// // // console.log(now-1991 > now-2018);

// // // let z, y;
// // // z = y = 25 - 10 - 5;
// // // console.log(z,y);

// // // const averageAge = (ageJonas + ageSarah)/2;
// // // console.log(averageAge);

// // // ////////////////////////////////////
// // // // Coding Challenge #1 - BMI Calculator

// // // // Test Data 1
// // // const massMark = 78;
// // // const heightMark = 1.69;
// // // const massJohn = 92;
// // // const heightJohn = 1.95;
 
// // // const bmiMark = massMark / heightMark ** 2;
// // // const bmiJohn = massJohn / heightJohn ** 2;
// // // const markHigherBMI = bmiMark > bmiJohn;
// // // console.log("Is Mark's BMI higher than John's?", markHigherBMI); // true
 
// // // // Test Data 2
// // // const massMark2 = 95;      
// // // const heightMark2 = 1.88;
// // // const massJohn2 = 85;
// // // const heightJohn2 = 1.76;

// // // const bmiMark2 = massMark2 / heightMark2 ** 2;
// // // const bmiJohn2 = massJohn2 / heightJohn2 ** 2;
// // // const markHigherBMI2 = bmiMark2 > bmiJohn2;
// // // console.log("Is Mark's BMI higher than John's?", markHigherBMI2);


// // // // Your code here:
// // // // 1. Calculate BMIs
// // // // 2. Create markHigherBMI variable
// // // // 3. Log results to console

// // const firtName = "Jonas";
// // const job = "teacher";
// // const birthYear = 1991;
// // const year = 2037;
// // const jonas = "I'm " + firtName + ", a " + (year - birthYear) + " year old " + job + "!";
// // console.log(jonas);

// // const jonasNew = `I'm ${firtName}, a ${year - birthYear} year old ${job}!`;
// // console.log(jonasNew);
// // console.log(`I'm ${2037 - 1991} years old`);
// // console.log(`Math works here: ${2 + 3} equals five`);

// // //if-else statements
// // const age = 15;
// // if (age >=18){
// //     console.log("Sarah can start a driving license");
// // } else {
// //     const yearsLeft = 18 - age;
// //     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// // }

// // console.log(Boolean(0)); //falsey value
// // console.log(Boolean(undefined)); //falsey value
// // console.log(Boolean('Jonas')); //truthy value
// // console.log(Boolean({})); //truthy value
// // console.log(Boolean('')); //falsey value

// // const massMark = 78;
// // const heightMark = 1.69;
// // const massJohn = 92;
// // const heightJohn = 1.95;

// // const BMIMark = massMark / heightMark ** 2;
// // const BMIJohn = massJohn / (heightJohn * heightJohn);
// // if (BMIMark > BMIJohn) {
// //     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
// // } else {
// //     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`);
// // }

// // // Type Conversion and coercion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas')); //Not a Number
// console.log(typeof NaN);

// console.log(String(23), 23);
// console.log(typeof String(23));

// // Automatic Type Coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');
// console.log('23' * '2');

// let n = '1' + 1;
// console.log(n);

// n = n-1;
// console.log(n);

// // Equality - Strict
// const age = '18';
// if (age === 18) console.log('You just became an adult(strict)');
// if (age == 18) console.log('You just became an adult :D (loose)');

// console.log('18' === 18);
// console.log('18' == 18);
// console.log(18 === 18);

// // why == can be dangerous
// console.log('0' == 0);
// console.log(0 == false);
// console.log('0' == false);
// console.log(null == undefined);

// console.log(' ' == 0);
// console.log(' ' === 0);

// // best practice
// //const favorite = Number(prompt("What's your favorite number?"));
// // console.log(favorite);
// // console.log(typeof favorite);

// // if (favorite === 23) {
// //     console.log('Cool! 23 is an amazing number!');
// // } else if (favorite === 7) {
// //     console.log('7 is also a cool number');
// // } else if (favorite === 9) {
// //     console.log('9 is also a cool number');
// // } else {
// //     console.log('Number is not 23 or 7 or 9');
// // }

// // if (favorite !== 23) console.log('Why not 23?');


// //logical operators
// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B
// console.log(`AND OPERATOR: ${hasDriversLicense && hasGoodVision}`);
// console.log(`OR OPERATOR: ${hasDriversLicense || hasGoodVision}`);
// console.log(`NOT OPERATOR: ${!hasDriversLicense}`);
// console.log(`NOT OPERATOR: ${!hasGoodVision}`);

// const isTired = false; //C
// console.log(hasDriversLicense && hasGoodVision && !isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Aiken is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

// //More Complex Scenarios
// driverAge = 20;
// const hasPermission = true;
// const hasExperience = true;

// if ((driverAge >=18 || hasPermission) && hasExperience) {
//     console.log('Approved to Drive!');
// } else {
//     console.log('Not Approved to Drive!');
// }

// // Create a club entry system using if else
// const age = 19; // Try different values
// const hasID = true; // Try different values
// const isVIP = false; // Try different values

// // Your logic here:
// if ((age >= 21 && isVIP) || hasID) {
//     console.log('Welcome to the club!');
// } else {
//      console.log('Sorry, you cannot enter');
// }

//The conditional (ternary) operator
const age = 20;
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}  

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

////////////////////////////////////
// Coding Challenge #4

const bill = 430; // Test with 275, 40, and 430

// Step 1: Create the tip calculation using ternary operator
// Rule: 15% if between 50-300, otherwise 20%
// Hint: bill >= 50 && bill <= 300

const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2; // Your ternary operator here

// Step 2: Create beautiful output with template literal
console.log(`The bill was: ${bill}, thse tip was ${tip}, and the total value ${bill + tip}`);

// Expected outputs:
// Bill 275: "The bill was 275, the tip was 41.25, and the total value 316.25"
// Bill 40:  "The bill was 40, the tip was 8, and the total value 48"
// Bill 430: "The bill was 430, the tip was 86, and the total value 516"