//Cho phep cac thao tac cua nguoi dung voi web
let currentSong=0;
//lay phan tu trong song tu audio
const music=document.querySelector('#audio');
const seekbar=document.querySelector('.seek-bar');
const artist=document.querySelector('.artist');
const songname=document.querySelector('.song-name');
const boxdisk=document.querySelector('.box-disk');
const currenttimes=document.querySelector('.current-time');
const musictime=document.querySelector('.music-time');
const btnplay=document.querySelector('.btn-play');
const btnback=document.querySelector('.btnback');
const btnnext=document.querySelector('.btnnext');


btnplay.addEventListener('click',()=>{
    //Xac dinh bai hat chay va dung de hien thi nut
    if(btnplay.className.includes('pause')){
        music.play();
    }else{
        music.pause();
    }
    btnplay.classList.toggle('pause');
    boxdisk.classList.toggle('play');
});

// Cài đặt bài hát

const setSong=(i)=>{
    seekbar.value=0;
    let song=songs[i];
    currentSong=i;
    //thiet lap tep am thanh vao bai hat
    music.src=song.path;
    //Dat ten bai hat
    songname.innerHTML=song.name;
    //Dat ten nghe si
    artist.innerHTML=song.artist;
    boxdisk.style.backgroundImage=`url('${song.image}')`;

    currenttimes.innerHTML='00:00';
    setTimeout(()=>{
        seekbar.max=music.duration;
        musictime.innerHTML =formatTimes(music.duration);
    }, 300);
}

setSong(0);
//Hien thi thoi gian phut va giay
const formatTimes=(time)=>{
    let min=Math.floor(time / 60);
    if(min<10){
        min=`0${min}`;
    }
    let sec=Math.floor(time % 60);//tinh toan so giay 
    if(sec<10){
        sec=`0${sec}`;
    }
    return `${min}:${sec}`;
}

// Set seek bar
setInterval(() => {
    seekbar.value=music.currentTime;
    //Cap nhat thoi gian hien tai
    currenttimes.innerHTML=formatTimes(music.currentTime);
    //De het thoi gian chay bai moi
    if(Math.floor(music.currentTime)==Math.floor(seekbar.max)){
        btnnext.click();
    }
}, 500);
//Cap nhat khi nguoi dung thay doi thoi gian
seekbar.addEventListener('change',()=>{
    music.currentTime=seekbar.value;
});

const playMusic=()=>{
    music.play();
    btnplay.classList.remove('pause');
    //de dia chay
    boxdisk.classList.add('play');
}

// Next and Preview
btnnext.addEventListener('click',()=>{
    if(currentSong>=songs.length-1){
        currentSong=0;
    }else{
        currentSong++;
    }
    setSong(currentSong);
    playMusic();
}); 

btnback.addEventListener('click',()=>{
    if(currentSong<=0){
        currentSong=songs.length-1;
    }else{
        currentSong--;
    }
    //setsong để cập nhật bài hát,curretsong dể chạy bài hát mới
    setSong(currentSong);
    playMusic();
}); 



