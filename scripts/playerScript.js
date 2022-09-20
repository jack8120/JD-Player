'use strict'

// Select all the elements in the HTML page
// and assign them to a variable
let now_playing = document.getElementsByClassName("now-playing");
let track_art = document.getElementsByClassName("track-art");
let track_name = document.getElementsByClassName("track-name");
let track_artist = document.getElementsByClassName("track-artist");
 
let playpause_btn = document.getElementsByClassName("playpause-track");
let next_btn = document.getElementsByClassName("next-track");
let prev_btn = document.getElementsByClassName("prev-track");
 
let seek_slider = document.getElementsByClassName("seek_slider");
let volume_slider = document.getElementsByClassName("volume_slider");
let curr_time = document.getElementsByClassName("current-time");
let total_duration = document.getElementsByClassName("total-duration");

// Globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;
 
// Create the audio element for the player
let curr_track = document.createElement('audio');

// Define the list of tracks that have to be played
let track_list = [

    {
        name: "1st track test",
        artist: "JD player",
        image: "JDmp.jpeg",
        path: "sample1.mp3"
    },
]
