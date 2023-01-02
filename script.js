console.log('It is my js for spotify')

let songIndex = 0;
let audioElement = new Audio('./songs/Maan Meri Jaan.mp3');
let myProgressBar = document.getElementById('musicBar');
let masterSongName = document.getElementById('masterSongName');
let masterPlay = document.getElementById('masterPlay');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: 'Chhod Diya', filePath: './songs/Chhod Diya.mp3', coverPath: './covers/1.jpg' },
    { songName: 'Kuch Is Tarah', filePath: './songs/Kuch Is Tarah.mp3', coverPath: './covers/2.jpg' },
    { songName: 'Raatan nu das menu neend kyu na aave', filePath: './songs/Raatan nu das menu neend kyu na aave', coverPath: './covers/3.jpg' },
    { songName: 'Maan Meri Jaan', filePath: './songs/Maan Meri Jaan', coverPath: './covers/4.jpg' },
    { songName: 'Chill night - albert', filePath: './songs/1', coverPath: './covers/5.jpg' },
    { songName: 'Enjoy the vibe -justin', filePath: './songs/2', coverPath: './covers/6.jpg' },
    { songName: 'Love me by justin', filePath: './songs/3', coverPath: './covers/7.jpg' },
]


songItems.forEach((element, i) => {

    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});


// Handle the play pause

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;

    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

// update music bar
audioElement.addEventListener('timeupdate', () => {
    console.log('music bar updated');
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    myProgressBar.value = progress

})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
})

const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('playMiniSong')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

// mini song player 
Array.from(document.getElementsByClassName('playMiniSong')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlay();
        songIndex = parseInt(e.target.id);
        // index = document.getElementById(e.target.id)
        // console.log(index);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `./songs/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        masterSongName.innerText = songs[songIndex].songName;
        gif.style.opacity = 1;
        
    })
})

// forward and backward

document.getElementById('iconf').addEventListener('click', (e) => {
    if (songIndex >= 7) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    makeAllPlay();
    audioElement.src = `./songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    masterSongName.innerText = songs[songIndex].songName;
    gif.style.opacity = 1;

});

document.getElementById('iconb').addEventListener('click', (e) => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
        
    }
    audioElement.src = `./songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    masterSongName.innerText = songs[songIndex].songName;
    gif.style.opacity = 1;

});