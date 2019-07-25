require("dotenv").config();
var Spotify = require('node-spotify-api');
const axios = require('axios');

var keys = require("./keys");
var spotify = new Spotify(keys.spotify);

let varOne = process.argv[2];
let varTwo = process.argv[3];

if (varOne === "spotify-this-song") {
    spotify.search({ type: 'track', query: varTwo }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        let artist = data.tracks.items[0].album.artists[0].name;
        let album = data.tracks.items[0].album.name;
        let song = data.tracks.items[0].name;
        let songLink = data.tracks.items[0].external_urls;

        console.log(artist);
        console.log(album);
        console.log(song);
        console.log(songLink);

        
    });
}

if (varOne === "movie-this") {

    axios.get("http://www.omdbapi.com/?t=" + varTwo + "&y=&plot=short&apikey=8fba184d").then(
        function (response) {
            console.log("Title: " + response.data.Title + "\nYear: " + response.data.Year + "\nIMBD Rating: " + response.data.imdbRating + "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value + "\nCountry: " + response.data.Country + "\nLanguage: " + response.data.Language + "\nPlot: " + response.data.Plot + "\nActors: " + response.data.Actors + "\nEnjoy Your Movie");
        }
    );
}