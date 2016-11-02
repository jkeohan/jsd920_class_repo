$(function() {
  // DOM is now ready
  _500px.init({
    sdk_key: '689ad5c5fb54790f536b997c466b359e38e58805'
 });

  $('#login').click(function(){
    console.log("login clicked")
    _500px.login();
  })//login 
  _500px.on('authorization_obtained', function() {
    // Successful OAuth login!
    $('.sign-in-view').hide();
    $('.image-results-view').show();

    if (navigator.geolocation) {
    // if it is use the getCurrentPosition method to retrieve the Window's location
      navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var long = position.coords.longitude;

      console.log('lat: ', lat);
      console.log('long: ', long);

      var radius = '25mi'

      var searchOptions = {
        geo: lat + "," + long + "," + radius,
        only: 'Landscapes', 
        image_size: 3,
        rpp: 28,
        sort: 'highest_rating'
      }

      _500px.api('/photos/search',searchOptions, function(response){
        console.log(response)
        if(response.data.photos.length == 0) {
          alert('no photos found')
        }
        else { 
          //custom function
        }
      })

    })
    } else {
      $('.images').append('Sorry, the browser does not support geolocation');
    }
  });//500px.on
});
