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


//function scope

const globalVar = "I am global";
function testScope(){
    const localVar = "I am Local";
    console.log(globalVar);
    console.log(localVar);
}

testScope();
console.log(globalVar);
//console.log(localVar); // error, localVar is not defined

////////////////////////////////////
// Coding Challenge #1

// Function to calculate average of 3 scores
function calcAverage(score1, score2, score3) {
  const average = (score1 + score2 + score3) / 3;
  return average;
}

// Function to check winner
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
  } else {
    return `No team wins... Koalas scored ${avgKoalas}, Dolphins scored ${avgDolphins}`;
  }
}

// Test Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));

// Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));


