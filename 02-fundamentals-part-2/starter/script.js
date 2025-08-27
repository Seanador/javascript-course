console.log("Part 2 functions is ready. ");

// Functions - Declarations and Expressions

console.log("=== Functions ===");

function logger() {
  console.log("My name is Sean");
}

logger();
logger();
logger();


function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 3);
console.log(appleJuice);

const juice1 = fruitProcessor(5, 0);
const juice2 = fruitProcessor(2, 4);
const juice3 = fruitProcessor (3, 2);
console.log(juice1, juice2, juice3);

// Function Expressions
const calcAge = function(birthYear) {
    return 2025 - birthYear;
};

const age1 = calcAge(2004);
console.log(age1);

console.log((calcAge(2002)));

function introduce(firstName, lastName, age) {
    const introduction = `I'm ${firstName} ${lastName}, a ${age} years old.`;
    return introduction;
}   

console.log(introduce("Sean", "Morales", 21));
console.log(introduce("Jane", "Doe", 30));

function yearsUntilRetirement(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years.`;
    } else {
        return `${firstName} has already retired.`;
    }
}

console.log(yearsUntilRetirement(2004, "Sean"));