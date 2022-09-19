'use strict';

console.log('Connected?');

//Global variables
let favSong;
let favArtist;
// let favGenre;
// let dob;

//Elements
let favouriteSongElement = document.getElementById('favSong');
let favouriteArtistElement = document.getElementById('favArtist');

let jackFave;

class favourites{

    constructor(favSong, favArtist)
    {
        this.favSong    = favSong;
        this.favArtist  = favArtist;
    }
   
}

//form submission function

function formSubmitted(event){

    event.preventDefault();

    favSong = event.target.favSong.value;
    favArtist = event.target.favArtist.value;

// pass value to new instance jackFav

    jackFave = new favourites(favSong, favArtist);

    favouriteSongElement.innerHTML = jackFave.favSong;
    favouriteArtistElement.innerHTML = jackFave.favArtist;
     console.log(jackFave.favSong);
     console.log(jackFave.favArtist);
     document.getElementById('faveSong').innerHTML  = "Your favourite song is: " + jackFave.favSong;
     document.getElementById('faveArtist').innerHTML  = "Your favourite Artist is: " + jackFave.favArtist;
}

  