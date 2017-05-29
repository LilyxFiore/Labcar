function initMap() {
  var map = new google.maps.Map(document.getElementById('mapa'), {
     center: {lat: -12.1199718, lng: -77.035641},
     zoom: 3
   });

   var marker = new google.maps.Marker({
     animation: google.maps.Animation.BOUNCE,
     map: map});

   // Try HTML5 geolocation.
   if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(function(position) {
      var pos  = {
         lat: position.coords.latitude,
         lng: position.coords.longitude
       };

       marker.setPosition(pos);
       map.setZoom(18);
       map.setCenter(pos);

     }, function() {
       handleLocationError(true, infoWindow, map.getCenter());
     });
   } else {
     // Browser doesn't support Geolocation
     handleLocationError(false, infoWindow, map.getCenter());
   }

}
