// // // // // console.log("Part 2 functions is ready. ");

// // // // // // Functions - Declarations and Expressions

// // // // // console.log("=== Functions ===");

// // // // // function logger() {
// // // // //   console.log("My name is Sean");
// // // // // }

// // // // // logger();
// // // // // logger();
// // // // // logger();


// // // // // function fruitProcessor(apples, oranges) {
// // // // //     console.log(apples, oranges);
// // // // //     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// // // // //     return juice;
// // // // // }

// // // // // const appleJuice = fruitProcessor(5, 3);
// // // // // console.log(appleJuice);

// // // // // const juice1 = fruitProcessor(5, 0);
// // // // // const juice2 = fruitProcessor(2, 4);
// // // // // const juice3 = fruitProcessor (3, 2);
// // // // // console.log(juice1, juice2, juice3);

// // // // // // Function Expressions
// // // // // const calcAge = function(birthYear) {
// // // // //     return 2025 - birthYear;
// // // // // };

// // // // // const age1 = calcAge(2004);
// // // // // console.log(age1);

// // // // // console.log((calcAge(2002)));

// // // // // function introduce(firstName, lastName, age) {
// // // // //     const introduction = `I'm ${firstName} ${lastName}, a ${age} years old.`;
// // // // //     return introduction;
// // // // // }   

// // // // // console.log(introduce("Sean", "Morales", 21));
// // // // // console.log(introduce("Jane", "Doe", 30));

// // // // // function yearsUntilRetirement(birthYear, firstName) {
// // // // //     const age = calcAge(birthYear);
// // // // //     const retirement = 65 - age;

// // // // //     if (retirement > 0) {
// // // // //         return `${firstName} retires in ${retirement} years.`;
// // // // //     } else {
// // // // //         return `${firstName} has already retired.`;
// // // // //     }
// // // // // }

// // // // // console.log(yearsUntilRetirement(2004, "Sean"));


// // // // // //function scope

// // // // // const globalVar = "I am global";
// // // // // function testScope(){
// // // // //     const localVar = "I am Local";
// // // // //     console.log(globalVar);
// // // // //     console.log(localVar);
// // // // // }

// // // // // testScope();
// // // // // console.log(globalVar);
// // // // // //console.log(localVar); // error, localVar is not defined

// // // // // ////////////////////////////////////
// // // // // // Coding Challenge #1

// // // // // // Function to calculate average of 3 scores
// // // // // function calcAverage(score1, score2, score3) {
// // // // //   const average = (score1 + score2 + score3) / 3;
// // // // //   return average;
// // // // // }

// // // // // // Function to check winner
// // // // // function checkWinner(avgDolphins, avgKoalas) {
// // // // //   if (avgDolphins >= 2 * avgKoalas) {
// // // // //     return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
// // // // //   } else if (avgKoalas >= 2 * avgDolphins) {
// // // // //     return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
// // // // //   } else {
// // // // //     return `No team wins... Koalas scored ${avgKoalas}, Dolphins scored ${avgDolphins}`;
// // // // //   }
// // // // // }

// // // // // // Test Data 1
// // // // // let scoreDolphins = calcAverage(44, 23, 71);
// // // // // let scoreKoalas = calcAverage(65, 54, 49);
// // // // // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // // // // Test Data 2
// // // // // scoreDolphins = calcAverage(85, 54, 41);
// // // // // scoreKoalas = calcAverage(23, 34, 27);
// // // // // console.log(checkWinner(scoreDolphins, scoreKoalas));


// // // // const grades = [85, 92, 78, 96, 88];
// // // // console.log(grades);

// // // // const friends = ['Chamcham', 'Emey', 'WIll'];
// // // // console.log(friends);

// // // // const mixed = ['Jonas', 40, false, friends];
// // // // console.log(mixed);

// // // // const years = new Array(1991, 1984, 2008, 2020);
// // // // console.log(years);

// // // // console.log(friends[0]);
// // // // console.log(friends[1]);
// // // // console.log(friends[2]);

// // // // console.log(friends.length);

// // // // friends[0] = 'Jay';
// // // // console.log(friends);

// // // // const calcAge = function (birthYear) {
// // // //     return 2025 - birthYear;
// // // // }

// // // // const ages = [calcAge(1991), calcAge(1984), calcAge(2008)];
// // // // console.log(ages);

// // // // const newLength = friends.push('John');
// // // // console.log(friends);
// // // // console.log(newLength);

// // // // friends.unshift('Mark');
// // // // console.log(friends);

// // // // //remove elements
// // // // const popped = friends.pop(); //last
// // // // console.log(popped);
// // // // console.log(friends);

// // // // const shifted = friends.shift(); //first
// // // // console.log(shifted);
// // // // console.log(friends);

// // // // // finding an element
// // // // console.log(friends.indexOf('Emey'));
// // // // console.log(friends.indexOf('Mark'));

// // // // console.log(friends.includes('Emey'));
// // // // console.log(friends.includes('Mark'));


// // // // //traditional for loop
// // // // for (let i = 0; i < friends.length; i++) {
// // // //     console.log(friends[i]);
// // // // }

// // // // friends.forEach(
// // // //     function(friend, index){
// // // //         console.log(`${index + 1}: ${friend}`);
// // // // });

// // // // friends.forEach((friend, index) => {
// // // //     console.log(`${index + 1}: ${friend}`);
// // // // });

// // // // //practical example
// // // // const grades2 = [85, 92, 78, 96, 88, 74];
// // // // let total = 0;
// // // // for (let i = 0; i < grades2.length; i++) {
// // // //     total += grades2[i];
// // // // }
// // // // const average = total / grades2.length;
// // // // console.log(`Average grade: ${average.toFixed(2)}`);

// // // // let passedCount = 0;
// // // // grades2.forEach(grade => {
// // // //     if (grade >= 60) passedCount++;
// // // // });
// // // // console.log(`${passedCount} out of ${grades2.length} students passed.`);

// // // ////////////////////////////////////
// // // // Coding Challenge #2 - Student Grade Manager

// // // const grades = [78, 85, 92, 67, 88, 95, 73, 82];
// // // total = 0;
// // // // Function to calculate average
// // // function calculateAverage(grades) {
// // //     for (let i = 0; i < grades.length; i++) {
// // //         total += grades[i];
// // //     }
// // //     total = total / grades.length;
// // //     return total;
// // // }

// // // // Function to find highest grade
// // // function findHighestGrade(grades) {
// // //   // Your code here
// // //   // Hint: Start with first grade, compare with each subsequent grade
// // //     highestGrade = grades[0] // Initialize with the first grade
// // //     for (let i = 1; i < grades.length; i++) {
// // //         if (grades[i] > highestGrade) {
// // //             highestGrade = grades[i]
// // //         }
// // //     }
// // //     return highestGrade
// // // }

// // // // Function to find lowest grade
// // // function findLowestGrade(grades) {
// // //   // Your code here
// // //   // Hint: Similar to highest, but use < comparison
// // //    lowestGrade = grades[0] // Initialize with the first grade
// // //     for (let i = 1; i < grades.length; i++) {
// // //         if (grades[i] < lowestGrade) {
// // //             lowestGrade = grades[i]
// // //         }
// // //     }
// // //     return lowestGrade
// // // }

// // // // Function to count passing students
// // // function countPassing(grades, passingGrade) {
// // //   let passedCount = 0;
// // //   grades.forEach(grade => {
// // //         if (grade >= passingGrade) passedCount++;
// // // });
// // //  return passedCount;
// // // }

// // // // Generate complete report
// // // const average = calculateAverage(grades);
// // // const highest = findHighestGrade(grades);
// // // const lowest = findLowestGrade(grades);
// // // const passing = countPassing(grades, 70);

// // // console.log("=== GRADE REPORT ===");
// // // console.log(`Average: ${average.toFixed(2)}`);
// // // console.log(`Highest: ${highest}`);
// // // console.log(`Lowest: ${lowest}`);
// // // console.log(`Passing students: ${passing} out of ${grades.length}`);

// // const seanArray = [
// //     "Sean", 
// //     "Morales",
// //     2025 - 2004,
// //     "student",
// //     ["Chamcham", "Emey", "Will"]       
// // ];

// // console.log(seanArray[0]);
// // console.log(seanArray[1]);

// // const seanObject = {
// //     firstName: "Sean",
// //     lastName: "Morales",
// //     age: 2025 - 2004,   
// //     job: "student",
// //     friends: ["Chamcham", "Emey", "Will"]
// // };

// // console.log(seanObject);

// // // Property Access Methods
// // // Dot Notation
// // console.log(seanObject.firstName);
// // console.log(seanObject.lastName);
// // console.log(seanObject.age);
// // console.log(seanObject.job);

// // // Bracket Notation
// // console.log(seanObject["firstName"]);
// // console.log(seanObject["lastName"]);
// // console.log(seanObject["age"]); 

// // const nameKey = "Name";
// // console.log(seanObject["first" + nameKey]);

// // // Modifying Exisiting Properties
// // seanObject.job = "developer";
// // seanObject["age"] = 20;
// // console.log(seanObject);

// // // Add new Properties
// // seanObject.location = "Philippines";
// // seanObject["twitter"] = "SeanProgrammer";
// // seanObject.driverLicense = true;
// // console.log(seanObject);

// // // WHen to use dot vs bracket notation
// // const property = "job";
// // console.log(seanObject[property]); 

// // // Ordered, indexed data - think lists
// // const listOfYears = [1991, 1984, 2008, 2020];
// // const shoppingList = ["apples", "bananas", "milk", "bread"];
// // const testScores = [85, 92, 78, 96];

// // // Named, descriptive data - think entities
// // const person = {
// //   name: "Jonas",
// //   age: 46,
// //   occupation: "teacher",
// // };

// // const car = {
// //   brand: "Toyota",
// //   model: "Camry",
// //   year: 2020,
// //   color: "blue",
// // };

// // // objects can contain arrays, and arrays can contain objects
// // const student = {
// //     name: "Sarah",
// //     grades: [85, 92, 78],
// //     address: {
// //         street: "123 Main St",
// //         city: "New York",
// //         country: "USA"
// //     },
// // };

// // console.log(student.grades[0]);
// // console.log(student.address.city);

// // // Object Methods
// // const John = {
// //     firstName: "John",
// //     lastName: "Doe",
// //     birthYear: 1990,
// //     job: "teacher",
// //     friends: ["Michael", "Peter", "Steven"],
// //     hasDriverLicense: true,

// //     calcAge: function (birthYear) {
// //         return 2025 - birthYear;
// //     },
// // }

// // console.log(John.calcAge(2000));

// // const johnImproved = {
// //     firstName: "John",
// //     lastName: "Doe",
// //     birthYear: 1990,
// //     job: "teacher",
// //     friends: ["Michael", "Peter", "Steven"],
// //     hasDriverLicense: true,

// //     calcAge: function () {
// //         this.age = 2025 - this.birthYear;
// //         return this.age;
// //     },

// //     getSummary: function() {
// //         return `${this.firstName} is a ${this.calcAge()}-year old
// //          ${this.job}, 
// //          and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`;
// //     }   

// // };

// // console.log(johnImproved.calcAge());
// // console.log(johnImproved.age);
// // console.log(johnImproved.getSummary());

// // const bankAccount = {
// //     owner: "Sean Morales",
// //     movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
// //     interestRate: 1.2, 
// //     pin: 1917,

// //     calcBalance: function() {
// //         this.balance = this.movements.reduce((acc, mov) => acc + mov, 0);
// //         return this.balance;
// //     },

// //     deposit: function(amount) {
// //         this.movements.push(amount);
// //         console.log(`Deposited: ${amount}`);
// //     },

// //     withdraw: function(amount) {
// //         this.movements.push(-amount);
// //         console.log(`Withdrew: ${amount}`);
// //     },

// //     getAccountSummary: function() {
// //         return `Owner: ${this.owner}
// //         Balance: $${this.calcBalance()}
// //         Interest Rate: ${this.interestRate}%`;
// //     },
// // };  

// // console.log(bankAccount.getAccountSummary());
// // bankAccount.deposit(500);
// // console.log(bankAccount.getAccountSummary());

// // ////////////////////////////////////
// // // Coding Challenge #3 - User Profile System

// // const user = {
// //   firstName: "Sarah",
// //   lastName: "Johnson",
// //   birthYear: 1995,
// //   location: "New York",
// //   interests: ["photography", "travel", "coding"],
// //   friends: [
// //     { name: "Michael", status: "active" },
// //     { name: "Emma", status: "inactive" },
// //     { name: "David", status: "active" },
// //   ],
// //   isActive: true,

// //   // Calculate age method
// //   calcAge: function () {
// //     this.age = new Date().getFullYear() - this.birthYear;
// //     return this.age;
// //   },

// //   // Add friend method
// //   addFriend: function (name, status = "active") {
// //     this.friends.push({ name, status: status });
// //     return this.friends.length;
// //   },

// //   // Get active friends count
// //   getActiveFriends: function () {
// //     const activeFriends = this.friends.filter((friend) => friend.status === "active");
// //     return activeFriends.length;
// //   },

// //   // Toggle active status
// //   toggleStatus: function () {
// //     this.isActive = !this.isActive;
// //     return this.isActive;
// //   },

// //   // Generate profile summary
// //   getSummary: function () {
// //     const age = this.calcAge();
// //     const activeFriendsCount = this.getActiveFriends();
// //     const status = this.isActive ? "active" : "inactive";

// //     return `${this.firstName} ${this.lastName} is a ${age}-year-old from ${this.location}.` +
// //         ` They are currently ${status} and have ${activeFriendsCount} active friends.` +
// //         ` Their interests include: ${this.interests.join(", ")}.`;

// //   },
// // };

// // // Test your user profile system
// // console.log(user.getSummary());
// // user.addFriend("Alex", "active");
// // user.toggleStatus();
// // console.log(`\nAfter updates:`);
// // console.log(user.getSummary());

// // Select DOM elements

// // first method
// // QUery Selector

// const message = document.querySelector(".message");
// console.log(message);
// //gets the entire elemetn object with all its properties
// const button = document.querySelector("#btn");
// console.log(button);

// const heading = document.querySelector("h1");
// console.log(heading);
// //query selector returns the first matching element

// console.log(message.textContent);
// console.log(button.id);
// console.log(heading.tagName);
// console.log(heading.textContent);

// // getElementByID
// const buttonByID = document.getElementById("btn");
// console.log(buttonByID);
// console.log(buttonByID === button); //true

// // querySelectorAll
// const allParagraphs = document.querySelectorAll('p');
// console.log(allParagraphs);
// console.log(allParagraphs[0]);

//Modifying Element Content
const message = document.querySelector(".message");

console.log(message.textContent);
message.textContent = "Hello From JavaScript!";
console.log(message.textContent);

//innerHTML
message.innerHTML = "<strong>Hello From JavaScript!</strong>";
console.log(message.innerHTML);

//innerText
console.log(message.innerText);

//Input Element Values
const input = document.querySelector(".guess");
input.value = "Default Text";
console.log(input.value);

const heading = document.querySelector("h1");
heading.style.color = "red";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "3rem";

const button = document.querySelector("#btn");
button.style.padding = "20px";  
button.style.borderRadius = "10px"; 

// Event Listener - User Interaction
button.addEventListener("click", function(){
    console.log("Button Clicked!");
    message.textContent = "Button was clicked!";
    message.style.color = "green";

});

let clickCount = 0;
button.addEventListener("click", function(){
    clickCount++;
    button.textContent = `Clicked ${clickCount} times!`;
    button.style.backgroundColor = `hsl(${clickCount * 30}, 70%, 50% )`;
});

const display = document.querySelector(".message");

input.addEventListener("input", function(){
    const userText = input.value;
    display.textContent = `You typed: ${userText}`;
    display.style.fontSize = `${userText.length + 10}px`;
});

// keyboard events
input.addEventListener("keydown", function(event){
    console.log(`Key pressed: ${event.key}`);

    if(event.key === "Enter"){
        display.textContent = `You pressed Enter! Text was: ${input.value}`;
        display.style.color = "blue";
        input.value = "";
    }
});