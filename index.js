let image = document.querySelector("img");
let title = document.getElementById("title");
let artist = document.getElementById("artist");
let music = document.querySelector("audio");
let progressContainer = document.getElementById("progress-container");
let progress = document.getElementById("progress");
let currentTimeEl = document.getElementById("current-time");
let durationEl = document.getElementById("duration");
let prevBtn = document.getElementById("prev");
let playBtn = document.getElementById("play");
let nextBtn = document.getElementById("next");

// Music
let songs = [
  {
    imgName: "img/jacinto-1.jpg",
    songName: "music/m1.mp3",
    displayName: "Nain",
    artist: "Badshah",
  },
  {
    imgName: "img/jacinto-2.jpg",
    songName: "music/m2.mp3",
    displayName: "laagi lagan shankara ",
    artist: "	Hansraj Raghuvanshi ,",
  },
  {
    imgName: "img/jacinto-3.jpg",
    songName: "music/m3.mp3",
    displayName: " Ek Hazaaron Mein Meri Behna Hai",
    artist: "Shreya Ghoshal",
  },
  {
    imgName: "img/metric-1.jpg",
    songName: "music/m4.mp3",
    displayName: "Mera Bhai Tu",
    artist: "Naved Shaikh, Mr. Sohu",
  },
];

// check if playing
let isPlaying = false;

// play
function playSong() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "pause");
  music.play();
}

// pause
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "play");
  music.pause();
}

// play and pause event listener
playBtn.addEventListener("click", () =>
  isPlaying ? pauseSong() : playSong()
);

// update Dom
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = song.songName;
  image.src = song.imgName;
}

let songIndex = 0;
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}
loadSong(songs[songIndex]);

function updateProgressBar(e) {
  if (isPlaying) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    // calculate display for duration
    const durationMinutes = Math.floor(duration / 60);
    console.log(durationMinutes);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`;
    }
    console.log(durationSeconds);
    // Delay switching duration Element to avoid NaN
    if (durationSeconds) {
      durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
    }

    // calculate display for current
    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`;
    }
    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
  }
}

function setProgressBar(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const { duration } = music;
  music.currentTime = (clickX / width) * duration;
}

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
music.addEventListener("ended", nextSong);
music.addEventListener("timeupdate", updateProgressBar);
progressContainer.addEventListener("click", setProgressBar);
