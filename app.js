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

const isDivisibleBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) === 0;
console.log(isDivisibleBy5)

console.log('\n')


// 2. Check if the first number is larger than the last. Cache the result in a variable.

const isFirstLargerThanLast = n1 > n4;
console.log(isFirstLargerThanLast)
/* Tried different method */
console.log(`Is first number N1 greater than the last number N4: ${isFirstLargerThanLast}`);

console.log('\n')

// 3. Accomplish the following arithmetic chain:
//    - Subtract the first number from the second number.
//    - Multiply the result by the third number.
//    - Find the remainder of dividing the result by the fourth number.
  const arithmeticChain = (n2 - n1);
  console.log (`The first outcome_Subtraction the first number from the second number: ${arithmeticChain}.`)
  const mulipleOf3 = (arithmeticChain * 3);
  console.log (`The second outcome_Multiple the first outcome 3 times : ${mulipleOf3}.`);
  const remainder = (mulipleOf3 % n4);
  console.log (`The third outcome_Now we see the remainder when we divide the second outcome by the fourth number N4 : ${remainder}.`);

  /* Another way of solving no.3 problem */
  const arithmeticChain_O1 = ((n1 - n2) * n3) % n4;
  console.log(`This is antoher way to calculate the above problems: ${arithmeticChain_O1}`)


// 4. Change the way that isOver25 calculates so that we do not need 
//    to use the NOT operator (!) in other logic comparisons. 
//    Rename the variable as appropriate.
// 
//    ** const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

    const isLessThanOrEqualTo25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
    console.log(`Are all give numbers equal to or under 25? ${isLessThanOrEqualTo25}`)

    const isUnder25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;
    console.log(`Are all given numbers under 25? ${isUnder25}`);
    
    console.log('\n')

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

/* -------------- First, I want to set up a groundwork by giving 'const' for each value. -------------- */

const totalDistance = 1500; // total miles you have to travel
const fuelBudget = 175;     // you have only 175 budge 
const costPerGallon = 3;    // everage cost of fuel at whatever place this person is living

const fe1_55mph = 30;  // At 55 miles per hour, you get 30 miles per gallon.
const fe2_60mph = 28; // At 60 miles per hour, you get 28 miles per gallon.
const fe3_75mph= 23;   // At 75 miles per hour, you get 23 miles per gallon.

const speed55mph = 55;  //  Mile you run at 55mph speed
const speed60mph = 60;  //  Mile you run at 60mph speed
const speed75mph = 75;  //  Mile you run at 75mph speed

const t1 = totalDistance / speed55mph; // Time spent 
console.log(`* At 55 mph: time 1 = ${t1}`)
const t2 = totalDistance / speed60mph;
console.log(`* At 60 mph: time 2 = ${t2}`)
const t3 = totalDistance / speed75mph;
console.log(`* At 75 mph: time 2 = ${t3}`)
const totalTime = t1 + t2 + t3
console.log(`Total time equals to ${totalTime}`)

// We don't this this part.
// const d1 = speed55mph * t1; //distace at 55ph
// const d2 = speed60mph * t2; //distace at 60ph
// const d3 = speed75mph * t3; //distace at 75ph
// const totalDistanceForTrip = d1 + d2 + d3
// console.log(`Total distance equals to ${totalDistanceForTrip}`)

/* -------------- Second, I want to answer the questions one by one. -------------- */

// 1. How many gallons of fuel will you need for the entire trip?
//    To answer this question, the equation should be as below:
//    First, we need to calculate the time it will take to complete the trip at each speed:
//    * At 55 mph: time 1 = 1500 miles / 55 mph = Approx.27.27
//    * At 60 mph: time 2 = 1500 miles / 60 mph = 25
//    * At 75 mph: time 3 = 1500 miles / 75 mph = 20

//    Now, we need to calculate the fuel consumption for each segment of the trip:
//    * At 55 mph: fuel 1 = 1500 miles / 30 mpg = 50
//    * At 55 mph: fuel 1 = 1500 miles / 28 mpg = Approx.53.57
//    * At 55 mph: fuel 1 = 1500 miles / 23 mpg = Approx.65.22

// 2. Will your budget be enough to cover the fuel expense?


// 3. How long will the trip take, in hours?


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
const isBudgetEnough55 = fuelNeeded55 * costPerGallon <= fuelBudget;
const isBudgetEnough60 = fuelNeeded60 * costPerGallon <= fuelBudget;
const isBudgetEnough75 = fuelNeeded75 * costPerGallon <= fuelBudget;

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


// Set this aside for now. Recycle this for later. 
// const gallonsNeeded55mph = totalDistance / fe1_55mph 
// console.log(`We need this much gallon to travel: ${gallonsNeeded55mph}`);

// const totalCost55mph = gallonsNeeded55mph * costPerGallon
// console.log(`We need a total cost: ${totalCost55mph} for 55mph trip.`);

// const isBudgetEnough55mph = totalCost55mph <= fuelBudget
// console.log(`Is budget enough to make this trip: ${isBudgetEnough55mph}`)


//----------------------- //
// Part 3: Practical Math //
//----------------------- //

console.log('\n');
console.log("Part 3: Future Exploration");

const speed = [55, 60, 75];

function roadTripCalculator2(speed, n) {
    if (n < 0) return;

    let mpg = speed[n] === 55 ? 30 :
        speed[n] === 60 ? 28 : 23;

    let gallonsReq = Math.ceil(roadTrip.trip / mpg);

    let enoughBudget = roadTrip.costPG * gallonsReq <= roadTrip.budget;

    if (!enoughBudget) {
        roadTripCalculator2(speed, n - 1);
    } else {

        const tripDuration = roadTrip.trip / speed[n];

        console.log(`We will be traveling at: ${speed[n]} mph for optimal speed.`);
        console.log(`Gallons of gasoline required for trip: ${gallonsReq}`);
        console.log(`The trip will take: ${tripDuration} hours to complete.`);
    }
}

roadTripCalculator2(speed, speed.length - 1);
console.log('\n');