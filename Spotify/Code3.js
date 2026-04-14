console.log("Hari bol!");

//initialize the elements
let songIndex = 0;
let audioElement = new Audio('About You song.mp3')
let masterPlay = document.getElementById('masterPlay');
let songprogressbar = document.getElementById('songprogressbar');
let songs=[
    {songName: "About You", filePath: "About You song.mp3", coverpath: "About You cover.jpeg"}
]

//audioElement.play();
//Manage pause, play
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0 ){
        audioElement.play();
        // change icon to pause
        masterPlay.classList.remove('fi-rr-play');
        masterPlay.classList.add('fi-rr-pause');
        gif.style.opacity = 1
    }else {
        audioElement.pause();

        // change icon back to play
        masterPlay.classList.remove('fi-rr-pause');
        masterPlay.classList.add('fi-rr-play');
        gif.style.opacity = 0
    }
});

// update progress bar
audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    songprogressbar.value = progress;
});

// seek functionality
songprogressbar.addEventListener('change', () => {
    audioElement.currentTime = songprogressbar.value * audioElement.duration / 100;
});
 


