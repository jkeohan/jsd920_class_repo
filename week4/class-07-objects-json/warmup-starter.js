var students = ["alex","francis","cate","james","brian","analee","roberto","malcom","sara","sylvia","nick","eric","joe"];
var perGroup = 3;

// REQUIREMENTS:
// 1. Add the appropriate code to the buildGroups function that will take in the 
//    students array and perGroup variable above creatig separate groups and
//    randomly adding the number of users as defined by the perGroup variable.
// 2. If there are not enough users to build a full group based on the perGroup 
//    value then the last group will be contain the remaining students
// 3. The students array must not be altered in any way so make sure to create
//   a duplicate copy


// TEST CASES:
//  buildGroups(2,students)
// [ [ 'nick', 'cate' ],[ 'roberto', 'sylvia' ],[ 'eric', 'malcom' ],
// [ 'alex', 'brian' ],[ 'sara', 'francis' ],[ 'james', 'analee' ] ]

// buildGroups(3,students)
//  [ [ 'francis', 'cate', 'nick' ], [ 'malcom', 'eric', 'analee' ],
//  [ 'roberto', 'sylvia', 'sara' ], [ 'brian', 'alex', 'james' ] ]

//console.log("buildGroups(3, students returns: \n", buildGroups(2,students))
//console.log("buildGroups(3, students returns: \n", buildGroups(3,students))

// HINTS: 
// 1. In this case scenario it would be possible to use .forEach(), .map(), .filter() to create a duplicate array BUT you could also use a FOR and\or While loops to do the same thing.  
// 2. .splice() can be used to surgically remove one or more items from an array
// 3. Math methods are a great way to round up/down and keep in mind that every user needs to be assigned to a group even if the group contains one user only
  
console.log("buildGroups returns: \n", buildGroups(perGroup,students));

function buildGroups(perGroup,groupsArr) {

}

console.log("students array contains: \n", students)


// QUESTIONS: 
// 1. Can you think of any case scenarios where .filter() wouldn't be the best choice for creating duplicate arrays
// 2. Can you explain the difference between .splice() and .slice()? 
// 3. What is the differnce between Math.ceil(), Math.floor(), Math.round()
