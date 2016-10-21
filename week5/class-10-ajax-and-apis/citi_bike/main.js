/*

In the index.html file there is a "Get Citi Bike Data" button.
When the user clicks the button, pull data from the provided resource: https://feeds.citibikenyc.com/stations/stations.json
Handle the link success and error responses accordingly, displaying results in
console.log() if successful.

*/

window.onload = function () {
  var button = $('#getDataButton').click(function(){
    makeRequest()
  })
  var url = 'https://gbfs.citibikenyc.com/gbfs/en/station_information.json';
  function makeRequest(){
    $.get(url)
      .done(function(res){ console.log(res)})
      .fail(function(xhr){ console.log("error has ocurred: ", xhr)})
  }

  $.ajax({
    url:url,
    type:'GET',
    dataType:'PDF',
    success: function(res) { console.log(res)},
    error: function(xhr) { console.log(xhr)}
  })
};
