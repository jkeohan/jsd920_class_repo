/* Independent Practice

Making a favorites list: jQuery


You'll add the ability to complete tasks in your favorite things list. Your program must complete the following rules:

- Using jQuery, add a "complete task" link at the end of each favorite thing (i.e. each "favorite thing").
- When clicked, the link will cross out the current item (hint: add a class to the list that sets the text-decoration to line-through).
- Each new item added by the user needs to also have the "complete task" link at the end.

*/

function addToList($list, thing) {
  var $thingLi = $('<li>').html(thing);//create a li item with text..html() works as well
  $list.append($thingLi); //append the item to the ul...is there another construct to add an li?
  addCompleteLinks($thingLi); //call function to add the additional span
}

function addCompleteLinks($lis) {
  var $completedLink = $('<span>').html(' complete task').addClass('complete-task');//create the span\text
  $lis.append($completedLink);//append to span to li

  $('.complete-task').on('click', function(event) {
    $(this).parent().addClass('completed');//add class to the parent li of a
  });
}

var $thingList = $('#fav-list');
var $button = $('#new-thing-button');
var $newThingInput = $('#new-thing');

var $thingListItems = $('#fav-list .fav-thing');//grab all li's
console.log($thingListItems)
addCompleteLinks($thingListItems); //add span to existing lis'

$button.on('click', function(event) {
  event.preventDefault();
  var newThing = $newThingInput.val();
  if (newThing === '') {
    alert('You must type in a value!');
  } else {
    addToList($thingList, newThing);
    $newThingInput.val('');
  }
});

