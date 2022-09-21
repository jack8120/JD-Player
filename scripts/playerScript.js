'use strict'

// Select all the elements in the HTML page
// and assign them to a variable
let now_playing = document.getElementsByClassName("now-playing");
let track_art = document.getElementsByClassName("track-art");
let track_name = document.getElementsByClassName("track-name");
let track_artist = document.getElementsByClassName("track-artist");
 
let playpause_btn = document.getElementsByClassName("playpause-track")[0];
let next_btn = document.getElementsByClassName("next-track");
let prev_btn = document.getElementsByClassName("prev-track");
 
let seek_slider = document.getElementsByClassName("seek_slider");
let volume_slider = document.getElementsByClassName("volume_slider");
let current_time = document.getElementsByClassName("current-time");
let total_duration = document.getElementsByClassName("total-duration");

// Show track
let showTrack = document.getElementById('showTrack');

// Globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;
 
// Create the audio element for the player
let current_track = document.createElement('AUDIO');
let insideElement = document.createElement('source');

current_track.appendChild(insideElement);

// Define the list of tracks that have to be played
let track_list = 

    {
        name: "1st track test",
        artist: "JD player",
        image: "JDmp.jpeg",
        path: '../sample1.mp3'
    }


// Load track
function loadTrack(track_index) {
    clearInterval(updateTimer);
    resetValues();

    current_track.src = track_list[track_index].path;
    current_track.load();
}

// Button Functionality for play pause
function playpauseTrack() {

    //console.log('checking');
    
    if (!isPlaying) {playTrack();}

    else {pauseTrack();}
  }
   
  // Play the loaded track
  function playTrack() {

    //current_track.classList.add('createdAudio');
    current_track.setAttribute('id','createdAudio');

    var playable = document.getElementById('createdAudio');

    // setting attributes for the source element
    insideElement.setAttribute('src',track_list.path);

    showTrack.appendChild(current_track);
    
    console.log('1');

    current_track.play();
    isPlaying = true;

    console.log('checking');
   
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

  function seekTo() {
    // Calculate the seek position by the
    // percentage of the seek slider
    // and get the relative duration to the track
    seekto = curr_track.duration * (seek_slider.value / 100);
   
    // Set the current track position to the calculated seek position
    curr_track.currentTime = seekto;
  }
   
  function setVolume() {
    // Set the volume according to the
    // percentage of the volume slider set
    curr_track.volume = volume_slider.value / 100;
  }

  loadTrack(track_index);
