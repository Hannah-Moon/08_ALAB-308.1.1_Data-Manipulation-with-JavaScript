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



//------------------ //
// Part 1:  //
//------------------ //


// 1. Check if all numbers are divisible by 5. Cache the result in a variable.
// const isDivisibleBy5 = n1 % 5;
// const isDivisibleBy5 = n2 % 5;
// const isDivisibleBy5 = n3 % 5;
// const isDivisibleBy5 = n4 % 5;
// console.log(isDivisibleBy5);

const isDivisibleBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) ===0;
console.log(isDivisibleBy5)



// 2. Check if the first number is larger than the last. Cache the result in a variable.
const isFirstLargerThanLast = n1 > n4;
console.log(isFirstLargerThanLast)

// 3. Accomplish the following arithmetic chain:
//    - Subtract the first number from the second number.
//    - Multiply the result by the third number.
//    - Find the remainder of dividing the result by the fourth number.
  const arithmeticChain = (n1 - n2);
  console.log ('subtraction from first number to last: ${arithmeticChain}.')
  const mulipleOf3 = (arithmeticChain * 3);
  console.log ("multiplication of 3 : ${mulipleOf3}.");
  const remainder = (mulipleOf3 % n4);
  console.log ("remainding : ${remainder}.");


// 4. Change the way that isOver25 calculates so that we do not need 
//    to use the NOT operator (!) in other logic comparisons. 
//    Rename the variable as appropriate.
// 
//    ** const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

const isOver25_V1 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
console.log (isOver25_V1)



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

// 1. How many gallons of fuel will you need for the entire trip?
// Constants

// 2. Will your budget be enough to cover the fuel expense?

// 3. How long will the trip take, in hours?

const totalDistance = 1500; //miles
const fuelBudget = 175;  //dollars
const costPerGallon = 3;  // dollars

const fuelEffeciency55mph = 30;  //miles per gallon
const fuelEffenciency60mph = 28;  //miles per gallon
const fuelEffeciency75mph= 23;  //miles per gallon

const speed55mph = 55;  //miles per hour
const speed60mph = 60;  //miles per hour
const speed75mph = 75;  // miles per hour

const gallonsNeeded55mph = totalDistance / fuelEffeciency55mph 
console.log('We need this much gallon to travel: ${gallonsNeeded55mph}');

const totalCost55mph = gallonsNeeded55mph * costPerGallon
console.log('We need a total cost: ${totalCost55mph} for 55mph trip.');

const isBudgetEnough55mph = totalCost55mph <= fuelBudget
console.log("Is budget enough to make this trip: $")

const tripTime55mph = totalDistance / speed55mph