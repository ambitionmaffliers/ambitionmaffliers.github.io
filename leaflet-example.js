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

/** MAPBOX TILES
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 19,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWljaGFlbGJpZGVhdWx0IiwiYSI6ImNrZWZmeTcwazB1YTcyeWtmaGNnNXIxcnkifQ.WkqdFVGKfazOc3zjgSzVOw'
}).addTo(map);
*/

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

L.circle([49.066116590638835, 2.3222833871841435], {radius: 200}).addTo(map);

L.marker([49.066116590638835, 2.3222833871841435]).addTo(map)
		.bindPopup('Gare de Montsoult-Maffliers')
