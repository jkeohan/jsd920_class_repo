// Users should be able to:
// 1. Enter an item into #new-item
// 2. Submit the form #item-form (remember to prevent the form's default behavior!)
// 3. New item is appended as a <li> element to the #list
// 4. After item is added, the text inside #new-item should clear


// Bonus: Focus on #new-item after the item is added
// Itermediate Bonus: If the value of #item is blank, do not append the <li> and alert user
// Legendary Bonus: Remove individual <li> elements when they are clicked

// similar to window.onload
$(document).ready(function () {
	// APPEND INITIAL ITEMS TEMPLATE
	var initalItems = {
		items: ['Data types', 'Arrays', 'Objects', 'Functions'],
	}
	var initItemsSource = $('#initial-items-template').html();
	var compiledInitItems = Handlebars.compile(initItemsSource);
	var initTemplate = compiledInitItems(initalItems);

	$('#list').append(initTemplate)

	// APPEND NEW ITEMS
	$('#item-form').submit(function (e) {
		e.preventDefault();

		// get new item
		var newItemObject = {
			item: $('#new-item').val()
		};

		// check if user has entered a value
		if (!newItemObject.item) return alert('Hey! Enter an item!');

		// create HTML string to append to list
		var newItemSource = $('#new-list-item-template').html();
		var compiledNewItem = Handlebars.compile(newItemSource);
		var newItemTemplate = compiledNewItem(newItemObject);

		// append newListItem to <ul id="list">
		$('#list').append(newItemTemplate);

		// empty #new-item input
		$('#new-item').val('');

		// focus on input so user doesn't have to
		$('#new-item').focus();
	})

	// remove exisitng <li> elements on click
	$(document).on('click', 'li', function () {
		// $(this) refers to the specific <li> element the user clicked on
		$(this).remove();
	})
})


