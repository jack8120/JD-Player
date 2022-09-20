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
let current_time = document.getElementsByClassName("current-time");
let total_duration = document.getElementsByClassName("total-duration");

// Globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;
 
// Create the audio element for the player
let current_track = document.createElement('audio');

// Define the list of tracks that have to be played
let track_list = [

    {
        name: "1st track test",
        artist: "JD player",
        image: "JDmp.jpeg",
        path: "sample1.mp3"
    },
]

function loadTrack(track_index) {
    clearInterval(updateTimer);
    resetValues();

    current_track.src = track_list[track_index].path;
    current_track.load();
}

// Button Functionality
function playpauseTrack() {
    
    if (!isPlaying) playTrack();
    else pauseTrack();
  }
   
  // Play the loaded track
  function playTrack() {
    current_track.play();
    isPlaying = true;
   
    // Replace icon with the pause icon
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
  }
   
  function pauseTrack() {
    // Pause the loaded track
    current_track.pause();
    isPlaying = false;
   
    // Replace icon with the play icon
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
  }
   
    // Go back to the first track if the
    // current one is the last in the track list
  function nextTrack() {
    if (track_index < track_list.length - 1)
      track_index += 1;
    else track_index = 0;
   
    // Load and play the new track
    loadTrack(track_index);
    playTrack();
  }
   
    // Go back to the last track if the
    // current one is the first in the track list
  function prevTrack() {
    if (track_index > 0)
      track_index -= 1;
    else track_index = track_list.length - 1;
     
    // Load and play the new track
    loadTrack(track_index);
    playTrack();

  }

  loadTrack(track_index);