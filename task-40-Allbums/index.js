"use strict";
//DEfine the make album_function
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//calling three functions and creating 3 variable with difference values
let album1 = make_album("Areeba", "Album title 1");
let album2 = make_album("Rahat fateh Ali khan", "Afreen Afreen");
//calling a make_album function with third parametter
let album3 = make_album("Atif Aslam", "Album title3", 10);
//Print value of our object created my function
console.log(album1);
console.log(album2);
console.log(album3);
