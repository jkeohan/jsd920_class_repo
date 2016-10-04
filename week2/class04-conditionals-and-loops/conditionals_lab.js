
//////////////////////
// CONDITIONALS LAB //
//////////////////////

// Using an if/else/else if structure, logical operators, and boolean logic, complete the function so that it prints the proper response for a given age input:

// 1) If you are under 16, you cannot do much outside of going to school
// 2) If you are 16 or older, you can drive
// 3) If you 18 or older, you can vote
// 4) If you are 21 or older, you can drink alcohol
// 5) If you are 25 or older, you can rent a car
// 6) If you are 35 or older, you can run for president
// 7) If you are 62 or older, you collect social security benefits

function whatCanYouDo (age) {
	// CODE HERE
	if (age < 16) {
		console.log('you can go to school! YES!');
	}
  else if ( age > 16 && age < 12) {
    console.log('you can drive');
  }
}

// Change this variable's value to generate different responses from the whatCanYouDo function
var age = 28;

// We haven't seen this yet, but this is how we call (or, invoke) a function
whatCanYouDo(age)

// Remember to use node to run this script > node conditionals_lab.js

// CHALLENGE
// Sign into HackerRank and try to resolve 30 Days of Code: Day 2 Challenge  



///////////////////////////////////////////////////////////////////////////////

/////////////////
// LOOPING LAB //
/////////////////

// PROBLEM #1 - Refactor using for loop
// codewars:  https://www.codewars.com/kata/powers-of-2/train/javascript
// Refactor the powersOfTwo function and have it use a for loop to return an 
// array of all powers of 2 from 0 to n (where n is an exponent).

//powersOfTwo(0), [1])
//powersOfTwo(1), [1, 2])
//powersOfTwo(4), [1, 2, 4, 8, 16])
// HINTS: 
// 1. Math.pow(2,0) will return 1
// 2. You will need to create a new array to store the values

// original powersOfTwo function
function powerOfTwo(n){
  var squaredNum = Math.pow(2,num)
}

// powersOfTwo using FOR loop
function powersOfTwo(n){
  //add code here
}

// PROBLEM #2 

// Refactor the powersOfTwo function and have it use a do while loop to return an 
// array of all powers of 2 from 0 to n (where n is an exponent).

// powersOfTwo using a DO/WHILE loop
function powersOfTwo(n){
   //add code here
}
