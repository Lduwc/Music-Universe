const song = document.getElementById("song");
const playBtn =document.querySelector(".player-inner");
const nextBtn= document.querySelector(".play-forward");
const nextBtn= document.querySelector(".play-backward");
let isPlaying =true;
const musics = ['buonhayvui.mp3','danhdoi.mp3','hanoi.mp3','phonglong.mp3'];

playBtn.addEventListener("click", playPause);
function playPause() {
    if (isPlaying) {
        song.play();
        playBtn.innerHTML = '<ion-icon class="ti-control-pause"></ion-icon>';
        isPlaying =false;
    } else {
        song.pause();
        playBtn.innerHTML = '<ion-icon class="ti-control-play"></ion-icon>';
        isPlaying= true;
    }
}

