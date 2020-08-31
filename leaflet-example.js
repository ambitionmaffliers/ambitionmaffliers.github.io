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

// Open data Établissements scolaires CC Carnelle Pays de France
		L.circle([49.1099016273,2.42469053839], {radius: 200}).addTo(map);
		L.circle([49.1264141641,2.36877067593], {radius: 200}).addTo(map);
		L.circle([49.0682859288,2.42630017483], {radius: 200}).addTo(map);
		L.circle([49.1472919469,2.40123049253], {radius: 200}).addTo(map);
		L.circle([49.0893154448,2.36717004973], {radius: 200}).addTo(map);
		L.circle([49.1238540934,2.43165938136], {radius: 200}).addTo(map);
		L.circle([49.1205728127,2.39381999648], {radius: 200}).addTo(map);
		L.circle([49.1001045977,2.44925941156], {radius: 200}).addTo(map);
		L.circle([49.1251363392,2.36549004328], {radius: 200}).addTo(map);
		L.circle([49.0713062252,2.31993995818], {radius: 200}).addTo(map);
		L.circle([49.0653104824,2.30004646649], {radius: 200}).addTo(map);
		L.circle([49.1214298847,2.43066951199], {radius: 200}).addTo(map);
		L.circle([49.0762171373,2.35678949022], {radius: 200}).addTo(map);
		L.circle([49.0772453209,2.31063956956], {radius: 200}).addTo(map);
		L.circle([49.1145538271,2.42508953489], {radius: 200}).addTo(map);
		L.circle([49.1095246265,2.35014051806], {radius: 200}).addTo(map);
		L.circle([49.1336952075,2.35537030734], {radius: 200}).addTo(map);
		L.circle([49.089291316,2.36753998597], {radius: 200}).addTo(map);
		L.circle([49.1265657934,2.36733988936], {radius: 200}).addTo(map);
		L.circle([49.0719479554,2.30963972166], {radius: 200}).addTo(map);
		L.circle([49.1043088413,2.34206044951], {radius: 200}).addTo(map);
		L.circle([49.1237508881,2.43189066404], {radius: 200}).addTo(map);
		L.circle([49.1250341992,2.3662406774], {radius: 200}).addTo(map);
		L.circle([49.0681496473,2.32431945522], {radius: 200}).addTo(map);
		L.circle([49.1086466034,2.42341024434], {radius: 200}).addTo(map);
		L.circle([49.0677904721,2.32265047862], {radius: 200}).addTo(map);
		L.circle([49.1081236312,2.42498006837], {radius: 200}).addTo(map);
// Collèges et lycées Domont
		L.circle([49.0342597304,2.33961947374], {radius: 200}).addTo(map);
		L.circle([49.0303598814,2.34092990473], {radius: 200}).addTo(map);
		L.circle([49.0130937801,2.31802003947], {radius: 200}).addTo(map);
