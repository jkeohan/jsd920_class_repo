/////////////////////////////////////////////////////////////////////////
// Question #1                                //
////////////////////////////////////////////////////////////////////////

// Create a function called "removeDuplicates" that takes in one parameter which is a string.
// The function will remove duplicates and return a new array with only
// unique values. 

// REQUIREMENTS:
// The function must use a FOR LOOP and an IF statement to solve the problem
// You are NOT allowed to use indexOf to solve this problem

// TEST CASES:
// removeDuplicates([1,1,2,2,3,3]) would return [1,2,3]
// removeDuplicates([1,3,2,2,3,1]) would return [1,3,2]
// removeDuplicates(["a","b","c","a","b"]) would return ["a","b","c"]
// removeDuplicates(["c","a","c","a","b"]) would return ["a","b","c"]

// Things to keep in mind:
// 1. The for loop initialization values should be set to 0 as the first 
// element in an array is at postion 0
// 2. The RETURN keyword should be used to return the newly created\populated array

function removeDuplicates(array) {
  var sorted = array.sort();
  var unique = [];
  for(i = 0; i < array.length; i++){
    if(sorted[i] != sorted[i+1]) { unique.push(array[i]) }
  }
  return unique;
}

console.log("removeDuplicates returns: ", removeDuplicates([1,1,2,2,2,3,3]))
console.log("removeDuplicates returns: ", removeDuplicates([1,3,2,2,3,1]))
console.log("removeDuplicates returns: ", removeDuplicates(["a","b","c","a","b"]))
console.log("removeDuplicates returns: ", removeDuplicates(["c","a","c","a","b"]))

/////////////////////////////////////////////////////////////////////////
// Question #2                                //
////////////////////////////////////////////////////////////////////////

// Question #2:
// Create a function called "shuffle" that takes in an string of letters.
// The function will shuffles those letters in a random order and returns the 
// the string in it's shuffled condition

// REQUIREMENTS:
// The function must use a FOR LOOP to solve the problem

// HINTS: 
// Here is a logical way to approach this problem:
// 1. Covert the string into an array to easily shuffle letters
// 2. Generate a random number based on the length of the array. We can then use this to pull
//    out a random letter using array[random]
// 3. Store the last value of the array in a variable.  This can be done using array[array.length]
// 4. Reset the last value in the array to the randomly choosen letter
// 5. Reset the ranomly choosen letter to the currently defined last one in array. Keep in mind that we need to exclude the last element from being randomly choosen once it's been set

var letters = "abcdefg"

function shuffle(string) {
  var array = string.split("")
  var m = array.length;
  var last, random
  for(i = array.length-1 ; i > 0; i--) {
    random = Math.floor(Math.random() * i)
    last = array[i]
    array[i] = array[random]
    array[random] = last
  }
  return array.join("")
}

console.log("shuffle returns: ", shuffle(letters))


/////////////////////////////////////////////////////////////////////////
// BONUS #1                                   //
////////////////////////////////////////////////////////////////////////

// Refactor question #1 using a while loop instead of a for loop
function removeDuplicates(array) {
  var sorted = array.sort();
  var unique = [];
  var i = 0
  while(i < array.length) {
    if(sorted[i] != sorted[i+1]) { unique.push(array[i]) }
    i++
  }
  return unique;
}

console.log("removeDuplicates while loop returns: ", removeDuplicates([1,1,2,2,2,3,3]))
console.log("removeDuplicates while loop returns: ", removeDuplicates([1,3,2,2,3,1]))
console.log("removeDuplicates while loop returns: ", removeDuplicates(["a","b","c","a","b"]))
console.log("removeDuplicates while loop returns: ", removeDuplicates(["c","a","c","a","b"]))

/////////////////////////////////////////////////////////////////////////
// BONUS #2                                   //
////////////////////////////////////////////////////////////////////////

// Refactor question #2 using a while loop instead of a for loop
function shuffle(string) {
  var array = string.split("")
  var m = array.length;
  var last, random
  while(m > 0) {
    random = Math.floor(Math.random() * m--)
    last = array[m]
    array[m] = array[random]
    array[random] = last
  }
  return array.join("")
}

console.log("shuffle while loop returns: ", shuffle(letters))
