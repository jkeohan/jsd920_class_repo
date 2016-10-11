// You will work in the assigned groups to solve this problem

var students = ["alex","francis","cate","james","brian","analee","roberto","malcom","sara","sylvia","nick","eric","joe"];
var perGroup = 3;

// REQUIREMENTS:
// 1. Add the appropriate code to the buildGroups function that will take in the 
// students array and perGroup variable above creatig separate groups and
// randomly adding the number of users as defined by the perGroup variable.
// 2. If there are not enough users to build a full group based on the perGroup 
// value then the last group will be contain the remaining students
// 3. The students array must not be altered in any way so make sure to create
// a duplicate copy


// TEST CASES:
//  buildGroups(2,students)
// [ [ 'nick', 'cate' ],[ 'roberto', 'sylvia' ],[ 'eric', 'malcom' ],
// [ 'alex', 'brian' ],[ 'sara', 'francis' ],[ 'james', 'analee' ] ]

// buildGroups(3,students)
//  [ [ 'francis', 'cate', 'nick' ], [ 'malcom', 'eric', 'analee' ],
//  [ 'roberto', 'sylvia', 'sara' ], [ 'brian', 'alex', 'james' ] ]

//console.log("buildGroups(3, students returns: \n", buildGroups(2,students))
//console.log("buildGroups(3, students returns: \n", buildGroups(3,students))

  
console.log("buildGroups returns: \n", buildGroups(perGroup,students));

function buildGroups(perGroup,groupsArr) {

}

console.log("students array contains: \n", students)

