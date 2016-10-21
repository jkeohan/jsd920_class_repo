/*

In the index.html file there is a "Get Citi Bike Data" button.
When the user clicks the button, pull data from the provided resource: https://feeds.citibikenyc.com/stations/stations.json
Handle the link success and error responses accordingly, displaying results in
console.log() if successful.

// More info on the CitiBike API here: https://www.citibikenyc.com/system-data

*/

window.onload = function () {

	/////////////////////////
	// Vanilla JS Solution //
	/////////////////////////

	// listen for click event on #getDataButton
	document.querySelector('#getDataButton').onclick = makeRequest

	function makeRequest () {
		// define URL (endpoint)
		var url = 'https://gbfs.citibikenyc.com/gbfs/en/station_information.json';
		//var url = 'https://gbfs.citibikenyc.com/gbfs/en/station_information.json';
		// Create instance of XMLHTTPRequest
		var httpRequest = new XMLHttpRequest();

		// Set a custom function to handle the request
		httpRequest.onreadystatechange = responseMethod;

		// open GET request to the url above
		httpRequest.open('GET', url);

		// send the request
		httpRequest.send();

		function responseMethod() {
		    // Request logic
		    // Check if our state is "DONE"
		    if (httpRequest.readyState === XMLHttpRequest.DONE) {
		        // If our request was successful we get a return code/status of 200
		        if (httpRequest.status === 200) {
		            // Logic to perform after a successful request; access the API's data using the httpRequest object
		            console.log(httpRequest);

	            	console.log(JSON.parse(httpRequest.response))

		        } else {
		            // This is the scenario that there was an error with our request
		            console.log('There was a problem with the request.');
		        }
		    }
		}
	}

	//////////////////////////
	// jQuery AJAX Solution //
	//////////////////////////

	// 1) Using $.get()
	// function makeRequest () {
	// 	var url = 'https://gbfs.citibikenyc.com/gbfs/en/station_information.json';

	// 	$.get(url)
	// 		.done(function (response) {
	// 			console.log(response);
	// 		})
	// 		.fail(function (xhr) {
	// 			console.log('An error occurred:');
	// 			console.log(xhr);
	// 		})
	// }

	// 2) Using $.ajax()
	// function makeRequest () {
	// 	var url = 'https://gbfs.citibikenyc.com/gbfs/en/station_information.json';

	// 	$.ajax({
	// 		url: url,
	// 		type: 'GET',
	// 		success: function (response) {
	// 			console.log(response);
	// 		},
	// 		error: function (xhr) {
	// 			console.log('An error occurred:');
	// 			console.log(xhr);
	// 		}
	// 	})
	// }
};
