// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Coordinates for each point to be used in the polyline.
let line = [
  [37.6213, -122.3790],   // SFO
  [43.6777, -79.6248],    // YYZ
  [32.8998, -97.0403],    // Dallax
  [30.1975, -97.6664],    // AUS
  [40.6413, -73.7781]    // JFK
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue",
  offset: "0",
  repeat: "20px"
}).addTo(map);

// We create the tile layer that will be the background of our map.  Change to /v1/{id}/ for daytime view, /mapbox/dark-v10 for night.
// day:   'mapbox/streets-v11'  night: 'mapbox/dark-v10/tiles'
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 7,
    id: 'mapbox/satellite-streets-v11',
    accessToken: API_KEY,
});

// Then we add our 'graymap' tile layer to the map.a
streets.addTo(map);

// Get data from cities.js
let cityData = cities;

// Loop through the cities and create one marker for each city.
cityData.forEach(function(city){
  console.log(city);
  L.circleMarker(city.location, {
    radius: (city.population-200000)/100000,
    fillColor: 'orange',
    color: 'orange',
    weight: 4
  })
    .bindPopup("<h2>" + city.city + ", " + city.state +"</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});

