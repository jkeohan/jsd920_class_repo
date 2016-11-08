/*

Virtual Farm

Goal: You'll be creating a virtual farm whose animals can be clicked on to get an alert displaying their name and what sound they make

Instructions:

1) Create a top-level "FarmAnimal" object that all the other farm animals will inherit from
2) FarmAnimal must have "name", "sound", and "image" instance props, and a "talk" instance method (talk should alert the animal's name and its sound)
3) Create at least three different animals for your farm (remember to inherit from "FarmAnimal" by changing the "prototype" of your animals)

  - Give each animal a name, a sound, and an image (use the web and copy an image path)

4) Once you build your animal constructors, create an instance of each animal and push that instance into the "farmAnimals" array

  ex:

  new rooter = new Rooster('Roger');
  farmAnimals.push(rooster);

5) Lastly, iterate over the "farmAnimals" array and append each of your animals to the DOM
  - You will have to create a new DOM element (a <div> is recommended)
  - This new <div> needs to have the CSS class "animal"
  - Assign this <div> random "bottom" and "left" attributes (this is so animals do not overlap each other in the DOM)

    Hint: use %-based values (bottom: 50%; left: 25%)

  - This <div>'s background should be the animal's image

    Hint: background-image: url('http://some-url-here.com')

  - Each <div> should have a click event that alerts the name of the animal and the sound that it makes
  - Append each new <div> to the body

    Hint: $('body').append(yourElement)
*/


$(document).ready(function () {

  // push all animal instances here
  var farmAnimals = [];

  // FarmAnimal Constructor - all animals inherit from this
  function FarmAnimal (name, image, sound) {
    this.name = name;
    this.image = image;
    this.sound = sound;
    this.talk = function () {
        alert(this.name + ' says: ' + this.sound + '!')
      }
  }

  // Animal Object Constructors
  function Rooster (name) {
    FarmAnimal.call(this, name, 'https://upload.wikimedia.org/wikipedia/commons/5/52/Brown_Leghorn_rooster_in_Australia.jpg', 'Cockadoodledoo')
    // this.name = name;
    // this.image = 'https://upload.wikimedia.org/wikipedia/commons/5/52/Brown_Leghorn_rooster_in_Australia.jpg';
    // this.sound = 'Cockadoodledoo';
  }

  function Cow (name) {
    this.name = name;
    this.image = 'http://cdxdemo.dprm-lab.com/wp-content/uploads/2015/07/dairy_cow.jpg';
    this.sound = 'Mooo';
  }

  function Dog (name) {
    this.name = name;
    this.image = 'https://pixabay.com/static/uploads/photo/2014/04/05/11/38/dog-316459_960_720.jpg';
    this.sound = 'Bark'
  }

  // Extend the animal objects with FarmAnimal
  Rooster.prototype = FarmAnimal();
  Cow.prototype = FarmAnimal();
  Dog.prototype = FarmAnimal();

  // Create the animal instances
  var rooster = new Rooster('Roger');
  var cow = new Cow('Charlie');
  var dog = new Dog('Danny');

  // Push each new animal instance into farmAnimals
  farmAnimals.push(rooster, cow, dog);

  // Iterate over the farmAnimals array and create a new <div> for each animal; append that animal the DOM
  farmAnimals.forEach(function (animal) {

    // create a new element with jQuery
    var $el = $('<div>');

    // generate random bottom and left values for CSS positioning
    var bottom = Math.floor(Math.random() * 50) + '%';
    var left = Math.floor(Math.random() * 90) + '%';

    $el
      .addClass('animal')
      .css('background-image', 'url(' + animal.image + ')')
      .css({
        bottom: bottom,
        left: left,
      })
      .click(function (el) {
        alert(animal.sound + ', my name is ' + animal.name);
      })

    $('body').append($el);
  });
})
