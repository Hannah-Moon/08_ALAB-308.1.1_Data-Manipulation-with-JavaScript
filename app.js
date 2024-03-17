//March 13, 2024 - ALAB 308.1.1: Data Manipulation with JavaScript

//------- Objectives -------//
// Create variable declarations using both let and const.
// Apply different types of data literals.
// Use arithmetic operators to manipulate data.
// Use comparison operators to compare data.
// Perform string concatenations.
// Implement escape sequences in strings for special characters.
// Use template literals for string interpolation and multi-line strings.
// Create effective documentation through the use of comments.

//------------------ //
// Problem Statement //
//------------------ //

// Problem: We have four numbers that need to add up to 50. At least two of these numbers must be odd. No number can be larger than 25, and each number must be unique.

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT!!!! be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);



//---------------------- //
// Part 1: Math Problems //
//---------------------- //
// 1. Check if all numbers are divisible by 5. Cache the result in a variable.
// const isDivisibleBy5 = n1 % 5;
// const isDivisibleBy5 = n2 % 5;
// const isDivisibleBy5 = n3 % 5;
// const isDivisibleBy5 = n4 % 5;
// console.log(isDivisibleBy5);

console.log("No.1 Question")

const isDivisibleBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) === 0;
console.log(isDivisibleBy5)

console.log('\n')
console.log("----------------------------------")


// 2. Check if the first number is larger than the last. Cache the result in a variable.
console.log("No.2 Question")

const isFirstLargerThanLast = n1 > n4;
console.log(isFirstLargerThanLast)
/* Tried different method */
console.log(`Is first number N1 greater than the last number N4? ${isFirstLargerThanLast}`);

console.log('\n')
console.log("----------------------------------")


// 3. Accomplish the following arithmetic chain:
//    - Subtract the first number from the second number.
//    - Multiply the result by the third number.
//    - Find the remainder of dividing the result by the fourth number.
console.log("No.3 Question - First trial")

const arithmeticChain = (n2 - n1);
console.log (`The first outcome_Subtraction the first number from the second number: ${arithmeticChain}.`)
const mulipleOf3 = (arithmeticChain * 3);
console.log (`The second outcome_Multiple the first outcome 3 times : ${mulipleOf3}.`);
const remainder = (mulipleOf3 % n4);
console.log (`The third outcome_Now we see the remainder when we divide the second outcome by the fourth number N4 : ${remainder}.`);

console.log('\n')

/* Another way of solving no.3 problem */
console.log("No.3 Question - Second trial")

const arithmeticChain_O1 = ((n1 - n2) * n3) % n4;
console.log(`This is antoher way to calculate the above problems. The answer is ${arithmeticChain_O1}.`)

console.log('\n')
console.log("----------------------------------")



// 4. Change the way that isOver25 calculates so that we do not need 
//    to use the NOT operator (!) in other logic comparisons. 
//    Rename the variable as appropriate.
// 
//    ** const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

console.log("No.4 Question")

const isLessThanOrEqualTo25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
console.log(`Are all give numbers equal to or under 25? ${isLessThanOrEqualTo25}`)

const isUnder25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;
console.log(`Are all given numbers under 25? ${isUnder25}`);

console.log('\n')
console.log("----------------------------------")


//----------------------- //
// Part 2: Practical Math //
//----------------------- //
// Let’s look at a more practical scenario.
// You are planning a cross-country road trip!
// The distance of the trip, in total, is 1,500 miles.
// Your car’s fuel efficiency is as follows:
// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.
// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.
// Set up a program to answer the following questions:

// Constants
const totalDistance_1 = 1500; // miles
const fuelEfficiency = {
    55: 30, // miles per gallon
    60: 28, // miles per gallon
    75: 23  // miles per gallon
};
const fuelBudget_1 = 175; // dollars
const costPerGallon_1 = 3; // dollars

// Calculate fuel needed for the entire trip
const fuelNeeded55 = totalDistance_1 / fuelEfficiency[55];
const fuelNeeded60 = totalDistance_1 / fuelEfficiency[60];
const fuelNeeded75 = totalDistance_1 / fuelEfficiency[75];

// Check if the budget is enough to cover the fuel expense
const isBudgetEnough55 = fuelNeeded55 * costPerGallon_1 <= fuelBudget_1;
const isBudgetEnough60 = fuelNeeded60 * costPerGallon_1 <= fuelBudget_1;
const isBudgetEnough75 = fuelNeeded75 * costPerGallon_1 <= fuelBudget_1;

// Calculate the time taken for the trip
const tripTime55 = totalDistance_1 / 55;
const tripTime60 = totalDistance_1 / 60;
const tripTime75 = totalDistance_1 / 75;

// Compare results for traveling at different speeds
console.log(`At 55 miles per hour:`);
console.log(`Fuel needed: ${fuelNeeded55.toFixed(2)} gallons`);
console.log(`Trip time: ${tripTime55.toFixed(2)} hours`);
console.log(`Budget enough: ${isBudgetEnough55 ? "Yes" : "No"}`);
console.log();

console.log(`At 60 miles per hour:`);
console.log(`Fuel needed: ${fuelNeeded60.toFixed(2)} gallons`);
console.log(`Trip time: ${tripTime60.toFixed(2)} hours`);
console.log(`Budget enough: ${isBudgetEnough60 ? "Yes" : "No"}`);
console.log();

console.log(`At 75 miles per hour:`);
console.log(`Fuel needed: ${fuelNeeded75.toFixed(2)} gallons`);
console.log(`Trip time: ${tripTime75.toFixed(2)} hours`);
console.log(`Budget enough: ${isBudgetEnough75 ? "Yes" : "No"}`);
