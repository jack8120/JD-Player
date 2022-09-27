'use strict'

// Select all the elements in the HTML page
// and assign them to a variable
let now_playing = document.getElementsByClassName("now-playing");
let track_art = document.getElementsByClassName("track-art")[0];
let track_name = document.getElementsByClassName("track-name")[0];
let track_artist = document.getElementsByClassName("track-artist")[0];
 
let playpause_btn = document.getElementsByClassName("playpause-track")[0];
let next_btn = document.getElementsByClassName("next-track");
let prev_btn = document.getElementsByClassName("prev-track");
 
let seek_slider = document.getElementsByClassName("seek_slider");
let volume_slider = document.getElementsByClassName("volume_slider");
let current_time = document.getElementsByClassName("current-time");
let total_duration = document.getElementsByClassName("total-duration");

let requiredrange = document.getElementById("getrange");

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
//current_track.classList.add('createdAudio');
current_track.setAttribute('id','createdAudio');
    

let playable = document.getElementById('createdAudio');

// Define the list of tracks that have to be played
let track_list = 
    [ 
        {
            name: "Ready",
            artist: "Le-Gang",
            image: "../legang.jpeg",
            path: '../le-gang-ready.mp3'
        },
        {
            name: "Get Away",
            artist: "Liqwyd",
            image: "../getaway.jpeg",
            path: '../liqwyd-get-away.mp3'
        },
        {
            name: "Highfly",
            artist: "Jay Someday",
            image: "../highfly.jpeg",
            path: '../jay-someday-highfly.mp3'
        },

        {
            name: "Workout",
            artist: "Alyex",
            image: "../workoutalex.jpeg",
            path: '../alex-productions-workout.mp3'
        },

        {
            name: "Sports Rock",
            artist: "Alyex",
            image: "../alexpro.jpeg",
            path: '../alex-productions-sport-rock-workout-hard.mp3'
        },

        {
            name: "Folk Traveller",
            artist: "Essentials",
            image: "../folk.jpeg",
            path: '../alex-productions-folk-travel-vlog-folk.mp3'
        },

        {
            name: "The Future",
            artist: "MaxKo",
            image: "../maxko.jpeg",
            path: '../maxkomusic-building-the-future.mp3'
        },

    ]
    
    //

// Load track
function loadTrack(track_index) {
    //clearInterval(updateTimer);
    //resetValues();
    // setting attributes for the source element
    insideElement.setAttribute('src',track_list[track_index].path);
    track_name.innerHTML = track_list[track_index].name;
    track_artist.innerHTML = track_list[track_index].artist;
    track_art.style.backgroundImage = `url(${track_list[track_index].image})`;
    
    
}

// Button Functionality for play pause
function playpauseTrack() {

    //console.log('checking');
    
    if (!isPlaying) {playTrack();}

    else {pauseTrack();}
  }
   
  // Play the loaded track
  function playTrack() {

    

    // setting attributes for the source element
    insideElement.setAttribute('src',track_list[0].path);
    showTrack.appendChild(current_track);   
    //console.log('1');
    current_track.play();
    isPlaying = true;
    track_name.innerHTML = track_list[0].name;
    track_artist.innerHTML = track_list[0].artist;
    track_art.style.backgroundImage = `url(${track_list[0].image})`;// "url(" + track_list.image + ")"
    

    //console.log('checking');
   
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

    
    showTrack.removeChild(current_track); 
    
      track_index++;
       insideElement.removeAttribute('src');
       insideElement.setAttribute('src',track_list[track_index].path);
       
        
       showTrack.appendChild(current_track);  
       current_track.load();
       current_track.play();
       track_name.innerHTML = track_list[track_index].name;
       track_artist.innerHTML = track_list[track_index].artist;
       track_art.style.backgroundImage = `url(${track_list[track_index].image})`;
      
        // Go back to the first track if the
        // current one is the last in the track list
        
      }
   
 
  function prevTrack() {
    showTrack.removeChild(current_track); 
    
      track_index--;
       insideElement.removeAttribute('src');
       insideElement.setAttribute('src',track_list[track_index].path);
       
        
       showTrack.appendChild(current_track);  
       current_track.load();
       current_track.play();
       track_name.innerHTML = track_list[track_index].name;
       track_artist.innerHTML = track_list[track_index].artist;
       track_art.style.backgroundImage = `url(${track_list[track_index].image})`;
  }


  // Shuffle function
  function shuffle() {

    showTrack.removeChild(current_track); 
    
    let rand = Math.floor(Math.random() * (track_list.length-1 - 0) + 0);

    track_index = rand;


       insideElement.removeAttribute('src');
       insideElement.setAttribute('src',track_list[track_index].path);
       
        
       showTrack.appendChild(current_track);  
       current_track.load();
       current_track.play();
       track_name.innerHTML = track_list[track_index].name;
       track_artist.innerHTML = track_list[track_index].artist;
       track_art.style.backgroundImage = `url(${track_list[track_index].image})`;
    
    
    
  }

  function seekTo() {
    // Calculate the seek position by the
    // percentage of the seek slider
    // and get the relative duration to the track
    seekTo = current_track.duration * (seek_slider.value / 100);
   
    // Set the current track position to the calculated seek position
    current_track.currentTime = seekTo;
  }
   
  function seekUpdate() {
    let seekPosition = 0;
   
    // Check if the current track duration is a legible number
    if (!isNaN(current_track.duration)) {
      seekPosition = current_track.currentTime * (100 / current_track.duration);
      seek_slider.value = seekPosition;
   
      // Calculate the time left and the total duration
      let currentMinutes = Math.floor(current_track.currentTime / 60);
      let currentSeconds = Math.floor(current_track.currentTime - currentMinutes * 60);
      let durationMinutes = Math.floor(current_track.duration / 60);
      let durationSeconds = Math.floor(current_track.duration - durationMinutes * 60);
   
      // Add a zero to the single digit time values
      if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
      if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
      if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
      if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
   
      // Display the updated duration
      current_time.textContent = currentMinutes + ":" + currentSeconds;
      total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
  }

  function setVolume() {
    // Set the volume according to the
    // percentage of the volume slider set
    requiredrange.value;
    let vol = parseInt(requiredrange.value)
    console.log(vol/100);
    current_track.volume = vol/100;
  }

  

  loadTrack(track_index);
