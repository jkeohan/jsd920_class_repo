/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. Use the html and css code included in the starter code folder to get started.

1) Write down pseudocode for the following program.

2) Follow the steps below to write your code.
* The following should be contained inside a function, rollDice
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the class for the first die element, and store to a variable firstDie (hint: recall string concatenation)
* combine 'dice-' and random1 to form the class for the second die element, and store to a variable secondDie (hint: recall string concatenation)
* apply firstDie and secondDie to their respective HTML elements using the .className attribute (hint: use document.getElementById)
* get the first die by ID and update the class to firstDie (hint: document.getElementById)
* get the first die by ID and update the class to secondDie (hint: document.getElementById)

3) Attach an onclick event handler to the the element 'roll-dice' - when this button is clicked, it should trigger the above rollDice function

*/

document.getElementById('roll-dice').onclick = roleDice;
function roleDice() {
  
  var random1;  // defined theis variable
  var random2/ // defined theis variable

  // HINTS: these variables will need to use string concatenation 
  var firstDie; // defined theis variable
  var secondDie; // defined theis variable

  document.getElementById("first-die").className = firstDie;
  document.getElementById("second-die").className = secondDie;
}

