/*Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: produces a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/
var Monkey = function(name, species){
  this.name = name;//will provide name upon instantiation of new Monkey
  this.species = species;// will provide species upon instantiation of new Monkey
  this.foodsEaten = [];//create empty array so that you can push food into array
  this.eatSomething = function(food){
    this.foodsEaten.push(food); // this function will push food into foodsEaten array.  It will always point to the current instance of food eaten.
    
  };
};

var monkeyOne = new Monkey('harry', 'orangutan');
console.log(monkeyOne.name);
monkeyOne.eatSomething('leaves');
console.log(monkeyOne.foodsEaten);
monkeyOne.eatSomething('apple');
console.log(monkeyOne.foodsEaten);
console.log(monkeyOne);

var monkeyTwo = new Monkey('fred', 'baboon');
console.log(monkeyTwo);
monkeyTwo.eatSomething('ice cream');
console.log(monkeyTwo.foodsEaten);
console.log(monkeyTwo);

var monkeyThree = new Monkey('pete', 'mandrill');
console.log(monkeyThree);
monkeyThree.eatSomething('mouse');
console.log(monkeyThree.foodsEaten);
console.log(monkeyThree);
