# Music Player

## Music controls

- Import Canvas media controls
- Upload tracks and organise into audio assest folder
- Create array with track details
- Upload album artwork and organise into an image assest folder

### Functional Buttons

- Create function to **play** tracks
- Create function to **pause** tracks
- Create function to **skip** tracks

 `let play = document. getElementById("play");
 let audio = document. getElementById("track");
 button. addEventListener("click", function(){
 if(audio. paused){
 audio. play();
 button. innerHTML = "Pause";
 } else {
 audio. pause();`

### Shuffle button

- Create function to **randomly/shuffle** select tracks.

 `let audio_files = [
 "TRACKS/1.mp3",
 "TRACKS/2.mp3",
 "TRACKS/3.mp3"
 ]

 function random_file(){
  return audio_files[Math.floor(Math.random() * audio_files.length)];
 }`


