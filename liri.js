require("dotenv").config();
var Spotify = require('node-spotify-api');
const axios = require('axios');
const fs = require("fs");
// var bandsintown = require('bandsintown')(codingbootcamp);
var keys = require("./keys");
var spotify = new Spotify(keys.spotify);

let varOne = process.argv[2];
let varTwo = process.argv.slice(3).join(" ");
songTime();
doIt();
function songTime() {

    if (varOne === "spotify-this-song") {
        spotify.search({ type: 'track', query: varTwo }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            let artistSong = data.tracks.items[0].album.artists[0].name;
            let album = data.tracks.items[0].album.name;
            let song = data.tracks.items[0].name;
            let songLink = data.tracks.items[0].external_urls.spotify;

            console.log("Artist: " + artistSong + "\nSong: " + song + "\nLink: " + songLink + "\nAlbum" + album + "\nEnjoy your music!")

        });
    }
};

if (varOne === "movie-this") {

    axios.get("http://www.omdbapi.com/?t=" + varTwo + "&y=&plot=short&apikey=8fba184d").then(
        function (response) {
            console.log("Title: " + response.data.Title + "\nYear: " + response.data.Year + "\nIMBD Rating: " + response.data.imdbRating + "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value + "\nCountry: " + response.data.Country + "\nLanguage: " + response.data.Language + "\nPlot: " + response.data.Plot + "\nActors: " + response.data.Actors + "\nEnjoy Your Movie");
        }
    );
}

if (varOne === "concert-this") {

    axios.get("https://rest.bandsintown.com/artists/" + varTwo + "/events?app_id=codingbootcamp").then(function (EventData) {
        let eventData = EventData.data[0];
        let bitData = [
            "Venue name: " + eventData.venue.name,
            "Event date: " + eventData.datetime,
            "Event City: " + eventData.venue.city,
        ].join("\n\n");
        console.log(bitData);
        // console.log(eventData.venue.name);
        // console.log(eventData.datetime);
        // console.log(eventData.venue.city);
        // console.log(eventData);
    })
}
function doIt() {

    if (varOne === "do-what-i-say") {

        readThat();
        
        songTime();


    }
};

function readThat() {
    fs.readFile("random.txt", "utf8", function (data, error) {
        if (error) {
            return console.log(error);
        }
        console.log(data);

        varTwo = data;


    })
}