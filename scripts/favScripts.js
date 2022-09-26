'use strict';

console.log('Connected?');




//Global variables

let favName;
let favSong;
let favArtist;
let favGenre;
let favDob;



//Elements
let favouriteNameElement   = document.getElementById('faveName');
let favouriteSongElement   = document.getElementById('faveSong');
let favouriteArtistElement = document.getElementById('faveArtist');
let favouriteGenreElement  = document.getElementById('faveGenre');
let favouriteDobElement    = document.getElementById('faveDOB');




let jackFave;

class favourites{

    constructor(favName, favSong, favArtist, favGenre, favDob)
    {
        this.favName    = favName;
        this.favSong    = favSong;
        this.favArtist  = favArtist;
        this.favGenre   = favGenre;
        this.favDob     = favDob;
    }
   
}

//form submission function

function formSubmitted(event){

    event.preventDefault();

    favName   = event.target.favName.value;
    favSong   = event.target.favSong.value;
    favArtist = event.target.favArtist.value;
    favGenre  = event.target.favGenre.value;
    favDob    = event.target.favDob.value;
    // favDOB = event.target.favDOB.value;

// pass value to new instance jackFav

    jackFave = new favourites(favName, favSong, favArtist, favGenre, favDob);

    favouriteNameElement.innerHTML   = jackFave.favName;
    favouriteSongElement.innerHTML   = jackFave.favSong;
    favouriteArtistElement.innerHTML = jackFave.favArtist;
    favouriteGenreElement.innerHTML  = jackFave.favGenre;
    favouriteDobElement.innerHTML    = jackFave.favDob;

    function reverseString(str) {
        var splitString = str.split("");
        var reverseArrray = splitString.reverse();
        var joinArray = reverseArrray.join("");
        return joinArray;
    }

    

    //  console.log(jackFave.favSong);
    //  console.log(jackFave.favArtist);
    document.getElementById('faveNames').innerHTML    = "Thankyou " + jackFave.favName + ". Your favourites are: ";
    document.getElementById('faveSongs').innerHTML    = "Your favourite song is: "   + jackFave.favSong;
    document.getElementById('faveArtists').innerHTML  = "Your favourite Artist is: " + jackFave.favArtist;
    document.getElementById('faveGenres').innerHTML   = "Your favourite Genre is: "  + jackFave.favGenre;
    document.getElementById('faveDOBs').innerHTML     = "Your date of birth is: "    + jackFave.favDob;
    //  
    // document.getElementById("myForm").reset();
}



  