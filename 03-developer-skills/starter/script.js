// // // // Remember, we're gonna use strict mode in all scripts now!
// // // 'use strict';

// // // console.log('=== DEVELOPMENT ENVIRONMENT SETUP ===');

// // // // Create some messy code - don't worry about formatting yet
// // // const messyExample = function (name, age) {
// // //   if (age >= 18) {
// // //     return 'Hello ' + name + ', you are an adult';
// // //   } else {
// // //     return 'Hello ' + name + ', you are a minor';
// // //   }
// // // };

// // // console.log('Current messy code example:', messyExample('John', 25));
// // // console.log('Goal: Automatic formatting, auto-refresh, and typing shortcuts');

// // // // Extension Installation Test

// // // function testExtensions() {
// // //   const extensionTests = [
// // //     { name: 'Prettier', status: 'installed', purpose: 'code formatting' },
// // //     { name: 'Live Server', status: 'installed', purpose: 'auto refresh' },
// // //     {
// // //       name: 'Auto Rename Tag',
// // //       status: 'installed',
// // //       purpose: 'HTML efficiency',
// // //     },
// // //   ];

// // //   return extensionTests;
// // // }

// // // const extensionStatus = testExtensions();
// // // console.log('Extension installation status:', extensionStatus);

// // // // Prettier Configuration Test

// // // // This code has terrible formatting - Prettier will fix it!
// // // const prettierTest = {
// // //   firstName: 'Sarah',
// // //   lastName: 'Johnson',
// // //   skills: ['JavaScript', 'React', 'Node.js'],
// // //   isActive: true,
// // // };

// // // const messyFunction = function (x, y, z) {
// // //   if (x > 0 && y > 0) {
// // //     return x + y + z;
// // //   } else {
// // //     return 0;
// // //   }
// // // };

// // // const messyArrow = items => {
// // //   return items.map(item => {
// // //     return item.toUpperCase();
// // //   });
// // // };

// // // console.log(
// // //   'Before Prettier formatting - this code works but looks unprofessional'
// // // );

// // // // Create this with terrible formatting:
// // // const studentTest = {
// // //   firstName: 'Sean Morales',
// // //   skills: ['HTML', 'CSS', 'JavaScript'],
// // //   experience: 'beginner',
// // //   goals: ['become-developer', 'build-projects'],
// // // };

// // // const testFunc = function (data) {
// // //   for (let i = 0; i < data.length; i++) {
// // //     console.log(data[i]);
// // //   }
// // // };

// // // // Live Server Testing

// // // let liveServerTest = 'Initial message - change #1';
// // // console.log('Live Server test:', liveServerTest);

// // // const timeStamp = new Date().toLocaleTimeString();
// // // const updateCount = 1;

// // // console.log(`Live Server update #${updateCount} at ${timeStamp}`);

// // // function demonstrateLiveReload() {
// // //   const randomColor = ['red', 'blue', 'green', 'purple', 'orange'][
// // //     Math.floor(Math.random() * 5)
// // //   ];
// // //   const message = `Live Server rocks! Random color: ${randomColor}`;

// // //   console.log(message);
// // //   return message;
// // // }

// // // demonstrateLiveReload();

// // // function showCurrentTime() {
// // //   const now = new Date().toLocaleTimeString();
// // //   console.log('Current time:', now);
// // //   return now;
// // // }

// // // showCurrentTime();

// // // console.log('Testing snippet functionality - cl + Tab created this!');

// // // function testSnippets() {
// // //   console.log('Function created with snippet - func + Tab!');
// // //   return 'Snippets working perfectly!';
// // // }

// // // testSnippets();

// // // const snippetTest = message => {
// // //   console.log(`Arrow function from snippet: ${message}`);
// // //   return message;
// // // };

// // // snippetTest('Snippets save so much typing time!');

// // // // Environment Setup Verification

// // // console.log('🎉 Professional Development Environment Complete!');
// // // console.log('✅ Prettier: Automatic code formatting');
// // // console.log('✅ Live Server: Automatic browser refresh');
// // // console.log('✅ Snippets: Fast code generation');
// // // console.log('✅ Extensions: Enhanced productivity');
// // // console.log('Ready for professional JavaScript development!');

// // // function calculateTimeSavings() {
// // //   const dailyConsoleLogs = 50;
// // //   const keystrokesSavedPerLog = 11;
// // //   const dailySavings = dailyConsoleLogs * keystrokesSavedPerLog;
// // //   const monthlySavings = dailySavings * 22;

// // //   console.log(`Daily keystrokes saved: ${dailySavings}`);
// // //   console.log(`Monthly keystrokes saved: ${monthlySavings}`);

// // //   return { daily: dailySavings, monthly: monthlySavings };
// // // }

// // // calculateTimeSavings();

// // //HOUR 2
// // 'use strict';

// // console.log('=== HOUR 2: DEVELOPER MINDSET & PROBLEM SOLVING ===');

// // console.log(
// //   'Key insight: Professional developers think systematically, not just code'
// // );

// // console.log('Goal: Transform from beginner to professional problem-solver');
// // console.log('4-Step Framework: Understand → Divide → Research → Implement');

// // /*
// // PROBLEM STATEMENT:
// // Given an array of temperatures from one day, calculate the temperature amplitude.
// // Keep in mind that sometimes there might be a sensor error.

// // Test data: [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

// // STEP 1: UNDERSTANDING THE PROBLEM
// // - Temperature amplitude = difference between highest and lowest temperature
// // - Sensor errors = 'error' strings that should be ignored
// // - Return a number representing amplitude (max - min)

// // STEP 2: SUB-PROBLEMS
// // 1. How to ignore errors? (Skip non-number values)
// // 2. Find max value in temperature array
// // 3. Find min value in temperature array
// // 4. Subtract min from max and return result
// // */

// // const calcTempAmplitude = function (temps) {
// //   let max = temps[0];
// //   let min = temps[0];

// //   for (let i = 0; i < temps.length; i++) {
// //     const curTemp = temps[i];
// //     if (typeof curTemp !== 'number') continue;

// //     if (curTemp > max) max = curTemp;
// //     if (curTemp < min) min = curTemp;
// //   }

// //   console.log(max, min);
// //   return max - min;
// // };

// // const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// // const amplitude = calcTempAmplitude(temperatures);
// // console.log(amplitude);

// // /*
// // PROBLEM 2: Function should handle TWO arrays of temperatures

// // STEP 1: UNDERSTAND - Merge arrays, then apply existing logic
// // STEP 2: SUB-PROBLEMS - 1) Merge arrays 2) Use existing algorithm
// // STEP 3: RESEARCH - array1.concat(array2) method
// // STEP 4: IMPLEMENT - Combine and reuse existing code
// // */

// // const calcTempAmplitudeNew = function (t1, t2) {
// //   const temps = t1.concat(t2);
// //   console.log(temps);

// //   let max = temps[0];
// //   let min = temps[0];

// //   for (let i = 0; i < temps.length; i++) {
// //     const curTemp = temps[i];
// //     if (typeof curTemp !== 'number') continue;

// //     if (curTemp > max) max = curTemp;
// //     if (curTemp < min) min = curTemp;
// //   }

// //   console.log(max, min);
// //   return max - min;
// // };

// // const array1 = [3, 5, 1];
// // const array2 = [9, 0, 5];
// // const amplitudeNew = calcTempAmplitudeNew(array1, array2);
// // console.log(amplitudeNew);

// // console.log(
// //   'Problem-solving framework applied successfully to extended challenge!'
// // );

// // console.log('Framework mastered - ready for independent problem solving!');
// // console.log('Hour 2 Done!');

// // Developer Skills Hour 3
// 'use strict';

// console.log('=== HOUR 3: RESEARCH & DEBUGGING MASTERY ===');

// /*
// Random Googling vs Strategic Research:

// RANDOM GOOGLING (Beginner Approach):
// - Search only when completely stuck
// - Use vague search terms like "javascript array problem"
// - Copy-paste first solution found
// - Don't understand what the code does
// - Same problems happen repeatedly

// STRATEGIC RESEARCH (Professional Approach):
// - Research proactively to understand concepts
// - Use specific, targeted search terms
// - Evaluate multiple solutions
// - Understand solutions before implementing
// - Build knowledge for future problems
// */

// console.log(
//   'Goal: Master research and debugging like a professional developer'
// );
// console.log(
//   'Strategic research builds lasting knowledge, not just quick fixes'
// );

// ////////////////////////////////////
// // PROFESSIONAL GOOGLE RESEARCH TECHNIQUES

// /*
// RESEARCH CHALLENGE: Find Maximum Value in Array
// Search progression:
// 1. "javascript maximum value array"
// 2. "javascript Math.max array"
// 3. "javascript Math.max spread operator array"
// 4. "Math.max MDN javascript"
// */

// function demonstrateArrayMax(numbers) {
//   const method1 = Math.max(...numbers);

//   let method2 = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > method2) method2 = numbers[i];
//   }

//   const method3 = numbers.reduce((max, current) =>
//     current > max ? current : max
//   );

//   return { method1, method2, method3 };
// }

// // Test our research with sample data
// const testNumbers = [3, 7, 2, 9, 1, 5];
// const maxResults = demonstrateArrayMax(testNumbers);
// console.log('Multiple approaches from research:', maxResults);

// // STACK OVERFLOW RESEARCH RESULTS

// function reverseStringMethods(str) {
//   const method1 = str.split('').reverse().join('');

//   let method2 = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     method2 += str[i];
//   }

//   const method3 = [...str].reverse().join('');

//   return { method1, method2, method3 };
// }

// const reverseResults = reverseStringMethods('hello');
// console.log('Stack Overflow research results:', reverseResults);

// // STACK OVERFLOW RESEARCH RESULTS

// function reverseStringMethods(str) {
//   const method1 = str.split('').reverse().join('');

//   let method2 = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     method2 += str[i];
//   }

//   const method3 = [...str].reverse().join('');

//   return { method1, method2, method3 };
// }

// // MDN DOCUMENTATION MASTERY

// function demonstrateConcat() {
//   const array1 = [1, 2, 3];
//   const array2 = [4, 5, 6];
//   const array3 = [7, 8, 9];

//   const simple = array1.concat(array2);

//   const multiple = array1.concat(array2, array3);

//   console.log('Original array1 unchanged:', array1);

//   return { simple, multiple };
// }

// // Run demo
// const concatResults = demonstrateConcat();
// console.log('MDN documentation applied:', concatResults);

// function calculateAverageScore(scores) {
//   if (scores.length === 0) return 0;

//   let total = 0;
//   for (let i = 0; i < scores.length; i++) {
//     total += scores[i];
//   }

//   return total / scores.length;
// }

// const testScores = [85, 92, 78, 96, 88];
// const fixedResult = calculateAverageScore(testScores);
// console.log('Buggy result:', fixedResult);

// // BROWSER DEVELOPER TOOLS MASTERY

// function demonstrateConsoleDebugging(data) {
//   console.group('Debugging Session');

//   console.log('Input data:', data);

//   if (typeof data !== 'object') {
//     console.warn('Warning: Expected object, got', typeof data);
//   }

//   console.table(data);
//   console.groupEnd();

//   return Array.isArray(data) ? data.length : Object.keys(data).length;
// }

// const arrayData = [1, 2, 3, 4, 5];
// const objectData = { name: 'John', age: 30, city: 'New York' };

// demonstrateConsoleDebugging(arrayData);
// demonstrateConsoleDebugging(objectData);

//HOUR 4

'use strict';

console.log('=== HOUR 4: ADVANCED PROBLEM-SOLVING MASTERY ===');

console.log('Ready to tackle complex problems using systematic approaches');
console.log('Challenge: Build solutions that work under pressure');

// MAIN CHALLENGE: Weather Forecast String Builder

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }

  console.log('...' + str);
}

printForecast(data1);
printForecast(data2);

console.log('Weather forecast formatter working correctly!');

// ALTERNATIVE IMPLEMENTATIONS

//array methods
function printForecastMap(arr) {
  const formatted = arr.map((temp, index) => `${temp}°C in ${index + 1} days`);
  console.log('...' + formatted.join(' ... ') + ' ...');
}

//single line approach
function printForecastReduce(arr) {
  const result = arr.reduce(
    (acc, temp, index) => acc + `${temp}°C in ${index + 1} days ... `,
    '...'
  );
  console.log(result);
}

console.log('Testing alternative implementations:');
printForecastMap(data1);
printForecastReduce(data1);

// TIME-PRESSURED CHALLENGE: Work Hours Analyzer

function analyzeWorkWeek(dailyHours) {
  const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);

  const averageHours = Math.round((totalHours / dailyHours.length) * 10) / 10;

  const maxHours = Math.max(...dailyHours);
  const maxDayIndex = dailyHours.indexOf(maxHours);
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const maxDay = days[maxDayIndex];

  const daysWorked = dailyHours.filter(hours => hours > 0).length;

  const isFullTime = totalHours >= 35;

  return {
    totalHours,
    averageHours,
    maxDay,
    daysWorked,
    isFullTime,
  };
}

const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];
const analysis = analyzeWorkWeek(weeklyHours);
console.log('Work week analysis:', analysis);

console.log('Challenge completed under time pressure!');

//OPTIMIZED SOLUTION
function analyzeWorkWeekOptimized(dailyHours) {
  if (!Array.isArray(dailyHours) || dailyHours.length !== 7) {
    console.error('Invalid input: Expected array of 7 daily hours');
    return null;
  }

  const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);
  const averageHours = Math.round((totalHours / 7) * 10) / 10;
  const maxHours = Math.max(...dailyHours);
  const maxDayIndex = dailyHours.indexOf(maxHours);
  const daysWorked = dailyHours.filter(hours => hours > 0).length;

  const dayNames = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  return {
    totalHours,
    averageHours,
    maxDay: dayNames[maxDayIndex],
    daysWorked,
    isFullTime: totalHours >= 35,
    workingDays: dailyHours
      .map((hours, index) => (hours > 0 ? dayNames[index] : null))
      .filter(day => day !== null),
  };
}

const optimizedAnalysis = analyzeWorkWeekOptimized(weeklyHours);
console.log('Optimized analysis:', optimizedAnalysis);

////////////////////////////////////
// FINAL INTEGRATION: Debug and Enhance Legacy Code

function legacyForecastFunction(temperatures) {
  let result = '';
  for (let i = 0; i < temperatures.length; i++) {
    result = result + temperatures[i] + ' degrees in day ' + (i + 1) + ', ';
  }
  return result;
}

const testData = [15, 18, 22, 19];
console.log('Buggy function output:', legacyForecastFunction(testData));

////////////////////////////////////
// SYSTEMATIC DEBUGGING AND ENHANCEMENT
//comeplete & enhanced
function enhancedForecastFunction(temperatures, options = {}) {
  if (!Array.isArray(temperatures) || temperatures.length === 0) {
    console.error('Invalid input: temperatures must be a non-empty array');
    return '';
  }

  const { unit = '°C', separator = '...', includeIndex = true } = options;

  let result = '';

  for (let i = 0; i < temperatures.length; i++) {
    const dayNumber = includeIndex ? i + 1 : i;
    result += `${temperatures[i]}${unit} in ${dayNumber} days${separator}`;
  }

  return separator + result.slice(0, -separator.length);
}

console.log('Enhanced function (default):', enhancedForecastFunction(testData));
console.log(
  'Enhanced function (custom):',
  enhancedForecastFunction(testData, {
    unit: '°F',
    separator: ' | ',
    includeIndex: true,
  })
);

console.log('Complete developer skills successfully applied!');
console.log('Legacy code debugged, fixed, and enhanced systematically');


