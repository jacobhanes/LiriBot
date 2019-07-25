require("dotenv").config();
var Spotify = require('node-spotify-api');
const axios = require('axios');

var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);

let varOne = process.argv[2];
let varTwo = process.argv[3];

// if (varOne === "spotify-this-song") {
//     spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//         if (err) {
//           return console.log('Error occurred: ' + err);
//         }
       
//       console.log(data); 
//       });
// }

if (varOne === "movie-this"){
    
    axios.get("http://www.omdbapi.com/?t="+ varTwo + "&y=&plot=short&apikey=8fba184d").then(
  function(response) {
    console.log("Title: " + response.data.Title + "\nYear: " + response.data.Year + "\nIMBD Rating: " + response.data.imdbRating + "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value + "\nCountry: " + response.data.Country + "\nLanguage: " + response.data.Language + "\nPlot: " + response.data.Plot + "\nActors: " + response.data.Actors + "\nEnjoy Your Movie");
  }
);
}