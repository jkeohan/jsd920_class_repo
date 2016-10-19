// INSTRUCTOR CODE ALONG
// 1. Enter an item into #new-item
// 2. Submit the form #item-form (remember to prevent the form's default behavior!)
// 3. New item is appended as a <li> element to the #list
// 4. After item is added, the text inside #new-item should clear
// 5. Focus on #new-item after the item is added
// 6. If the value of #item is blank, do not append the <li> and alert user

// STUDENT LAB
// 7. Add an "archive - " string before each list item that will remove the li when clicked. 
// 9. All newly added li's should also have archive added and be deleted when clicked
// 8. Add mouse events needed to replicate :hover css 


// similar to window.onload
$(document).ready(function () {
    //grab to ul 
	  var list = $('#list')
    //grab the input field
    var input = $('#new-item')
    //add 'archive' to existing li's
    prepend($('li'))
    //add click event to button
    $('#clickme').click(function(event){
      //prevents default behaviour of form
      event.preventDefault() 
      //confirm there is something in the input when submitted
      if(input.val() == "") {alert("type something")}
      else { 
        //create a new li with the input value
        var item = $('<li>').html(input.val()) 
        //prepend 'archive' to the new li
        prepend(item)
        //append the li to the ul
        list.append(item)
        //reset the focus of the input..this puts a blue border around input
        input.val("").focus()
      }//else
    })//click event
})//ready event


//add event listener on ul so it's aware of newly added children
$("ul").on('click',".archive",function(){
  $(this).parent().remove() //$(this) will be the span and .parent() the li
})
//prepend function will add 'archive' to li
function prepend(lis){
  var archive = $("<span>").html("archive - ").addClass("archive")
  $(lis).prepend(archive)
}

























// Users should be able to:
// 1. Enter an item into #new-item
// 2. Submit the form #item-form (remember to prevent the form's default behavior!)
// 3. New item is appended as a <li> element to the #list
// 4. After item is added, the text inside #new-item should clear


// Bonus: Focus on #new-item after the item is added
// Itermediate Bonus: If the value of #item is blank, do not append the <li> and alert user
// Legendary Bonus: Remove individual <li> elements when they are clicked





