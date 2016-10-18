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
	  var list = $('#list')
    var input = $('#new-item')
    $('#clickme').click(function(event){
      event.preventDefault()
      if(input.val() == "") {alert("type something")}
      else { 
        var item = $('<li>').html(input.val()) 
        list.append(item)
        prepend(item)
        input.val("").focus()
      }//else
    })//click event
})//ready event



























// Users should be able to:
// 1. Enter an item into #new-item
// 2. Submit the form #item-form (remember to prevent the form's default behavior!)
// 3. New item is appended as a <li> element to the #list
// 4. After item is added, the text inside #new-item should clear


// Bonus: Focus on #new-item after the item is added
// Itermediate Bonus: If the value of #item is blank, do not append the <li> and alert user
// Legendary Bonus: Remove individual <li> elements when they are clicked





