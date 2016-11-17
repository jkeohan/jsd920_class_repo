$(document).ready(function() {

	// Store a reference to our Firebase DB
	var messageAppReference = firebase.database();

	// CREATE
  	$('#message-form').submit(function(event) {
  		// by default a form submit reloads the DOM which will subsequently reload all our JS
  		// to avoid this we preventDefault()
  		event.preventDefault()

  		// grab user message input
  		var message = $('#message').val()

  		// clear message input (for UX purposes)
  		$('#message').val('')

  		// create a "messages" object in your db
  		var messagesReference = messageAppReference.ref('messages');

  		// use the push method to save data to the messages object reference created above
  		messagesReference.push({
  		  message: message,
  		  votes: 0
  		})
	})

	// READ
	function getFanMessages() {
		// listens for any changes (any CRUD actions) to the messages reference (object) in our DB
		messageAppReference.ref('messages').on('value', function (results) {
	        // remove existing <li>'s from DOM; avoid duplicates - there are MUCH cleaner methods to handle this, FYI :)
        	$('.message-board').empty();

    		// use .forEach to iterate over the Firebase response
    		// note: results is NOT an array, Array.isArray(results) === false
			results.forEach(function (msg) {
        console.log("this is the actual message: ", msg)
				// store the Firebase objects unique ID (will be used for updating and deleting)
				var id = msg.key
        console.log(id)
				// use .val() to obtain the actual JS obj from the Firebase obj
				// note: .val(), used in this context, is NOT the same as jQuery.val()
				var message = msg.val();
        console.log("this is message: ",message)

				// pull and store our object's message and votes
				var messageText = message.message;
				var votes = message.votes;

				// create a <li> element using jQuery
				var $li = $('<li>');

	        	// create up vote element
        		var $upVoteElement = $('<i class="fa fa-thumbs-up pull-right"></i>');

        		$upVoteElement.on('click', function () {
          			updateMessage(id, votes++);
    			})

        		// create down vote element
        		var $downVoteElement = $('<i class="fa fa-thumbs-down pull-right"></i>');

				$downVoteElement.on('click', function () {
          			updateMessage(id, votes--);
        		})

		        // create delete element
        		var $deleteElement = $('<i class="fa fa-trash pull-right"></i>');

        		$deleteElement.on('click', function () {
          			deleteMessage(id);
        		})

				// add the message text to the <li>
				$li.html(messageText);

		        // add voting elements to $li
        		$li.append($upVoteElement);
        		$li.append($downVoteElement);

        		// add delete element to $li
        		$li.append($deleteElement);

		        // render the vote count
        		$li.append('<div class="pull-right">' + votes + '</div>');

        		// finally, we can append our newly created <li> to the <ul class="message-board">
				$('.message-board').append($li);
			})
		})
	}

	// UPDATE
	function updateMessage (id, votes) {
		// find message whose objectId is equal to the id we're searching with
		var messageReference = messageAppReference.ref('messages/' + id);

		// update votes property
		messageReference.update({
			votes: votes
		})
	}

	// DELETE
	function deleteMessage (id) {
	  	// find message whose objectId is equal to the id we're searching with
		var messageReference = messageAppReference.ref('messages/' + id);

  		messageReference.remove();
	}

	// Fetch messages and load into DOM once document is ready
	getFanMessages();
})



