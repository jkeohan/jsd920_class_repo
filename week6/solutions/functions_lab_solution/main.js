/**
 *
 * Independent Practice: Functions and Callbacks
 *
 * GOALS
 *
 * Your goal in this exercise is for the last line of code in this file to log
 * the number of odd numbers in the array.
 *
 * DIRECTIONS
 *
 * Implement 'makeCountingFunction()', so that it accepts a predicate function
 * as an argument. 'makeCountingFunction()' should return another function that
 * is able to:
 *
 * 	1. iterate through an array and apply the predicate function to each item in
 * 	   that array,
 * 	2. increment a counter based on the result of applying the predicate function
 * 	   to that item (i.e. does it match what we're looking for?)
 * 	3. return the final count.
 *
 * The predicate function 'isOdd()' should accept an individual number as a
 * parameter and return whether or not that number is odd.
 *
 * BONUS 1: Can you write another predicate function that counts evens?
 * BONUS 2: Can you write a function that will sum up all the numbers?
 *
 */

function makeCountingFunction (predicate) {
	return function (numbers) {
		var count = 0;

		numbers.forEach(function (num) {
			if (predicate(num)) {
				count += 1;
			}
		})

		return count;
	}
}

function isOdd (number) {
	if (number % 2 === 1) {
		return false;
	} else {
		return true;
	}
}

//function isOdd (number) { return number %2 == 1}

function isEven (number) {
	if (number % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

// =============================================================================
// The code below should work without modification.
// =============================================================================

/**
 * The line below should package up 'makeCountingFunction()' and 'isOdd()' into
 * a single function that accepts an array of items as a parameter, iterates
 * through it and returns a count of how many of those items are odd numbers.
 * This new function is being assigned to the variable 'countTheOdds'.
 */

var countTheOdds = makeCountingFunction(isOdd);

/**
 * The final line below calls our new 'countTheOdds()' function and passes in an
 * array of numbers. Once your code is working, the line below should return the
 * number 4.
 */

var oddCount = countTheOdds([1, 2, 3, 4, 5, 6, 7]);
console.log('There are ' + oddCount + ' odd numbers.');
// expected output: There are 4 odd numbers.

//////////////
// Bonus 1 ///
//////////////
var countTheEvens = makeCountingFunction(isEven);
var evenCount = countTheEvens([1,2,3,4,5,6,7]);
console.log('There are ' + evenCount + ' even numbers.');
// expected output: There are 3 even numbers.


/////////////
// Bonus 2 //
/////////////
function makeSumFunction (predicate) {
	return function (numbers) {
		var sum = 0;

		numbers.forEach(function (num) {
			if (predicate(num)) {
				sum += num;
			}
		})

		return sum;
	}
}

var sumTheOdds = makeSumFunction(isOdd);
var oddSum = sumTheOdds([1,2,3,4,5,6,7]);
console.log('The sum of the odd numbers is: ' + oddSum);
// expected output: The sum of the odd numbers is: 16

var sumTheEvens = makeSumFunction(isEven);
var evenSum = sumTheEvens([1,2,3,4,5,6,7]);
console.log('The sum of the odd numbers is: ' + evenSum);
// expected output: The sum of the odd numbers is: 12
