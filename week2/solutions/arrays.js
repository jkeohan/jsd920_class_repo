/**
 * Arrays
 * Most of your answers should be stored in variables called q1, q2 etc..
 * and the variables printed to the console.
 * (i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of image source filenames.
 * Use "image1.png", "image2.png", and "image3.png" as the array values.
 */

// Your code here
var imageFilenames = ['image1.png', 'image2.png', 'image3.png']
var q1 = imageFilenames
console.log("Question 1: " + q1)
console.log("")

/**
 * Question 2
 * Using the array from Question 1, store the first element of the array
 * in variable q2.
 */

// Your code here
var firstImageFilename = imageFilenames[0]
var q2 = firstImageFilename
console.log("Question 2: " + q2)
console.log("")

/**
 * Question 3
 * Get the length of the first array (number of elements in the array)
 * and store it in variable q3
 */

// Your code here
var lengthOfImageFilenames = imageFilenames.length
var q3 = lengthOfImageFilenames
console.log("Question 3: " + q3)
console.log("")

/**
 * Question 4
 * Using the array from Question 1, store the last element of the array
 * in variable q4. Hint: How can we get the number of elements in the array?
 */

// Your code here
var lastImageFilename = imageFilenames[imageFilenames.length - 1]
var q4 = lastImageFilename
console.log("Question 4: " + q4)
console.log("")


// Bonus 1
// Using the array from Question 1, capitalize the first letter of each 
// element in the array and store the elments in a new variable bonus1.
// The a final array should look like:  ["Image1.png", "Image2.png", and "Image3.png]
// HINTS:
// -using the .split("") method will covert a string of text into an array
// -using the .join("") method wil join the elements back into a strig
// -using .toUpperCase() will covert a letter from lower to upper case

// Your code here
//Perform the same action for each item in the array
var bonus1 = []
q1[0] = q1[0].split("")
q1[0][0] = q[0][0].toUpperCase()
q1[0] = q1[0].join("")
bonus1[0] = q1[0]
console.log("Bonus 1: " + bonus1)
console.log("")


// ____________________________________________________________________________

/**
 * Arrays + Iteration
 */

/**
 * Question 5
 * Create an array of numbers using 1, 2, 3, and 4 as values.
 * Use a for loop, a forEach function or a map function to increase
 * each value by 1. You can either store each new value back in the original
 * array, or in a new array -- your choice. The end result should be
 * an array of numbers with values 2, 3, 4, and 5.
 */

// Your code here
var numbers = [1, 2, 3, 4]
var numbersBumpedUp = numbers.map(function(number) {
    return number + 1
})
var q5 = numbersBumpedUp
console.log("Question 5: " + q5)
console.log("")

/**
 * Question 6
 * Using the array from Question 5, find the average of the numbers in the array
 * (average = sum of all numbers/number of numbers). Store the average in q6.
 */

// Your code here
var sum = 0
for (var i = 0; i < numbersBumpedUp.length; i++) {
    sum += numbersBumpedUp[i]
}
var averageOfNumbersBumpedUp = sum / numbersBumpedUp.length
var q6 = averageOfNumbersBumpedUp
console.log("Question 6: " + q6)
console.log("")

/** 
 * Question 7
 * Loop through the array of ["green","blue","yellow"], and return only the 
 * color "blue". Store the new array in q8.
 */

 // Your code here
 var q8 = ["green","blue","yellow"].filter(function(d,i) { return d == "blue" } )
 console.log("Question 8: " + q8)

 /** - BONUS 2
  * Using the array of ["a","b","c","a","b"], create a new array which contains 
 * only unique values from the array provided. Store the new array in bonus2.
 * HINTS: 
 * - the .filter() method can be used to return comparisons that evaluate to true
 * - the .reduce() method can also be used to return true evaluations and also create a new array
 * - the .indexOf() method can be used to find the first matching value of an element in an array
 */

 // Your code here
 var bonus2 = ["a","b","c","a","b"].reduce(function(arr,c){
  if(arr.indexOf(c) < 0 ) { arr.push(c) }
  return arr},[]
  )
  console.log("Question 9: " + q9)


 /** - BONUS 3
  * Using the array of [1,2,3,1,2], determine if any one value is the sum of the values
  * before and after it's index position. Store the index of the value in bonus3.   
  * HINTS: 
  * - the .slice() method can be used to disect an array
  * - the .reduce() method can be used to sum all the values in an array
 */
 var arr = [1,2,3,1,2]
 var mid = 1
 var left,right
 arr.forEach(function(d,i){
  if(mid != arr.length-1){
    left = arr.slice(0,mid).reduce(function(a,b){return a+b });
    right = arr.slice(mid+=1).reduce(function(a,b){return a+b })
    if( left == right ) { console.log("we have a winner at index position:", mid) }
  }
 })


