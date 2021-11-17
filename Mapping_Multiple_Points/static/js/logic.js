// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level
let map = L.map("mapid").setView([34.0522, -118.2437], 14);

// We create the tile layer that will be the background of our map.  Change to /v1/{id}/ for daytime view, /mapbox/dark-v10 for night.
// day:   'mapbox/streets-v11'  night: 'mapbox/dark-v10/tiles'
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
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
