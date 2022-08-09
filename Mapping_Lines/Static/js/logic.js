// Add console.log to check to see if our code is working

console.log("working");

// Create the map object with a center and zoom level

let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Add a marker to the map for Los Angeles, California
//var marker = L.marker([34.0522, -118.2437]).addTo(map);

// Change the marker to a point or dot use the circle() or circleMarker() function
// var marker = L.circleMarker([34.0522, -118.2437], {

//     color: 'black',

//     fillColor: 'yellow',

//     fillOpacity: 0.3,

//     radius: 300

// }).addTo(map);

// Get the data from cities.js

let cityData = cities;

// Loop through the cities array and create one marker for each city

// cityData.forEach(city => {

//   console.log(city) 
  
//   // add a circle marker with a radius of the city population
//   L.circleMarker(city.location, {

//     color: 'orange',

//     weight: 4,

//     radius: (city.population - 200000)/100000
//   })
  
//   // add a popup for each city
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")


//   .addTo(map)

// });

// Coordinates for each point to be used in the line

let line = [

  [37.6213, -122.3790],//SFO
  [30.1975, -97.6664],//AUS
  [40.6413, -73.7781],//JFK
  [43.6777, -79.6248]// YYS
];

// Create a plyline using the line coordinates and make the line red

L.polyline(line, {

  color: 'blue',

  dashArray: '10, 10',

  weight: 4,

  opacity: 0.5

}).addTo(map);

// We create the tile layer that will be the background of our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',

    MaxZoom: 18,

    tileSize: 512,

    zoomOffset: -1,

    accessToken: API_KEY

});

// Then we add our 'graymap' tile layer to the map

streets.addTo(map);