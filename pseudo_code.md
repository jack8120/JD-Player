# Music Player


## Music controls

- Import Canvas media controls
- Upload tracks and organise into audio assest folder
- Create array with track details
- Upload album artwork and organise into an image assest folder

### Functional Buttons

## Step 1 

upload tracks

create array called songAudiomp3

## step 2

create global var for 

Play
Pause
Skip forward
Skip Back
// Shuffle

## Step 3

- Create function to **play** tracks
- Create function to **pause** tracks
- Create function to **skip** tracks

 `let play = document. getElementById("play");`  
 `let audio = document. getElementById("track");`   
 `button. addEventListener("click", function(){`  
 `if(audio. paused){`  
 `audio. play();`   
 `button. innerHTML = "Pause";`   
 `} else {`   
 `audio. pause();`  

## Step 4

### Shuffle button

- Create function to **randomly/shuffle** select tracks.

 `let audio_files = [`   
 `"TRACKS/1.mp3",`      
 `"TRACKS/2.mp3",`   
 `"TRACKS/3.mp3"`   
 `]`  

 `function random_file(){`   
  `return audio_files[Math.floor(Math.random() * audio_files.length)];`   
 `}`  



# **Landing page**

## Step 1

**Carousel** for current track, next track and previous track. 

onclick event to switch tracks - next / previous. Art work switches with tracks.

## Step 2

**Media** controls - _see above_

## Step 3

**Menu** - Drop Down 
Onclick - expand menu to show links to site pages. 

`function openNav() {`       
 `document.getElementById("mySidenav").style.width = "250px"; `      
`}`       
`function closeNav() { `     
  `document.getElementById("mySidenav").style.width = "0";`      
`}`      


# Form

## Step 1 

create global variables for each input field.

## Step 2
create class for favourites

```

class favouritesForm //working title

       constructor (song, artist, genre, decade, age, etc)
            {
             this.song
             this.artist
             etc
            }
   
 ## Step 3  
   
   function formSubmitted(event){
       event.preventDefault():
       
       favSong = event.target.favsong.value;
       favGenre = event.target.favgenre.value;
       etc
   }         
   
## Step 4   
   
   jackFavs = new favouritesForm(song, artist, genre, decade, age);`.  
   
   
   
favSongElement.innerHTML =  jackFavs.favSong;  
favGenreElement.innerHTML = jackFavs.favGenre;  

} ```


