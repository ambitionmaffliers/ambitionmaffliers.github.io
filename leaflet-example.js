/*
 the script mus be loaded after the map div is defined.
 otherwise this will not work (we would need a listener to
 wait for the DOM to be fully loaded).

 Just put the script tag below the map div.

 The source code below is the example from the leaflet start page.
 */

var map = L.map('map').setView([49.07732194995885, 2.310714630297644], 17.5);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.circle([49.07732194995885, 2.310714630297644], {radius: 200}).addTo(map);

L.marker([49.07732194995885, 2.310714630297644]).addTo(map)
		.bindPopup('Portail maternelle')

map.on('click', function(e){
  var coord = e.latlng;
  var lat = coord.lat;
  var lng = coord.lng;
  console.log("You clicked the map at latitude: " + lat + " and longitude: " + lng);
  });

L.circle([49.07679310408853, 2.3103958368301396], {radius: 200}).addTo(map);

L.marker([49.07679310408853, 2.3103958368301396]).addTo(map)
		.bindPopup('Portail garderie')

L.circle([49.07715152523085, 2.3111253976821904], {radius: 200}).addTo(map);

L.marker([49.07715152523085, 2.3111253976821904]).addTo(map)
		.bindPopup('Portail élementaire')
