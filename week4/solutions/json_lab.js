'use strict';

// JSON is a subset of the object literal notation of JavaScript; we use JSON to transfer data between programs.
// ----  RULES ----
// Property names must be double-quoted strings; trailing commas are forbidden.
// Leading zeroes are prohibited; a decimal point must be followed by at least one digit.
// Most characters are allowed in strings, except certain control characters.
// Strings must be double quoted.
// No comments!
//
// More on JSON here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON

// [ Step 1 ]

// Although the following line isn't technically JSON (since it's actual JavaScript code)
// the object that's being saved inside `notActuallyJSON` is written in valid JSON syntax.
var notActuallyJSON = {
  "someKey": "someValue",
  "innerArray": [
    "alpha",
    "beta",
    "gamma",
    "delta"
  ]
};

// Use JSONLint to determine if something is valid JSON.
// Copy the entire object above ({...}, but NOT 'var notActuallyJSON =' or the trailing semicolon)--just copy everything between the brackets, including the brackets themselves.
// Then go to http://jsonlint.com/ and paste it into the validator. Does it pass the test of being valid JSON?

// YES!! It passes the test of being valid JSON
// ------------------------------------------------------

// [ Step 2 ]

// The following line is valid JavaScript, but the object is not written in valid JSON syntax.
// Use JSONLint to validate the object in the following line; then, edit the object so it passes the validator.
// There are a total of three errors.
//
var eddie = {name:"Eddie Vedder", age:49,};
// Below you will find valid JSON
// ------------------------------------------------------ 
// {
//     "name": "Eddie Vedder",
//     "age": 49
// }
// ------------------------------------------------------

// [ Step 3 ]
// We frequently want to turn a JavaScript object into a JSON string, and vice versa.
// JavaScript has a built-in global object called `JSON` that contains a number of useful methods for manipulating JSON.
// To turn a JS Object into JSON, use the .stringify method  ( JSON.stringify(someObject) )
//      (See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
//
//
// Turn the `grungeAlbums` JavaScript object into a JSON string, and store it in `grungeAlbumsJSON`.

var grungeAlbums = {
  "albums":[
    {
        "name": "Bleach",
        "artist": "Nirvana",
        "unitsSold": 1700000
    },
    {
        "name": "Nevermind",
        "artist": "Nirvana",
        "unitsSold": 30000000
    },
    {
        "name": "In Utero",
        "artist": "Nirvana",
        "unitsSold": 15000000
    },
    {
        "name": "Ten",
        "artist": "Pearl Jam",
        "unitsSold": 10000000
    },
    {
        "name": "Vs",
        "artist": "Pearl Jam",
        "unitsSold": 6100000
    },
    {
        "name": "Vitalogy",
        "artist": "Pearl Jam",
        "unitsSold": 4770000
    }
  ]
};

var grungeAlbumsJSON = JSON.stringify(grungeAlbums);

// [ Step 4 ]
// Imagine that we only had JSON to work with, and wanted to convert it to a JS Object.
// Fortunately, the `JSON` global object converts both ways - to and from JSON.
// To turn a JSON string into a JS Object, use the .parse method  ( JSON.parse('some string') )
//      (See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

// Take `grungeAlbumsJSON` and convert it back into a JavaScript object using JSON.parse(). Store this value in a variable, grungeAlbumsParsed.
// Then, for each album in grungeAlbumsParsed, do a console log printing out the album name, artist, and units sold.
// Each album should be formatted as follows:

//  Album: Album name
//  Artist: Artist name
//  Units sold: 31234

var grungeAlbumsJSON = JSON.stringify(grungeAlbums);
// console.log(grungeAlbumsJSON);
var grungeAlbumsParsed = JSON.parse(grungeAlbumsJSON);
var justAlbums = grungeAlbumsParsed.albums;
console.log(justAlbums.length);
console.log();
// console.log(grungeAlbumsParsed.albums[0].name);

for (var i = 0; i < justAlbums.length; i++){
    console.log("Album: " + justAlbums[i].name);
    console.log("Artist: " + justAlbums[i].artist);
    console.log("Units Sold: " + justAlbums[i].unitsSold);
    console.log();
};


// [ Step 5 ]
// Create a custom JSON using the JSON validator from Step 1.
// Convert it back to a JavaScript object, change it, and then convert it back to JSON again. Compare it to your original - how has it changed?
// Use variables to store each state (as JSON / as a JavaScript Object)

var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};

// Below is valid JSON
// ----------------------------
// {
//     "firstName": "John",
//     "lastName": "Doe",
//     "age": 50,
//     "eyeColor": "blue"
// }
console.log("This is the person object:");
console.log(person);
var personToJSON = JSON.stringify(person);
console.log();
console.log("After using JSON.stringify, the person object is now converted to a JSON file.");
console.log(personToJSON);
console.log();
console.log("After using JSON.parse, the JSON file is converted back to an object");
var personJSON2Object = JSON.parse(personToJSON);
console.log(personJSON2Object);





























