'use strict';

console.log('Connected?');

//Global variables
let favSong;
let favArtist;
let favGenre;
// let favDOB;
// let favGenre;
// let dob;

//Elements
let favouriteSongElement   = document.getElementById('faveSong');
let favouriteArtistElement = document.getElementById('faveArtist');
let favouriteGenreElement  = document.getElementById('faveGenre');
// let favDOBElement          = document.getElementById('faveDOB');




let jackFave;

class favourites{

    constructor(favSong, favArtist)
    {
        this.favSong    = favSong;
        this.favArtist  = favArtist;
        this.favGenre   = favGenre;
        // this.favDOB     = favDOB;
    }
   
}

//form submission function

function formSubmitted(event){

    event.preventDefault();

    favSong = event.target.favSong.value;
    favArtist = event.target.favArtist.value;
    favGenre = event.target.favGenre.value;
    // favDOB = event.target.favDOB.value;

// pass value to new instance jackFav

    jackFave = new favourites(favSong, favArtist);

    favouriteSongElement.innerHTML   = jackFave.favSong;
    favouriteArtistElement.innerHTML = jackFave.favArtist;
    favouriteGenreElement.innerHTML  = jackFave.favGenre;
    // favDOBElement.innerHTML          = jackFave.favDOB;

    //  console.log(jackFave.favSong);
    //  console.log(jackFave.favArtist);
     document.getElementById('faveSong').innerHTML    = "Your favourite song is: "   + jackFave.favSong;
     document.getElementById('faveArtist').innerHTML  = "Your favourite Artist is: " + jackFave.favArtist;
     document.getElementById('faveGenre').innerHTML   = "Your favourite Genre is: "  + jackFave.favGenre;
    //  
    document.getElementById("myForm").reset();
}



  